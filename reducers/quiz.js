
import { ADD_POINT, RESET_SCORE } from '../actions/quiz'

export const quiz = (state={score:0}, action)  => {
    switch(action.type) {
        case ADD_POINT:
            return {
            ...state,
            score: state.score + 1
        }
        case RESET_SCORE:
            return {
                ...state,
                score:0
            }
        default:
           return state;
    }
}