const inital={
    result:0
}
export const Reducer = (state = inital, action) => {
    switch (action.type) {
        case 'deposit':
        return {
          ...state,
          result: state.result + action.payload,
        };

        case 'withdraw':
              return {
                ...state,
                result: state.result - action.payload,
              };

         default:
            return state;
    }
}