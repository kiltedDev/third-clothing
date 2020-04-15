import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 90px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  position: fixed;
  top:0;
  left:0;
  padding: 10px 40px;
  background-color: white;
  z-index: 1;

  @media screen and (max-width: 800px) {
    padding: 10px 20px;
    margin-bottom: 20px;
  }
`

export const LogoContainer = styled( Link )`
  height: 70px;
  width: 70px;
  position:relative;
  top: 50%;
  transform: translateY(-50%);

  @media screen and (max-width: 800px) {
    width: 50px;
    height: 50px;
  }
`

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`

export const OptionStyles = css`
  padding: 10px 15px;
  text-transform: uppercase;
  cursor: pointer;
  @media screen and ( max-width: 360px) {
    padding: 10px;
  }
`

export const OptionLink = styled(Link)`
  ${OptionStyles}
`
