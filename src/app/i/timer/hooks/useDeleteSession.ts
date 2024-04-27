import { pomodoroService } from '@/services/pomodoro.services'
import { useMutation, useQueryClient } from '@tanstack/react-query'



export function useDeleteSession(onDeleteSuccess: () => void) {
	const queryClient = useQueryClient()

	const { mutate: deleteSession, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete session'],
		mutationFn: (id: string) => pomodoroService.deleteSession(id),
		onSuccess() {

			queryClient.invalidateQueries({
				queryKey: ['get today session']
			})
			onDeleteSuccess()
		}
	})

	return { deleteSession, isDeletePending }
}
