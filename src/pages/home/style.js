import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`

export const HomeLeft= styled.div`
  margin-left: 15px;
  padding-top: 30px;
  padding-right: 0;
  width: 640px;
  float: left;
  .image {
    width: 635px;
    height: 270px;
  }
`
export const HomeRight = styled.div`
  padding-top: 26px;
  float: right;
  width: 240px;
`

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0px 10px 0px;
  margin-left: -18px;
  border-bottom: 1px solid #f0f0f0;
`
export const TopicItem = styled.div`
  .topic-image {
    width: 32px;
    heigth: 32px;
    display: block;
    float: left;   
    margin-right: 10px;
  }
  float: left;
  line-height: 32px;
  height: 32px;
  font-size: 12px;
  margin-left: 18px;
  margin-top: 18px;
  background: #f7f7f7;
  color: #000;
  border:1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 10px;
`

export const ListItem = styled.div`
  border-bottom: 1px solid #f0f0f0;
  padding: 15px 2px 20px 0;
  overflow: hidden;
  margin: 0 0 15px;
  .info-image {
    display: block;
    float: right;
    width: 125px;
    height: 100px;
  }
`
export const ListInfo = styled.div`
  width: 500px;
  float:left;
  .title {
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
    line-height: 27px;
    font-weight: bold;
  };
  .desc {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`

export const RecommendItem = styled.div`
  padding: 0 0 ;
  .recommend-image {
    width: 280px;
    height: 50px;
    padding: 0;
    margin-bottom: 6px;
  }
`

export const RecommendWriter = styled.div`
  overflow:hidden;
  margin-top: 20px;


`
export const RecommendTitle = styled.div`
  font-size: 14px;
  color: #969696;
`
export const RecommendSwitch = styled.div`
  cursor: pointer;
  float:right;
  font-size: 13px;
  color: #969696;
  .spin {
    margin-right: 2px;
    font-size: 12px;
    display: block;
    float: left;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`

export const WriterInfo = styled.div`
  margin-top: 10px;
  .recommend-image {
    border: 1px solid #ddd;
    border-radius: 50%;
    width:48px;
    height:48px;
    margin-right: 10px;
    cursor: pointer;
    float:left;
  }
  .infomation {
    font-size: 12px;
    color: #969696;
    margin: 2px 0 10px;
    line-height: 20px;
  }
  .infoTitle {
    padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
    display: block;
    color: #333;
    line-height: 20px;
  }

`

export const Attention = styled.div`
  float:right;
  font-size: 13px;
  color: #42c02e;
  margin-top: 5px;
`
export const ReadMore = styled.a`
  display:block;
  width: 100%;
  border-radius: 20px;
  background-color: #a5a5a5;
  height: 40px;
  margin: 30px auto 60px;
  text-align: center;
  font-size: 15px;
  color: #fff;
  line-height:40px;
  cursor: pointer;
`

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  height: 60px;
  width: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 12px;
`