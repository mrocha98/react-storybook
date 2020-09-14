import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 71px 240px auto 240px;
  grid-template-rows: 46px auto 52px;
  /*
    SL - SERVER LIST
    SN - SERVER NAME
    CI - CHANNEL INFO
    CL - CHANNEL LIST
    CD - CHANNEL DATA
    UI - USER INFO
  */
  grid-template-areas:
    'SL SN CI CI'
    'SL CL CD UL'
    'SL UI CD UL';

  height: 100%;
`
