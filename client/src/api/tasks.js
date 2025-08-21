import axios from "axios";



export const getAllTasks = () => {
    return axios.get('http://localhost:8000/tasks/api/v1/tasks/')
}
// export async function getAllTasks() {
//   try {
//     const response = await axios.get('http://127.0.0.1:8000/tasks/api/v1/tasks');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }