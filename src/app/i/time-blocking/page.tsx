import { Heading } from '@/components/ui/Heading'
import type { Metadata } from 'next'
import { NO_INDEX_PAGE } from '../../../../constants/seo.constants'
import { TimeBlocking } from './TimeBlocking'

export const metadata: Metadata = {
	title: 'Временные блоки',
	...NO_INDEX_PAGE
}

export default function TimeBlockingPage() {
	return (
		<div>
			<Heading title='Временные блоки' />
			<TimeBlocking />
		</div>
	)
}
