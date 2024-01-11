import styled from 'styled-components'

// -------------- Failure view ----------------------------------------------->

// Loader Container div
export const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

// image element for no Search view
export const ImageEl = styled.img`
  width: 300px;
`

// no search heading
export const FailureHeading = styled.h1`
  color: ${props => (props.lightTheme ? '#1e293b' : '#ffffff')};
  font-size: 22px;
  font-weight: 550;
  margin-bottom: 0px;
  text-align: center;
`

// paragraph element for no search result
export const FailureDescription = styled.p`
  color: #606060;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`

// retry Button
export const RetryButton = styled.button`
  border: none;
  background-color: #4f46e5;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 450;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 16px;
`
