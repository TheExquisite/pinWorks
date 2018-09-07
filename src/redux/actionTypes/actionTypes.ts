import {
  INavBarShowAction,
  INavBarHideAction,
  INavBarToggleAction
} from "../actions/navBar/index"

type ActionTypes = 
  | INavBarShowAction
  | INavBarHideAction
  | INavBarToggleAction;

export default ActionTypes;