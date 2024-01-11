import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import AppContext from '../../context/AppContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import TrendingItem from '../TrendingItem'
import VideosFailureView from '../VideosFailureView'

import {
  BgContainer,
  TrendingContainer,
  RightContainer,
  TrendingBg,
  FireIcon,
  Heading,
  ListEl,
  LoaderContainer,
} from './styledComponent'

const statusConstant = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class Trending extends Component {
  state = {trendingList: [], responseStatus: statusConstant.initial}

  componentDidMount() {
    this.getTrendingData()
  }

  getFilterObject = fetchedData => {
    const filterData = fetchedData.map(each => ({
      id: each.id,
      publishedAt: each.published_at,
      thumbnailUrl: each.thumbnail_url,
      title: each.title,
      totalView: each.view_count,
      channel: {
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
      },
    }))
    return filterData
  }

  // get trending list data
  getTrendingData = async () => {
    this.setState({responseStatus: statusConstant.inProgress})
    const api = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(api, options)
    if (response.ok) {
      const data = await response.json()
      const trendingList = await this.getFilterObject(data.videos)
      this.setState({trendingList, responseStatus: statusConstant.success})
    } else {
      this.setState({responseStatus: statusConstant.failure})
    }
  }

  // render success view
  getSuccessView = () => (
    <AppContext.Consumer>
      {value => {
        const {lightTheme} = value

        const {trendingList} = this.state
        return (
          <>
            <TrendingBg lightTheme={lightTheme} data-testid="banner">
              <FireIcon theme={lightTheme ? 'true' : 'false'} />
              <Heading lightTheme={lightTheme}>Trending</Heading>
            </TrendingBg>
            <ListEl>
              {trendingList.map(each => (
                <TrendingItem key={each.id} itemDetails={each} />
              ))}
            </ListEl>
          </>
        )
      }}
    </AppContext.Consumer>
  )

  // render Loader view
  getLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color=" #4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  renderTrendingView = () => {
    const {responseStatus} = this.state
    switch (responseStatus) {
      case statusConstant.success:
        return this.getSuccessView()
      case statusConstant.failure:
        return <VideosFailureView onRetry={this.getTrendingData} />
      case statusConstant.inProgress:
        return this.getLoadingView()

      default:
        return null
    }
  }

  render() {
    const {match} = this.props
    const {path} = match
    return (
      <AppContext.Consumer>
        {value => {
          const {lightTheme} = value

          return (
            <BgContainer lightTheme={lightTheme} data-testid="trending">
              <Header activePath={path} />
              <TrendingContainer>
                <Sidebar activePath={path} />
                <RightContainer>{this.renderTrendingView()}</RightContainer>
              </TrendingContainer>
            </BgContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Trending
