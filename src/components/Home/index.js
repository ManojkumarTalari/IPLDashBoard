// Write your code here
import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamList: [], isLoading: true}

  componentDidMount() {
    this.getTeamCardList()
  }

  getTeamCardList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data

    const formattedData = teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({teamList: formattedData, isLoading: false})
  }

  renderteamList = () => {
    const {teamList} = this.state

    return (
      <ul className="team-card-list-container">
        {teamList.map(eachItem => (
          <TeamCard details={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="home-container">
        <div className="logo-container">
          <img
            className="ipl-logo-img"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt=" ipl logo"
          />
          <h1 className="ipl-logo-heading">IPL Dashboard</h1>
        </div>

        {isLoading ? (
          <div className="loader-container" data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderteamList()
        )}
      </div>
    )
  }
}
export default Home
