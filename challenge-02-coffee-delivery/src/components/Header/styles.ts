import styled from 'styled-components'

export const Container = styled.header`
  max-width: 1160px;
  padding: 32px 20px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LeftSide = styled.div`
  display: flex;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    gap: 4px;

    background-color: ${({ theme }) => theme.colors.purpleLight};

    svg {
      color: ${({ theme }) => theme.colors.purple};
    }

    span {
      font-size: 1rem;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      line-height: 130%;
      color: ${({ theme }) => theme.colors.purpleDark};
    }

    padding: 10px 8px;
    border-radius: 6px;
  }

  a {
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.yellowLight};
    color: ${({ theme }) => theme.colors.yellowDark};

    padding: 8px;
    border-radius: 6px;

    position: relative;

    &.[aria-disabled='true'] {
      pointer-events: none;
    }

    span {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.yellowDark};
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 0px;
      right: 0px;
      transform: translate(50%, -50%);
    }
  }
`
