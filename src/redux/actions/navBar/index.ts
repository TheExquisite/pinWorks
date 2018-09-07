import keys from "../../actionTypes/actionTypeKeys";

export interface INavBarShowAction {
  readonly type: keys.NAVBAR_SHOW
}

export interface INavBarHideAction {
  readonly type: keys.NAVBAR_HIDE
}

export interface INavBarToggleAction {
  readonly type: keys.NAVBAR_TOGGLE
}