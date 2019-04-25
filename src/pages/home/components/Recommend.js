import React, { Component } from 'react'
import {
  RecommendItem
} from '../style'
import { connect } from 'react-redux'
class Recommend extends Component {
  render(){
    return (
      <div>
        {
          this.props.list.map((item) => (
            <RecommendItem key={item.get('id')}>
              <img className='recommend-image' src={item.get('imgUrl')} alt=''/>
            </RecommendItem>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home','recommendList']),
})
export default connect(mapStateToProps,null)(Recommend);