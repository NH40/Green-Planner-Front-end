export function formatTime(secondsLeft: number) {
	const minutes = Math.floor(secondsLeft / 60)
	const seconds = secondsLeft % 60

	return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}
