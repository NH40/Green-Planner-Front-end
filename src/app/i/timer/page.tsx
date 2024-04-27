import { Heading } from '@/components/ui/Heading'
import type { Metadata } from 'next'
import { NO_INDEX_PAGE } from '../../../../constants/seo.constants'
import { Pomodoro } from './Pomodoro'

export const metadata: Metadata = {
	title: 'Pomodoro Таймер',
	...NO_INDEX_PAGE
}

export default function PomodoroPage() {
	return (
		<div>
			<Heading title='Pomodoro таймер' />
			<Pomodoro />
		</div>
	)
}
