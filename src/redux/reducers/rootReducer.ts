import { combineReducers } from 'redux';
import navBarReducer from './navBarReducer';

const rootReducer = combineReducers({
  pinBoxVis: navBarReducer
});

export default rootReducer;