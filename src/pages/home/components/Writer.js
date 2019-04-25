import React, { Component } from 'react'
import {
  RecommendWriter,
  RecommendTitle,
  RecommendSwitch,
  WriterInfo,
  Attention

} from '../style.js'
import { connect } from 'react-redux'
class Writer extends Component {
  render(){
    return (
      <div>
        <RecommendWriter>
          <RecommendTitle>
            <span>推荐作者</span>
            <RecommendSwitch>
              <i ref={(icon) => { this.spinIcon = icon }} className='iconfont spin'>&#xe851;</i>
              换一批</RecommendSwitch>
          </RecommendTitle>
          {
            this.props.writerList.map((item)=>(
              <WriterInfo key={item.get('id')}>
              <img alt='' className='recommend-image' src={item.get('imgUrl')}/>
              <Attention>
                <span className="iconfont">&#xe608;</span>
                关注
              </Attention>
                <p className='infoTitle'>{item.get('title')}</p>
                <p className='infomation'>{item.get('info')}</p>
            </WriterInfo>

            ))
          }
        </RecommendWriter>
      </div>
    )
  }
}

const mapStateToProp = (state) => ({
  writerList: state.getIn(['home','writerList']),
})
export default connect(mapStateToProp,null)(Writer);