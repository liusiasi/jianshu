import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {  
        ListItem, 
        ListInfo,
        ReadMore,
        } from '../style'
import { connect } from 'react-redux';
import { actionCreator } from '../store'

class List extends Component {
  componentWillReciveProps(){
    console.log('1');
  }
  render(){
    return (
      <div>
        {
          this.props.list.map((item, index) => (
            <Link key={index} to={'/detail/'+item.get('id')}>
              <ListItem key={index}>
              <img className='info-image' src={item.get('imgUrl')} alt='' />
                <ListInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            </Link>
          ))
        }
        <ReadMore onClick={() => this.props.handleReadMore()}>阅读更多</ReadMore>
       
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home','articleList']),
})

const mapDispatchTothis = (dispatch) => {
  return {
    handleReadMore(page) {
      dispatch(actionCreator.getArticleMore());
    }
  }
}
export default connect(mapStateToProps,mapDispatchTothis)(List);