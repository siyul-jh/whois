import { createReducer, createSetValueAction, setValueReducer } from '../../common/redux-helper';
// enum
// API 통신을 위한 Action는 Fecth로 시작
export const Types = {
	SetValue: 'search/SetValue',
	FetchAutoComplete: 'search/FecthAutoComplete',
};
export const actions = {
	setValue: createSetValueAction(Types.SetValue),
	fetchAutoComplete: (keyword) => ({
		type: Types.FetchAutoComplete,
		keyword,
	}),
};
const INITIAL_STATE = {
	keyword: '',
	autoCompletes: [],
};
const reducer = createReducer(INITIAL_STATE, {
	[Types.SetValue]: setValueReducer,
});
export default reducer;
