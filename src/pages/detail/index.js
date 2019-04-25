import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreator } from './store'
import { withRouter } from 'react-router-dom'
import {
  DetailWrapper,
  Header,
  Content
} from './style.js'

class Detail extends Component {
  render(){
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content  dangerouslySetInnerHTML = {{ __html: this.props.content}} />
      </DetailWrapper>
    )
  }
  componentDidMount(){
    this.props.getDetail(this.props.match.params.id);
  }
}

const mapStateToProps = (state) => ({
  title: state.getIn(['detail','title']),
  content: state.getIn(['detail','content']),
})

const mapDispatchToThis = (dispatch) => {
  return {
    getDetail(id) {
      dispatch(actionCreator.getDetail(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToThis)(withRouter(Detail));