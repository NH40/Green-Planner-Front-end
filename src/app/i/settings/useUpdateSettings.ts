import { userService } from '@/services/user.services'
import { TypeUserForm } from '@/types/auth.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export function useUpdateSettings() {

	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationKey: ['update profile'],
		mutationFn: (data: TypeUserForm) => userService.update(data),
		onSuccess() {
      toast.success("Successfully updated profile")
			queryClient.invalidateQueries({queryKey: ['profile']})
    }
	})
	

	return {mutate, isPending}
}