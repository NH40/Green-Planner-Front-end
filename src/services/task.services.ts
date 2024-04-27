import { axiosWithAuth } from '@/api/interceptors'
import { ITaskResponse, TypeTaskFormState } from '@/types/task.types'

class TaskService {
	private BASE_URL = "/user/tasks"

	async getTasks() {
    const response = await axiosWithAuth.get<ITaskResponse[]>(this.BASE_URL)
    return response
  }

	async createTask(data: TypeTaskFormState){
    const response = await axiosWithAuth.post<ITaskResponse>(this.BASE_URL, data)
    return response
  }

	async updateTask(id: string, data: TypeTaskFormState) {
    const response = await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data)
    return response
  }

	async deleteTask(id: string) {
    const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
    return response
  }
}

export const taskService = new TaskService()