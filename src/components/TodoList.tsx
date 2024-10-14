import React, { useState, useEffect, FormEvent } from "react";
import TodoInput from "./TodoInput";
import TodoButtons from "./TodoButtons";
import Tasks from "./Tasks";

interface Task {
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [filter, setFilter] = useState<"all" | "active">("all");

  const completedTasks = tasks.filter((task) => task.completed);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      try {
        const parsedTasks = JSON.parse(savedTasks) as Task[];
        setTasks(parsedTasks);
      } catch (error) {
        console.error("Error parsing tasks from localStorage", error);
        setTasks([]);
      }
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const toggleTask = (index: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = (e: FormEvent) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { text: newTask, completed: false },
      ]);
      setNewTask("");
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    return true;
  });

  return (
    <div className="w-[454px] h-[542px] bg-[#FFF] flex flex-col items-center justify-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <TodoInput newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
      <TodoButtons
        completedTasks={completedTasks}
        setTasks={setTasks}
        filter={filter}
        setFilter={setFilter}
      />

      <Tasks
        filteredTasks={filteredTasks}
        tasks={tasks}
        toggleTask={toggleTask}
      />
    </div>
  );
};

export default TodoList;
