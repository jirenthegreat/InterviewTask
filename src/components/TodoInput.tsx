import React, { FormEvent } from "react";

interface TodoInputProps {
  newTask: string;
  setNewTask: (task: string) => void;
  addTask: (e: FormEvent) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({
  newTask,
  setNewTask,
  addTask,
}) => {
  return (
    <form onSubmit={addTask} className="flex mb-4">
      <div className="relative">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New task input"
          className="w-[285px] h-[48px] p-[16px] pl-[24px] border border-[#DEE2E6] rounded-[8px] placeholder:text-[#54595E] text-[16px] font-[600] leading-[19.36px]"
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center pr-3"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.416 12L10.4157 18L8.41602 15.9991L12.4167 12L8.41602 8.00094L10.4157 6L16.416 12Z"
              fill="#ABB5BE"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default TodoInput;
