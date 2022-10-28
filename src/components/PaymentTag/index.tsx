import styled from 'styled-components'

type PaymentProps = {
  method: string
}

export const PaymentTag = styled.span<PaymentProps>`
  padding: 2px 4px;
  background-color: ${(props) => (props.method === 'app' ? '#E6F4F2' : '#FEF6F4')};
  border-radius: 4px;
  color: ${(props) => (props.method === 'app' ? '#05947F' : '#F04600')};
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
`
