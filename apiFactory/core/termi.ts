import { GATEWAY_ENDPOINT, TERMI_GATEWAY_ENDPOINT } from '../axios.config'

export const termi_api = {
	 $_termi_sms: (payload: any) => {
		const url = 'https://v3.api.termii.com/api/sms/send'
		return TERMI_GATEWAY_ENDPOINT.post(url, payload)
	},
    $_create_account_webhook: (payload: any) => {
		const url = '/accountCreationCallback'
		return GATEWAY_ENDPOINT.post(url, payload)
	}
}
