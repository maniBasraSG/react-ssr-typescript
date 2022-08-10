/* eslint-disable import/no-anonymous-default-export */
import { createStore } from 'redux';

import rootReducer from '../client/store/root-reducer';

export default () => {
	const store = createStore(rootReducer);
	return store;
};
