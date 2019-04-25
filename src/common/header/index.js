import React, { Component } from 'react'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
} from './style.js'
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreator } from './store'
import { Link } from 'react-router-dom'
import { actionCreator as loginActionCreator } from '../../pages/login/store'

class Header extends Component {
  getListArea() {
    const { focused, list, mouseIn, handleMouseEnter, handleMouseLeave, page, totalPage, handleChangePage} = this.props;
    const pageList = [];
    const jsList = list.toJS();
    if( jsList.length ){
      for( let i = (page-1)*10 ; i < ( page*10 < jsList.length ? page*10 : jsList.length) ; i++){
          pageList.push(
            <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
          );
        }
    }
    if ( focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          >
          <SearchTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <i ref={(icon) => { this.spinIcon = icon }}className='iconfont spin'>&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>)
    }
    else {
      return '';
    }
  }
  render() {
    const { focused, handleInputBlur, handleInputFocus, list, login, handlelogout } = this.props
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载APP</NavItem>

          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? "focus" : ""}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? " iconfont focus zoom" : "iconfont zoom"}>&#xe623;</i>
            {this.getListArea(focused)}
          </SearchWrapper>
          {
            login ?  <NavItem className='right' onClick={handlelogout}>退出</NavItem> :  
              <Link to='/login'>
              <NavItem className='right'>登录</NavItem>
              </Link>
          }
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
        </Nav>
        <Addition>
          <Link to='/writer'>
            <Button className='writting'>
              <i className="iconfont">&#xe61b;</i>
              写文章
            </Button>
          </Link>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

const mapStateTothis = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    login: state.getIn(['login','login'])
  }
}

const mapDispatchTothis = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreator.getList());
      dispatch(actionCreator.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreator.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreator.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreator.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
      if( originAngle ){
        originAngle = parseInt(originAngle, 10);
      }else{
        originAngle = 0;
      }
      spin.style.transform ='rotate('+ (originAngle+360)+'deg)';

      if(page < totalPage ){
        dispatch(actionCreator.changePage(page+1));
      }
      else{
        dispatch(actionCreator.changePage(1));
      }
    },
    handlelogout() {
      dispatch(loginActionCreator.changelogout());
    }
  }
}



export default connect(mapStateTothis, mapDispatchTothis)(Header);