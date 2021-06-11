import axios from 'axios';
import { API_HOST } from '../constant';
import { message } from 'antd';

/**
 *
 * @param {object} param
 * @param {'get' | 'post' =} param.method
 * @param {string} param.url
 * @param {object=} param.params
 * @param {object=} param.data
 * @param {object=} param.totalCount
 */
// = 는 Optional이다. 해당 값을 입력하지 않아도 된다는 뜻이다.
export function callApi({ method = 'get', url, params, data }) {
	return axios({
		url,
		method,
		baseURL: API_HOST,
		params,
		data,
		withCredentials: true, // 사용자인증을 위한 토큰을 쿠키로 사용한기위해서 true
	}).then((response) => {
		const { resultCode, resultMessage, totalCount } = response.data;
		if (resultCode < 0) {
			message.error(resultMessage);
		}
		return {
			isSuccess: resultCode === ResultCode.Success,
			data: response.data.data,
			resultCode,
			resultMessage,
			totalCount,
		};
	});
}

export const ResultCode = {
	Success: 0,
};
