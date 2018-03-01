

const initialState = {
  numberOfClicks: 0,
}

export default function reducer(state = initialState, action = {}){

  switch (action.type) {
      case 'INCREMENT_COUNTER':
        return {
          ...state,
          numberOfClicks: state.numberOfClicks+1
        }
      default:
        return state
    }
}
