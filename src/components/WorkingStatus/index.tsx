import React from 'react'
import styled from 'styled-components'

type WorkingProps = {
  status: boolean
  mainText: string
  sideText?: string
}

type WrapperProps = {
  status: boolean
}

type TextProps = {
}

const Wrapper = styled.div<WrapperProps>`
  padding: 11px 14px;
  background-color: ${(props) => (props.status ? '#FEF6F4' : '#E6F4F2')};
  border-radius: 26px;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  width: fit-content;
  display: flex;
  flex-direction: flex-start;
  align-items: center;
  margin: 10px 0;
`

const StatusDot = styled.div<WrapperProps>`
  width: 16px;
  height: 16px;
  background: #ffffff;
  border: 4px solid ${(props) => (props.status ? '#F04600' : '#05947F')};
  border-radius: 16px;
  margin-right: 4px;
  box-sizing: border-box;
`

const MainText = styled.div<TextProps>`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
`
const SideText = styled.div<TextProps>`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  margin-left: 6px;
`

export default function WorkingStatus(props: WorkingProps) {
  return (
    <Wrapper status={props.status}>
      <StatusDot status={props.status} />
      <MainText>{props.mainText}</MainText>
      <SideText>{props?.sideText}</SideText>
    </Wrapper>
  )
}
