import {INCREMENT, DECREMENT} from './actions';

const initialState = {
        count: 0
}

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case INCREMENT: {
            return {
                count : action.payload + 1
            }
        }
        case DECREMENT : {
            return {
                count : action.payload-1
            }
        }
        default : {
            return state;
        }
    }
}
