import { useForm } from 'react-hook-form'
import { createTask } from '../api/tasks'

export const TaskFormPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = handleSubmit(async data => {
        const res = await createTask(data)
        console.log(res);
    })

    return (
        <div className='task-form-wrapper'>
            <form className='task-form' onSubmit={onSubmit}>

                <input type="text" placeholder='Title'
                    {...register('title', { required: true })}
                />  {errors.title && <p>title field is required</p>}

                <textarea rows='3' placeholder="Description" id=""
                    {...register('description', { required: true })}>
                </textarea>
                    {errors.description && <p>description field is required</p>}

                <button>
                    Save
                </button>
                
            </form>
        </div>
    )
}
