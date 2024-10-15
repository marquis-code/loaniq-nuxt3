import { GATEWAY_ENDPOINT } from '../axios.config'

export const profile_api = {
	 $_get_account_profile: () => {
		const url = '/user/user-profile'
		return GATEWAY_ENDPOINT.get(url)
	},
    $_get_next_of_kin_profile: () => {
		const url = '/user/nextOfKin'
		return GATEWAY_ENDPOINT.get(url)
	},
    $_upload_next_of_kin_profile: (payload: any) => {
		const url = '/user/upload-nextOfKin'
		return GATEWAY_ENDPOINT.post(url, payload)
	},
    $_upload_government_id: (payload: any) => {
		const url = '/user/upload-governmentid'
		return GATEWAY_ENDPOINT.post(url, payload)
	},
    $_upload_employment_info: (payload: any) => {
		const url = '/user/employment-information'
		return GATEWAY_ENDPOINT.post(url, payload)
	},
    $_forgot_pin: () => {
		const url = '/user/forgot-pin'
		return GATEWAY_ENDPOINT.post(url)
	},
    $_reset_transaction_pin: (payload: any) => {
		const url = '/user/reset-pin'
		return GATEWAY_ENDPOINT.post(url, payload)
	},
}


