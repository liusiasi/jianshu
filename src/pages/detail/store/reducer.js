import { fromJS} from 'immutable'
import * as constants from './constants'
const defualtState = fromJS({
  title: '',
  content: ''
})

export default ( state=defualtState , action )=>{
  switch( action.type ) {
    case constants.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      })
    default:
        return state;

  }
}