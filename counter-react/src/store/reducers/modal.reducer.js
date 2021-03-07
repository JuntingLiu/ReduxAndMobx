import { SHOW, HIDE } from '../const/modal.const'

const initialState = {
  show: false
}

const modal = (state = initialState, action) => {
  switch (action.type) {
    case SHOW:
      return { ...state, show: true }
    case HIDE:
      return { ...state, show: false }
    default:
      return state
  }
}

export default modal
