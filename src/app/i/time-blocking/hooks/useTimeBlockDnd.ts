import {
	DragEndEvent,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Dispatch, SetStateAction } from 'react'

import { timeBlockService } from '@/services/time-block.services'
import { ITimeBlockResponse } from '@/types/time-block.types'



export function useTimeBlockDnd(
	items: ITimeBlockResponse[] | undefined,
	setItems: Dispatch<SetStateAction<ITimeBlockResponse[] | undefined>>
) {
	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor)
	)

	const queryClient = useQueryClient()

	const { mutate } = useMutation({
		mutationKey: ['update order time block'],
		mutationFn: (ids: string[]) => timeBlockService.updateOrderTimeBlock(ids),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['time-blocks'] })
		}
	})

	const handleDragEnd = (event: DragEndEvent) => {
		const { active, over } = event

		if (active.id !== over?.id && items) {
			const oldIndex = items.findIndex(item => item.id === active.id)
			const newIndex = items.findIndex(item => item.id === (over?.id || ''))

			if (oldIndex !== -1 && newIndex !== -1) {
				// Создаем новый отсортированный массив
				const newItems = arrayMove(items, oldIndex, newIndex)
				// Обновляем состояние
				setItems(newItems)
				// Обновляем порядок на сервере
				mutate(newItems.map(item => item.id))
			}
		}
	}

	return { handleDragEnd, sensors }
}
