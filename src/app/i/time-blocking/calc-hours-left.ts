import { ITimeBlockResponse } from '@/types/time-block.types'

export function calcHoursLeft(items: ITimeBlockResponse[] | undefined) {
	const totalMinutes = items?.reduce((acc, item) => acc + item.duration, 0) || 0
	const totalHours = Math.floor(totalMinutes / 60) // Убедитесь, что деление выполняется правильно
	const hoursLeft = 24 - totalHours // Вычисляем оставшиеся часы

	return { hoursLeft }
}
