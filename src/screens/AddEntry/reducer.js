import initialState from './state'
import { RECEIVE_ENTRIES, ADD_ENTRY } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ENTRIES:
      return {
        ...state,
        entries: state.entries,
      }
    case ADD_ENTRY:
      return {
        ...state,
        entries: [
          ...state.entries,
          action.entry,
        ],
      }
    default:
      return state
  }
}