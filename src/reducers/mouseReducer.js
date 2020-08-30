import { SET_MOUSE_CLASS } from '../actions/type';

const initialState = {
	mouseClasses: '',
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_MOUSE_CLASS:
			return {
				...state,
				mouseClasses: action.payload,
			};

		default:
			return state;
	}
}
