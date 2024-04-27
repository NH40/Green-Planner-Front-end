import { GlobalLoader } from './GlobalLoader'
import { Profile } from './profile/Profile'

export function Header() {
	return (
		<header>
			<GlobalLoader />
			<Profile />
		</header>
	)
}
