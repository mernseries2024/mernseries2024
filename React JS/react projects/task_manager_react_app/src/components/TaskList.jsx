/* eslint-disable react/prop-types */
import Task from "./Task";

function TaskList({ tasks }) {
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </>
  );
}

export default TaskList;
