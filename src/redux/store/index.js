import { createStore } from 'redux';
import reducers from '../reducers';

const initStore = createStore(reducers);

export default initStore;
