import { combineReducers } from 'redux';
import navBarReducer from './navBarReducer';
//import IStoreState from '../store/IStoreState';
const rootReducer = combineReducers({
    navBar: navBarReducer
});
export default rootReducer;
//# sourceMappingURL=rootReducer.js.map