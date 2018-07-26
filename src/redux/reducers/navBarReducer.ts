import ActionTypeKeys, { ActionTypeStates } from "../actionTypes/actionTypeKeys";
import ActionTypes from '../actionTypes/actionTypes';
import initalState from './initalStates';
import IStoreState from '../store/IStoreState';


export default function toggleNavBarReducer(
  state = initalState,
  action: ActionTypes
) {
  if (actionTypeEndsInShow(action.type)){
    return showNavBarAction(state);
  } 
  else if (actionTypeEndsInHide(action.type)){
    return hideNavBarAction(state);
  } 
  else if (actionTypeEndsInToggle(action.type)){
    return toggleNavBarAction(state);
  }
  return state;
}

function actionTypeEndsInShow( type: ActionTypeKeys ): Boolean{
  const show = ActionTypeStates.SHOW;

  return type.substring(type.length - show.length) === show;
}

function actionTypeEndsInHide( type: ActionTypeKeys ): Boolean{
  const hide = ActionTypeStates.SHOW;

  return type.substring(type.length - hide.length) === hide;
}

function actionTypeEndsInToggle( type: ActionTypeKeys ): Boolean{
  const toggle = ActionTypeStates.TOGGLE;

  return type.substring(type.length - toggle.length) === toggle;
}

function showNavBarAction(state: IStoreState) {
  return {
    ...state,
    pinBoxVis: true
  }
}

function hideNavBarAction(state: IStoreState) {
  return {
    ...state,
    pinBoxVis: false
  }
}

function toggleNavBarAction(state: IStoreState) {
  return {
    ...state,
    pinBoxVis: !state.pinBoxVis
  }
}