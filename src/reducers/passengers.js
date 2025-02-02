import {
  GET_PASSENGERS_DATA,
  GET_PASSENGERS_DATA_SUCCESS,
  GET_PASSENGERS_DATA_ERROR,
} from '../actions/passengers'

const initialState = {
  passengers: [],
  maxSeats: '',
  freeSeats: '',
  startPointName: '',
  finishPointName: '',
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PASSENGERS_DATA:
      return {
        ...state,
      }
    case GET_PASSENGERS_DATA_SUCCESS:
      const passengers = action.payload
      const {
        freeSeats,
        maxSeats,
        startPointName,
        finishPointName,
      } = action.payload
      return {
        ...state,
        passengers,
        freeSeats,
        maxSeats,
        startPointName,
        finishPointName,
      }
    case GET_PASSENGERS_DATA_ERROR:
      const { error } = action
      return {
        ...state,
        error,
      }
    default:
      return state
  }
}

export default reducer
