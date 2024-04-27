"use client"

import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'
import { TypeUserForm } from '@/types/auth.types'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useLoadData } from './useLoadData'
import { useUpdateSettings } from './useUpdateSettings'

export function Settings() {
	const {register, handleSubmit, reset} = useForm<TypeUserForm>({
		mode: 'onChange',
	})

	useLoadData(reset)
	const {isPending, mutate} = useUpdateSettings()

	const onSubmit:SubmitHandler<TypeUserForm> = data => {
		const { password, ...rest} = data

    mutate({
			...rest,
      password: password || undefined,
		})
  }

	return (
		<div>
			<form
				className='w-2/4'
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='grid grid-cols-2 gap-10'>
					<div>
						<Field
							id='email'
							label='Email: '
							placeholder='Введите email: '
							type='email'
							{...register('email', {
								required: 'Email is required!'
							})}
							extra='mb-4'
						/>

						<Field
							id='name'
							label='Имя: '
							placeholder='Введите имя: '
							{...register('name')}
							extra='mb-4'
							/>

						<Field
							id='password'
							label='Пароль: '
							placeholder='Введите пороль: '
							type='password'
							{...register('password')}
							extra='mb-10'
						/>
					</div>

					<div>
						<Field
							id='workInterval'
							label='Рабочий цикл (min.): '
							placeholder='Введите рабочий интервал: '
							isNumber
							{...register('workInterval', {
								valueAsNumber: true
							})}
							extra='mb-4'
						/>

						<Field
							id='breakInterval'
							label='Цикл отдыха (min.): '
							placeholder='Введите интервал отдыха: '
							isNumber
							{...register('breakInterval', {
								valueAsNumber: true
							})}
							extra='mb-4'
						/>

						<Field
							id='intervalsCount'
							label='Количество циклов (max 10): '
							placeholder='Введите количество интервалов (max 10): '
							isNumber
							{...register('intervalCount', {
								valueAsNumber: true
							})}
							extra='mb-6'
						/>
					</div>
				</div>

				<Button
					type='submit'
					disabled={isPending}
				>
					Сохронить
				</Button>
			</form>
		</div>
	)
}