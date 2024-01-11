import {
  LoaderContainer,
  ImageEl,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from './styledComponent'

import AppContext from '../../context/AppContext'

const VideosFailureView = props => {
  const {onRetry} = props

  const onRetryFetchedData = () => {
    onRetry()
  }

  return (
    <AppContext.Consumer>
      {value => {
        const {lightTheme} = value
        const failureImage = lightTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

        return (
          <LoaderContainer>
            <ImageEl src={failureImage} alt="failure view" />
            <FailureHeading lightTheme={lightTheme}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription>
              We are having some trouble to complete your request. Please try
              again.
            </FailureDescription>
            <RetryButton type="button" onClick={onRetryFetchedData}>
              Retry
            </RetryButton>
          </LoaderContainer>
        )
      }}
    </AppContext.Consumer>
  )
}

export default VideosFailureView
