import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, imageUrl} = teamDetails

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="main">
        <img className="img" src={imageUrl} alt={name} />
        <p className="Tname">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
