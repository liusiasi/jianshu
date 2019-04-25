import React, { Component } from 'react'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
} from './style.js'
import List from './components/List.js'
import Topic from './components/Topic.js'
import Writer from './components/Writer.js'
import Recommend from './components/Recommend.js'
import { connect } from 'react-redux'
import { actionCreator } from './store'
import {
  BackTop
} from './style.js'

class Home extends Component {
  handleScrollTop(){
    window.scrollTo(0,0);
  }
  bindEvents(){
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt='' className="image" src="//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {
          this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
        }
        
      </HomeWrapper>
    )
  }

  componentDidMount(){
    this.props.changeDataHome();
    this.bindEvents();
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.props.changeScrollTopShow);
  }
}

const mapStateToProps = (state) => ({
  showScroll: state.getIn(['home','showScroll']),
})
const mapDispatchToThis = (dispatch) => {
  return {
    changeDataHome() {
      dispatch(actionCreator.getDataHome());
    },
    changeScrollTopShow(){
      if((document.documentElement.scrollTop) > 400 ){
        dispatch(actionCreator.toggleTopShow(true));
      }
      else{
        dispatch(actionCreator.toggleTopShow(false));

      }
    }
  }
}
export default connect(mapStateToProps,mapDispatchToThis)(Home);