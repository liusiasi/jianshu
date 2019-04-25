import { fromJS} from 'immutable'
import * as constants from './constants'
const defualtState = fromJS({
  list:[],
  articleList: [],
  recommendList: [],
  writerList:[{
    id:1,
    title:'简书大课堂',
    info:'写了1498.1k字 · 32.6k喜欢',
    imgUrl:'//upload.jianshu.io/users/upload_avatars/3627484/eb973bb9-37ba-4d07-acec-850c0a66d1bb.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  }],
  showScroll: true,
})

export default ( state=defualtState , action )=>{
  switch( action.type ) {
    case constants.GET_DATA_HOME:
      return state.merge({
        'articleList': action.articleList,
        'recommendList': action.recommendList,
        'list': action.topicList,

      });
    case constants.GET_MORE_ARTICLE:
      return state.set('articleList',state.get('articleList').concat(action.data));
    case constants.TOGGLE_TOP_SHOW:
      return state.set('showScroll', action.data);
    default:
        return state;

  }
}