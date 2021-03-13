import { SHOW, HIDE, HIDE_ASYNC } from '../const/modal.const'

export const show = () => ({ type: SHOW })
export const hide = () => ({ type: HIDE })

export const show_async = () => dispatch => {
  setTimeout(() => {
    dispatch({ type: SHOW })
  }, 2000);
}
export const hide_async = () => ({ type: HIDE_ASYNC })