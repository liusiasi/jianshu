import styled from 'styled-components'

export const LoginWrapper = styled.div`
  z-index: 0;
  position: absolute;
  top: 56px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: #f1f1f1;
`

export const LoginBox = styled.div`
  width: 400px;
  height: 160px;
  margin: 100px auto;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  padding-top: 20px;
`
export const Input = styled.input`
  height: 30px;
  line-height: 30px;
  text-align: center;
  display: block;
  width: 200px;
  margin: 10px auto;
  border: 1px solid #c8c8c8;
  border-radius: 4px 4px 0 0;
  padding: 0 10px;
`

export const Button = styled.button`
  height: 30px;
  line-height: 30px;
  text-align: center;
  display: block;
  width: 200px;
  margin: 10px auto;
  border: none;
  border-radius: 25px;
  padding: 0px 18px;
  background: #3194d0;
  outline: none;
  color: #fff;
`