import  { useContext } from "react";
import { AuthContext } from "../../Context/Context";
import toast from "react-hot-toast";

const CreateTask = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userEmail = user.email;
    const name = e.target.name.value;
    const description = e.target.description.value;
    const priority = e.target.priority.value;
    const deadline = e.target.deadline.value;

    const task = { name, description, priority, deadline, userEmail };

    fetch("https://tsm-server-ten.vercel.app/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Task Added Successfully");
        }
      });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mt-5 p-5 rounded-md shadow-lg border space-y-6"
      >
        <div className="grid grid-cols-2 gap-4">
          <label>
            Name:
            <input type="text" name="name" className="input input-bordered" />
          </label>

          <label>
            Description:
            <textarea name="description" className="input input-bordered" />
          </label>

          <label>
            Priority:
            <select name="priority" className="input input-bordered">
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </label>

          <label>
            Deadline:
            <input
              type="date"
              name="deadline"
              className="input input-bordered"
            />
          </label>
        </div>

        <button type="submit" className="bg-[#FFBABA] py-2 rounded-xl btn-block">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
