
import { ADD_POINT, RESET_SCORE } from '../actions/quiz'

export const quiz = (state={score:0}, action)  => {
    switch(action.type) {
        case ADD_POINT:
            console.log('state')
            return {
                score: parseInt(state.score) + 1
            }
        case RESET_SCORE:
            return {
                score:0
            }
        default:
           return state;
    }
}