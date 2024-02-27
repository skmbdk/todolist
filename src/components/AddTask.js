import { useRef, useState } from "react";

const AddTask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");
  const inputRef = useRef(null);

  // addTaskHandler
  const addTaskHandler = (e) => {
    e.preventDefault();
    //post task into server
    postingTask(task);
    inputRef.current.blur();
    setTask("");
  };

  // posting task
  const postingTask = async (text) => {
    const res = await fetch(
      "https://cuboid-accessible-roarer.glitch.me/tasks",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ text }),
      }
    );
    const data = await res.json();
    //real time data updation
    setTasks([...tasks, data]);
  };

  return (
    <form
      className="bg-gray-900 container mx-auto flex justify-between p-10"
      onSubmit={addTaskHandler}
    >
      <input
        ref={inputRef}
        required
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="bg-transparent outline-none border-b-2 border-gray-400 py-2 px-5 focus:border-teal-600"
        type="text"
        placeholder="what things to do?"
      />
      <button
        className="bg-teal-900/30 py-2 px-5 border-2 border-teal-600 text-teal-500 rounded hover:bg-teal-500 hover:text-gray-900 duration-300"
        type="submit"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
