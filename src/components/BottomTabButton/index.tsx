import styled from "styled-components"

type ButtonProps = {
  active: boolean
}

export const BottomTabButton = styled.button<ButtonProps>`
  padding: 14px 35px;
  background-color: ${(props) => (props.active ? '#fff' : '#000')};
  border-radius: 26px;
  color: ${(props) => (props.active ? '#000' : '#fff')};
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  border: 1px solid #000;
  cursor: pointer;
`
