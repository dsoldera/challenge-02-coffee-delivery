import styled from 'styled-components'

export const CoffeeList = styled.section`
  max-width: 1160px;
  padding: 32px 20px 150px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 54px;

  > h2 {
    font-size: 2rem;
    line-height: 130%;
    font-weight: 800;
    font-family: 'Baloo 2', sans-serif;
    color: ${({ theme }) => theme.colors.baseSubtitle};
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 32px;
  }
`

export const BannerArea = styled.section`
  position: relative;

  img#hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 544px;
    width: 100vw;
    object-fit: cover;
  }
`
export const Banner = styled.div`
  max-width: 1160px;
  padding: 92px 20px;
  margin: 0 auto;

  display: flex;
  gap: 56px;
  align-items: flex-start;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 66px;
  }

  h1 {
    color: ${({ theme }) => theme.colors.baseTitle};
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    line-height: 130%;
    font-weight: bold;
  }

  h3 {
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.colors.baseSubtitle};
  }
`
export const BannerTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
