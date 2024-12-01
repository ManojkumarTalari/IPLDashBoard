// Write your code here
import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    currentTeamBanner: '',
    currentLatestMatch: {},
    currentRecentTeams: [],
    isLoading: true,
    bgColor: '',
  }

  componentDidMount() {
    this.getteamDetails()
  }

  getteamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const {latestMatchDetails, recentMatches} = formatedData
    const formatedLatestMatchDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }
    const formatedrecentMatches = recentMatches.map(eachItem => ({
      umpires: eachItem.umpires,
      result: eachItem.result,
      manOfTheMatch: eachItem.man_of_the_match,
      id: eachItem.id,
      date: eachItem.date,
      venue: eachItem.venue,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnings: eachItem.first_innings,
      secondInnings: eachItem.second_innings,
      matchStatus: eachItem.match_status,
    }))
    this.setState({
      currentTeamBanner: formatedData.teamBannerUrl,
      currentLatestMatch: formatedLatestMatchDetails,
      currentRecentTeams: formatedrecentMatches,
      isLoading: false,
      bgColor: id,
    })
  }

  renderteamMatchesContainer = () => {
    const {currentTeamBanner, currentLatestMatch, currentRecentTeams, bgColor} =
      this.state
    return (
      <div className={`teamMatches-container ${bgColor}`}>
        <img
          src={currentTeamBanner}
          className="currentTeamBanner-img"
          alt="team banner"
        />
        <h1 className="latest-match-heading">latest Matches</h1>
        <LatestMatch currentLatestMatch={currentLatestMatch} />
        <ul className="match-card-section">
          {currentRecentTeams.map(eachItem => (
            <MatchCard matchCardObj={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return isLoading ? (
      <div className="loader-container" data-testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      this.renderteamMatchesContainer()
    )
  }
}
export default TeamMatches
