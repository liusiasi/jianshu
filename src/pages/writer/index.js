import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
class Writer extends PureComponent {
  render(){
    const { loginState } = this.props;
    if(loginState){
      return (
        <div>writer~</div>
      )
    }else{
      return(
        <Redirect to='/login'/>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  loginState: state.getIn(['login', 'login']),
})


export default connect(mapStateToProps,null)(Writer);