import React from "react";

interface Task {
  text: string;
  completed: boolean;
}

interface TodoButtonsProps {
  filter: "all" | "active";
  setFilter: (filter: "all" | "active") => void;
  completedTasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

enum TaskFilter {
  All = "all",
  Active = "active",
}

const TodoButtons: React.FC<TodoButtonsProps> = ({
  filter,
  setFilter,
  completedTasks,
  setTasks,
}) => {
  const deleteTask = (taskToDelete: Task) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task !== taskToDelete));
  };

  return (
    <>
      <div className="mb-4 flex w-[285px] h-[36px] justify-between align-middle">
        <button
          className={`flex items-center justify-center rounded-[8px] w-[120.38px] h-[36px] pt-4 pr-4 pb-4 pl-6 ${
            filter === "all"
              ? "bg-[#17A2B8] text-white"
              : "bg-[#FFFFFF] text-[#54595E] border border-[#DEE2E6]"
          } text-[14px] font-[600] leading-[19.36px]`}
          onClick={() => setFilter(TaskFilter.All)}
        >
          Show all
        </button>
        <button
          className={`flex items-center justify-between rounded-[8px] w-[145px] h-[36px] border border-[#DEE2E6] pt-4 pr-4 pb-4 pl-5 whitespace-nowrap ${
            filter === TaskFilter.Active
              ? "bg-[#17A2B8] text-white"
              : "bg-[#FFFFFF] text-[#54595E] border border-[#DEE2E6]"
          }  text-[16px] font-[500] leading-[19.36px] text-center`}
          onClick={() => setFilter(TaskFilter.Active)}
        >
          Hide completed
        </button>
      </div>
      <div className="mb-4 flex w-[285px] h-[36px] justify-between align-middle">
        <button
          className={`flex items-center justify-center rounded-[8px] w-[120.38px] h-[36px] border border-[red] pt-4 pr-4 pb-4 pl-6 text-[#54595E] text-[14px] font-[600] leading-[19.36px]`}
          onClick={() => {
            completedTasks.forEach((task) => deleteTask(task));
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default TodoButtons;
