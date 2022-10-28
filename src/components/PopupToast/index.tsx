import React from 'react'
import PopupHeader from '../PopupHeader'
import styled from 'styled-components'

type PopupOrderProps = {
  headerTitle: string
  mainText?: string
  sideText: string
  type: string
}

type CommentSectionProps = {
  mainText?: string
  type: string
}

const Wrapper = styled.div`
  background: #ffffff;
  border: 2px solid rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  max-width: 440px;
  margin: 10px 0;
`

const MainContent = styled.div`
  padding: 16px 20px;
  border-top: solid 1px rgba(0, 0, 0, 0.4);
`

const DetailSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 14px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.4);
`

const CommentSection = styled.div<CommentSectionProps>`
  padding-top: 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  padding-bottom: ${(props) => (props.mainText ? '0px' : '14px')};
  color: ${(props) => (props.type === 'express' ? '#F04600' : '#000')};
`

const MainContentText = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.8);
  margin-right: 4px;
`

export default function PopupToast(props: PopupOrderProps) {
  return (
    <Wrapper>
      <PopupHeader title={props.headerTitle} />
      <MainContent>
        {props.mainText ? (
          <DetailSection>
            <MainContentText>{props.mainText}</MainContentText>
          </DetailSection>
        ) : (
          <></>
        )}
        <CommentSection type="express" mainText={props.mainText}>
          {props.sideText}
        </CommentSection>
      </MainContent>
    </Wrapper>
  )
}
