import styled from 'styled-components'
import logo from '../../statics/Logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  z-index: 1;
`

export const Logo = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  display: block;
  height: 58px;
  width: 100px;
  background: url(${logo});
  background-size: contain;
`

export const Nav = styled.div`
  width: 1100px;
  height: 100%;
  padding: 0 50px;
  box-sizing: border-box;
  margin: 0 auto;
`

export const NavItem = styled.div`
  padding: 0 15px;
  line-height: 56px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    color: #969696;
    float: right;
  }
  &.active {
    color: #ea6f5a;
  }
  cursor: pointer;
`

export const NavSearch = styled.input.attrs({
  placeholder:'搜索'
})`
  width: 160px;
  height: 38px;
  margin-top: 9px;
  padding: 0 35px 0 20px;
  box-sizing: border-box;
  border: none;
  border-radius: 19px;
  outline: none;
  background: #eee;
  font-size: 14px;
  margin-left: 20px;
  &::placeholder {
    color: #999;
  }
  color: #666;
  &.focus {
    width: 240px;
  }
  &.slide-enter {
    transition: all .2s ease-out; 
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-out; 
  }
  &.slide-exit-active {
    width: 160px;
  }
`

export const Addition = styled.div`
  top: 0;
  right: 0;
  position: absolute;
  height: 56px;
`
export const Button = styled.div`
  float: right;
  line-height: 38px;
  margin-top: 9px;
  border: 1px solid #ea6f5a;
  border-radius: 20px;
  margin-right: 20px;
  padding: 0 20px;
  font-size: 15px;
  &.reg {
    color: #ea6f5a;
  }
  &.writting {
    background: #ea6f5a;
    color: #fff;
  }
  cursor: pointer;
`

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 4px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focus {
      background:#777;
      color: #fff;
    }
  }
`
export const SearchInfo = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  width: 240px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  padding: 0 20px;
`

export const SearchTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`
export const SearchInfoSwitch = styled.span`
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

export const SearchInfoList = styled.div`
  overflow: hidden;
`
export const SearchInfoItem = styled.a`
  padding: 2px 6px;
  line-height: 20px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
  font-size: 12px;
  margin-right: 10px;
  margin-bottom: 10px;
  display: block;
  float: left;
`