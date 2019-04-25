import axios from 'axios'
import * as constants from './constants'
import { fromJS } from 'immutable'


const dataHome = (res) => ({
  type:constants.GET_DATA_HOME,
  articleList: fromJS(res.articleList),
  topicList: fromJS(res.topicList),
  recommendList: fromJS(res.recommendList),
})

const moreArticle = (res) => ({
  type: constants.GET_MORE_ARTICLE,
  data:fromJS(res),
})

export const toggleTopShow = (data) => ({
  type: constants.TOGGLE_TOP_SHOW,
  data,
})
export const getDataHome = () => {
  return (dispatch) => {
    axios.get('api/home.json').then((res)=>{
      dispatch(dataHome(res.data.data));
    }).catch(()=>{
      console.log('error');
    })
  }
}

export const getArticleMore = (page) => {
  return (dispatch) => {
    axios.get('api/handleInfoList.json').then((res)=>{
      console.log(res);
      dispatch(moreArticle(res.data.data));
    }).catch(()=>{
      console.log('error');
    })

  }

}