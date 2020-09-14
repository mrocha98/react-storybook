import styled from 'styled-components'

export const Container = styled.div`
  grid-area: SL;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--tertiary);
  padding: 11px 0;

  max-height: 100vh;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const Separator = styled.hr`
  width: 32px;
  border-bottom: 2px solid var(--quinary);

  margin-bottom: 8px;
`
