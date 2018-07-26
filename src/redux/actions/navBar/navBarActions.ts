import {
  INavBarHideAction,
  INavBarShowAction,
  INavBarToggleAction
} from './index';

import keys from '../../actionTypes/actionTypeKeys';

export function navBarToggle(): INavBarToggleAction {
  return{
    type: keys.NAVBAR_TOGGLE
  }
}

export function navBarShow(): INavBarShowAction {
  return{
    type: keys.NAVBAR_SHOW
  }
}

export function navBarHide(): INavBarHideAction {
  return{
    type: keys.NAVBAR_HIDE
  }
}