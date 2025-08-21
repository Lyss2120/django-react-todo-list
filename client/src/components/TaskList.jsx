import { useEffect, useState } from 'react'
import { getAllTasks } from '../api/tasks'
import { TaskCard } from './TaskCard';

export const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const loadTasks = async () => {
            const res = await getAllTasks();
            setTasks(res.data);
        }
        loadTasks();
    }, [])
    console.log(tasks);


    return (
        <div >
            {tasks.map(task =>
                <>
                    <TaskCard key={task.id} task={task} />
                </>
            )}
        </div>
    )
}
