import { Heading } from '@/components/ui/Heading'
import type { Metadata } from 'next'
import { NO_INDEX_PAGE } from '../../../constants/seo.constants'
import { Statistics } from './Statistics'

export const metadata: Metadata = {
	title: 'Статистика',
	...NO_INDEX_PAGE
}

export default function DashboardPage() {
	return (
		<div>
			<Heading title='Статистика' />
			<Statistics />
		</div>
	)
}
