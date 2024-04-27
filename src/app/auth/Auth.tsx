'use client'

import { Heading } from '@/components/ui/Heading'
import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { authService } from '@/services/auth.services'
import { IAuthForm } from '@/types/auth.types'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'



export function Auth() {
	const {register, handleSubmit, reset} = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const [isLoginForm, setIsLoginForm] = useState(false)

	const {push} = useRouter()

	const {mutate} = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) => authService.main(isLoginForm ? 'login' : 'register', data),
		onSuccess() {
			toast.success('Successfully login!')
			reset()
			push(DASHBOARD_PAGES.HOME)
		}
	})

	const onSubmit:SubmitHandler<IAuthForm> = data => {
		mutate(data)
	}

	return (
		<div className = 'flex min-h-screen'>
			<form
			  className = 'w-1/4 m-auto shadow bg-sidebar rounded-xl p-layout'
				onSubmit = {handleSubmit(onSubmit)}
			>
				<Heading title='Авторизация'/>
				
				<Field
					id = 'email'
					label='Email:'
					placeholder='Введите Email:'
					type= 'email'
					extra='mb-4'
					{...register('email', {
						required: 'Email is required!'
					})}
				/>
				<Field
					id = 'password'
					label='Пароль:'
					placeholder='Введите пароль:'
					type= 'password'
					extra='mb-4'
					{...register('password', {
						required: 'Password is required!'
					})}
				/>

				<div className = 'flex items-center gap-5 justify-center'>
					<Button onClick={() => setIsLoginForm(true)}>Вход</Button>
					<Button onClick={() => setIsLoginForm(false)}>Регистрация</Button>
				</div>
			</form>
		</div>
	)
}	