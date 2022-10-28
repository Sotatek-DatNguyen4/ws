import React from 'react'
import { BottomTabButton } from './components/BottomTabButton'
import { PaymentTag } from './components/PaymentTag'
import WorkingStatus from './components/WorkingStatus'
import PopupOrder from './components/PopupOrder'
import PopupToast from './components/PopupToast'
import PopupOrderComing from './components/PopupOrderComing'
import styled from 'styled-components'
import './App.css'

const Wrapper = styled.section`
  padding: 4em;
  // background: papayawhip;
`

function App() {
  return (
    <Wrapper>
      <BottomTabButton active={false}>배달 정보</BottomTabButton>
      <BottomTabButton active={true}>배달 정보</BottomTabButton>
      <PaymentTag method="app">요기요결제</PaymentTag>
      <PaymentTag method="card">후불카드</PaymentTag>
      <PaymentTag method="cash">후불현금</PaymentTag>
      <WorkingStatus status={false} mainText="영업중" />
      <WorkingStatus status={true} mainText="영업 일시 중지 중" sideText="16:00 ~16:30" />
      <WorkingStatus status={true} mainText="영업 시간 아님" />
      <WorkingStatus status={true} mainText="전체 가게 영업중" sideText="(휴게시간 14:00 ~16:00)" />
      <PopupOrderComing
        badge={5}
        headerTitle="주문 접수 완료"
        sideText="영업을 다시 시작합니다."
        type="express"
        orderId="#1253"
        detailText="서초동 | 서초동 | 9,000원"
        paymentText="요기요결제"
        paymentMethod="app"
        detailUrl="#"
        orderType="direct"
      />
      <PopupOrderComing
        badge={5}
        headerTitle="주문 접수 완료"
        sideText="영업을 다시 시작합니다."
        type="express"
        orderId="#1253"
        detailText="서초동 | 서초동 | 9,000원"
        paymentText="요기요결제"
        paymentMethod="app"
        detailUrl="#"
        orderType="timer"
      />
      <PopupOrderComing
        badge={5}
        headerTitle="주문 접수 완료"
        sideText="영업을 다시 시작합니다."
        type="express"
        orderId="#1253"
        detailText="서초동 | 서초동 | 9,000원"
        paymentText="요기요결제"
        paymentMethod="app"
        detailUrl="#"
        orderType=""
      />
      <PopupOrderComing
        badge={5}
        headerTitle="주문 접수 완료"
        sideText="영업을 다시 시작합니다."
        type="express"
        orderId="#1253"
        detailText="서초동 | 서초동 | 9,000원"
        paymentText="요기요결제"
        paymentMethod="app"
        detailUrl="#"
        orderType="error"
      />
      <PopupOrder
        headerTitle="주문 접수 완료"
        sideText="영업을 다시 시작합니다."
        type=""
        orderId="#1253"
        detailText="서초동 | 서초동 | 9,000원"
        paymentText="요기요결제"
        paymentMethod="app"
        detailUrl="#"
      />
      <PopupToast
        headerTitle="영업 다시 시작"
        mainText="[요교 버거버거 서초점]"
        sideText="영업을 다시 시작합니다."
        type="express"
      />
    </Wrapper>
  )
}

export default App
