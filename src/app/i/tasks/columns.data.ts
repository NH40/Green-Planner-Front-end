import dayjs, { type Dayjs } from 'dayjs'
import 'dayjs/locale/ru'
// подключение локали, если она вам нужна
import isoWeek from 'dayjs/plugin/isoWeek'
// ISO неделя
import weekOfYear from 'dayjs/plugin/weekOfYear'

// плагин для работы с неделями

dayjs.extend(weekOfYear)
dayjs.extend(isoWeek)

export const FILTERS: Record<string, Dayjs> = {
	today: dayjs().startOf('day'),
	tomorrow: dayjs().add(1, 'day').startOf('day'),
	'on-this-week': dayjs().endOf('isoWeek'),
	'on-next-week': dayjs().add(1, 'week').startOf('day'),
	later: dayjs().add(2, 'week').startOf('day')
}

export const COLUMNS = [
	{
		label: 'Сегодня',
		value: 'today'
	},
	{
		label: 'Завтра',
		value: 'tomorrow'
	},
	{
		label: 'На этой недели',
		value: 'on-this-week'
	},
	{
		label: 'На следующей недели',
		value: 'on-next-week'
	},
	{
		label: 'Позже',
		value: 'later'
	},
	{
		label: 'Завершенные',
		value: 'completed'
	}
]
