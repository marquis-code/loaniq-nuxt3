import { GATEWAY_ENDPOINT } from '../axios.config'

export const payment_api = {
	 $_add_card: (payload: any) => {
		const url = '/payment/add-card'
		return GATEWAY_ENDPOINT.post(url, payload)
	},
    $_fetch_cards: () => {
		const url = '/payment/cards'
		return GATEWAY_ENDPOINT.get(url)
	},
    $_add_bank_account: (payload: any) => {
		const url = '/payment/add-account'
		return GATEWAY_ENDPOINT.post(url, payload)
	},
    $_fetch_saved_account: () => {
		const url = '/payment/saved-accounts'
		return GATEWAY_ENDPOINT.post(url)
	},
    $_fetch_transaction_history: () => {
		const url = '/payment/transaction-history'
		return GATEWAY_ENDPOINT.get(url)
	}
}
