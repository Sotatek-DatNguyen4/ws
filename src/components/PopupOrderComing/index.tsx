import React from 'react'
import PopupHeader from '../PopupHeader'
import { ArrowRight } from '../ArrowRightIcon'
import { PaymentTag } from '../PaymentTag'
import { Triangle } from '../Triangle'
import styled from 'styled-components'

type PopupOrderComingProps = {
  headerTitle: string
  sideText: string
  type: string
  orderId: string
  detailText: string
  paymentText: string
  paymentMethod: string
  detailUrl: string
  badge: number
  orderType: string
}

type DetailMethodProps = {
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
`
const LinkDetail = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

const LinkText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #0c80e4;
`
const ContentDetail = styled.div``
const ContentSectionWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const ContentMethod = styled.div<DetailMethodProps>`
  color: ${(props) => (props.type === 'express' ? '#FA0050' : '#000')};
  font-style: ${(props) => (props.type === 'express' ? 'italic' : 'normal')};
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
`

const OrderId = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  margin-left: 6px;
`

const MainContentText = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.8);
  margin-right: 4px;
`

const ConfirmSection = styled.div`
  padding-top: 14px;
`

const ButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const ButtonReject = styled.button`
  background: #dee5ea;
  border-radius: 12px;
  width: 28%;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.8);
  padding: 18px 0;
  border: none;
  display: block;
  cursor: pointer;
`

const ButtonAccept = styled.button`
  background: #0c80e4;
  border-radius: 12px;
  width: 70%;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
  padding: 18px 0;
  border: none;
  display: block;
  cursor: pointer;
`

const TimeTextLeft = styled.div`
  width: 28%;
`

const TimeTextRight = styled.div`
  width: 70%;
  text-align: center;
  color: #0c80e4;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  padding-bottom: 4px;
`

const ButtonSettingTime = styled.button`
  background: #0c80e4;
  border-radius: 12px;
  width: 100%;
  font-style: normal;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #0c80e4;
  padding: 18px 0;
  border: 2px solid #0c80e4;
  display: block;
  cursor: pointer;
  background: #fff;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  align-item: center;
`
const TimeNotiWrapper = styled.div`
  position: relative;
  background: #ffcb2e;
  border-radius: 19px;
  padding: 8px 0;
  display: flex;
  justify-content: center;
  align-item: center;
  margin-top: 28px;
  margin-bottom: 34px;
`

const TriangleWrapper = styled.div`
  position: absolute;
  bottom: -10px;
  left: 60%;
`

const DetailWrapper = styled.div`
  border-bottom: solid 1px rgba(0, 0, 0, 0.4);
  padding-bottom: 14px;
`

const ErrorZone = styled.div`
  padding: 8px 100px;
  background: #fef6f4;
  border-radius: 12px;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  marign-bottom: 14px;
  margin-top: 16px;
  color: #f04600;
`

export default function PopupOrderComing(props: PopupOrderComingProps) {
  return (
    <Wrapper>
      <PopupHeader badge={props.badge} title={props.headerTitle} />
      <MainContent>
        <DetailWrapper>
          <DetailSection>
            <ContentDetail>
              <ContentSectionWrapper>
                <ContentMethod type={props.type}>배달</ContentMethod>
                <OrderId>{props.orderId}</OrderId>
              </ContentSectionWrapper>
              <ContentSectionWrapper>
                <MainContentText>{props.detailText}</MainContentText>
                <PaymentTag method="app">요기요결제</PaymentTag>
              </ContentSectionWrapper>
            </ContentDetail>
            <LinkDetail>
              <LinkText>자세히</LinkText>
              <ArrowRight />
            </LinkDetail>
          </DetailSection>
          {props.orderType === 'error' ? (
            <ErrorZone>{`배달 대행 접수가 실패했어요.확인 후 다시 시도해주세요.`}</ErrorZone>
          ) : (
            <></>
          )}
        </DetailWrapper>
        <ConfirmSection>
          {props.orderType === 'direct' ? (
            <ButtonSettingTime>
              배달 완료 시간 변경
              <ArrowRight />
            </ButtonSettingTime>
          ) : (
            <></>
          )}
          {props.orderType === 'direct' ? (
            <ButtonSection>
              <TimeTextLeft />
              <TimeTextRight>30분 후 배달 완료</TimeTextRight>
            </ButtonSection>
          ) : (
            <></>
          )}
          {props.orderType === 'timer' ? (
            <TimeNotiWrapper>
              <MainContentText>라이더 픽업까지 남은 시간 : 10분</MainContentText>
              <TriangleWrapper>
                <Triangle />
              </TriangleWrapper>
            </TimeNotiWrapper>
          ) : (
            <></>
          )}
          <ButtonSection>
            <ButtonReject>거절</ButtonReject>
            <ButtonAccept>바로 접수</ButtonAccept>
          </ButtonSection>
        </ConfirmSection>
      </MainContent>
    </Wrapper>
  )
}
