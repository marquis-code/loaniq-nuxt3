import { GATEWAY_ENDPOINT } from '../axios.config'

export const upload_api = {
	 $_upload_file: (payload: any) => {
		const url = '/upload-file'
		return GATEWAY_ENDPOINT.post(url, payload)
	}
}
