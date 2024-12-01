// Write your code here
import './index.css'
import '../TeamMatches/index.css'

const MatchCard = props => {
  const {matchCardObj} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = matchCardObj
  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        className="match-card-img"
        alt={`competing team ${competingTeam}`}
      />
      <p className="match-card-name">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className={`loss-won ${matchStatus}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
