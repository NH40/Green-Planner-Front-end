import { useProfile } from '@/hooks/useProfile'
import { TypeUserForm } from '@/types/auth.types'
import { useEffect } from 'react'
import { UseFormReset } from 'react-hook-form'

export function useLoadData(reset: UseFormReset<TypeUserForm>) {
	const {data, isSuccess} = useProfile()

	useEffect (() => {
		if (isSuccess && data) {
			reset({
				email: data.user.email,
				name: data.user.name,
				breakInterval: data.user.breakInterval,
				intervalCount: data.user.intervalCount,
				workInterval: data.user.workInterval,
			})
		}
	}, [isSuccess])
}