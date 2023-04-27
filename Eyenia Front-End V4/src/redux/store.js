import { createStore } from 'redux';
import authReducer from './reducer/auth.reducer';

const store = createStore(authReducer);

export default store;