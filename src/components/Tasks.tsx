import React from "react";

interface Task {
  text: string;
  completed: boolean;
}

interface TasksProps {
  filteredTasks: Task[];  
  toggleTask: (index: number) => void;
  tasks: Task[];
}

const Tasks: React.FC<TasksProps> = ({ filteredTasks, toggleTask,tasks }) => {
  return (
    <ul className="w-[285px] min-h-[184px] p-[24px] gap-[60px] rounded-[8px] border border-[#DEE2E6]">
      {filteredTasks.map((task, index) => (
        <li key={index} className="flex items-center mb-2">
          <div className="relative flex items-center">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(tasks.indexOf(task))}
              className="absolute opacity-0 cursor-pointer"
            />
            <div
              className={`border-[2px] rounded-[6px] flex items-center justify-center h-[18px] w-[18px] ${
                task.completed
                  ? "bg-[#17A2B8] border-[#17A2B8]"
                  : "bg-white border-[#DEE2E6]"
              }`}
            >
              {task.completed && (
                <svg
                  className="w-2.5 h-2.5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              )}
            </div>
          </div>
          <span
            className={`ml-2 text-[16px] font-[500] leading-[19.36px] weight-[500] ${
              task.completed ? "text-[#17A2B8]" : "text-[#6C757D]"
            }`}
          >
            {task.text}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
