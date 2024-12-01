// Write your code here
import '../Home/index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {details} = props

  const {name, id, teamImageUrl} = details
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="teamCard-container">
        <img className="teamCard-img" src={teamImageUrl} alt={name} />
        <p className="teamCard-heading">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
