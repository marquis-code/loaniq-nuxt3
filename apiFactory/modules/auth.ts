import { GATEWAY_ENDPOINT } from '../axios.config'

export const auth_api = {
	 $_register: (payload: any) => {
		const url = '/auth/signup'
		return GATEWAY_ENDPOINT.post(url, payload)
	},
	$_verify_otp: (payload: any) => {
		const url = '/auth/verify-otp'
		return GATEWAY_ENDPOINT.post(url, payload)
	},
	$_resend_otp: (payload: any) => {
		const url = '/auth/resend-otp'
		return GATEWAY_ENDPOINT.post(url, payload)
	},
	$_create_passcode: (payload: any) => {
		const url = '/auth/create-passcode'
		return GATEWAY_ENDPOINT.post(url, payload)
	},
	$_set_transaction_pin: (payload: any) => {
		const url = '/auth/create-pin'
		return GATEWAY_ENDPOINT.post(url, payload)
	},
	$_recover_passcode: (payload: any) => {
		const url = '/auth/forgot-passcode'
		return GATEWAY_ENDPOINT.post(url, payload)
	},
	$_create_new_passcode: (payload: any) => {
		const url = '/auth/new-passcode'
		return GATEWAY_ENDPOINT.post(url, payload)
	},
	$_login: (credential: any) => {
		const url = '/auth/login'
		return GATEWAY_ENDPOINT.post(url, credential)
	},
	$_validate_wema_otp_creation: (credential: any) => {
		const url = '/auth/confirm-account-creation-otp'
		return GATEWAY_ENDPOINT.post(url, credential)
	}
}
