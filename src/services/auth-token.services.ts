import Cookies from 'js-cookie'

export enum EnumToken {
	"ACCESS_TOKEN" = "accessToken",
	"REFRESH_TOKEN" = "refreshToken",
}

export const getAccessToken = () => {
	const accessToken = Cookies.get(EnumToken.ACCESS_TOKEN)
	return accessToken || null
}

export const saveTokenStorage = (accessToken: string) => {
	Cookies.set(EnumToken.ACCESS_TOKEN, accessToken, {
		domain: "localhost",
		sameSite: "strict",
		expires: 1,
	})
}

export const removeFromStorage = () => {
	Cookies.remove(EnumToken.ACCESS_TOKEN)
}
