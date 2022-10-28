import React from 'react'
import styled from 'styled-components'
import { PopupIcon } from '../PopupIcon'
import { CancelIcon } from '../CancelIcon'

type PopupHeaderProps = {
  title: string,
  badge?: number
}

const Wrapper = styled.div`
  padding: 8px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
`

const InfoSection = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const TitleText = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #000;
  margin-left: 12px;
  margin-right: 4px;
`
const Badge = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 14px;
  background-color: #fa0050;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function PopupHeader(props: PopupHeaderProps) {
  return (
    <Wrapper>
      <InfoSection>
        <PopupIcon />
        <TitleText>{props.title}</TitleText>
        {props?.badge ? <Badge>{props?.badge}</Badge> : <></>}
      </InfoSection>
      <CancelIcon />
    </Wrapper>
  )
}
