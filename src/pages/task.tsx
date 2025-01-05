import { AddTask } from "@/components/module/AddTask";
import TaskCard from "@/components/module/TaskCard";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import { ITask } from "@/types";
import { Fragment } from "react/jsx-runtime";

const Tasks = () => {
  const { data, isLoading, isError } = useGetTasksQuery(undefined);

  console.log(data);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Fragment>
      <div className="max-w-screen-xl mx-auto my-10">
        {/* action */}
        <div className="flex items-center justify-between">
          <p>Task</p>
          <AddTask />
        </div>

        {/* task card */}
        <div className="space-y-3 mt-5">
          {!isLoading &&
            data.tasks.map((task: ITask) => (
              <TaskCard key={task.id} task={task} />
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Tasks;
