export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increaseCounter = (value) => {
    return {
        type : INCREMENT,
        payload : value
    }
}

export const decreaseCounter = (value) => {
    return {
        type : DECREMENT,
        payload : value
    }
}