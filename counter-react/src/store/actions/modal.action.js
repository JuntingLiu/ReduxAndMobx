import { SHOW, HIDE } from '../const/modal.const'

export const show = () => ({ type: SHOW })
export const hide = () => ({ type: HIDE })

export const show_async = () => dispatch => {
  setTimeout(() => {
    dispatch({ type: SHOW })
  }, 2000);
}