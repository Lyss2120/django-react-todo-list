import axios from "axios";



const  url= axios.create({baseURL: 'http://localhost:8000/tasks/api/v1/tasks/'});

export const getAllTasks = () => url.get('/');

export const createTask = (task) =>  url.post('/', task);
