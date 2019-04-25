import React, { PureComponent } from 'react'
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style'
import { connect } from 'react-redux'
import { actionCreator } from './store'
import { Redirect } from 'react-router-dom'

class Login extends PureComponent {
  render(){
    const { Login,loginState } = this.props;
    if( !loginState ){
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号' ref={(account) => this.account = account }/>
            <Input placeholder='密码' ref={(password) => this.password = password }/>
            <Button onClick={() => Login( this.account.value, this.password.value )}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }else{
      return (
        <Redirect to='/'></Redirect>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  loginState: state.getIn(['login', 'login']),
});

const mapDispatchToThis = (dispatch) => {
  return {
    Login(accountRes, passwordRes) {
      dispatch(actionCreator.login(accountRes, passwordRes));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToThis)(Login);