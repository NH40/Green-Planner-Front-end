import type { Dispatch, SetStateAction } from 'react'

import type { IPomodoroRoundResponse } from '@/types/pomodoro.types'

export interface ITimerState {
	isRunning: boolean
	secondsLeft: number
	activeRound: IPomodoroRoundResponse | undefined

	setIsRunning: Dispatch<SetStateAction<boolean>>
	setSecondsLeft: Dispatch<SetStateAction<number>>
	setActiveRound: Dispatch<SetStateAction<IPomodoroRoundResponse | undefined>>
}
