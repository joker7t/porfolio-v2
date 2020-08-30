import { SET_MOUSE_CLASS } from './type';

export const setMouseClass = (classes = '') => (dispatch) => {
	dispatch({
		type: SET_MOUSE_CLASS,
		payload: classes,
	});
};
