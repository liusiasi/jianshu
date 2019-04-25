import React, { Component } from 'react'
import {
  TopicWrapper,
  TopicItem
} from '../style'
import { connect } from 'react-redux'
class Topic extends Component {

  render(){
    return (
      <TopicWrapper>
        {
          this.props.list.map((item) => (
            <TopicItem key={item.get('id')}>
              <img alt='' className='topic-image' src={item.get('imgSrc')} />
                {item.get('title')}
            </TopicItem>
          ))
        }
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.get('home').get('list'),
})


export default connect(mapStateToProps)(Topic);