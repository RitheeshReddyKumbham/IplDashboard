import './index.css'

const MatchCard = props => {
  const {recentDetails} = props
  const {
    id,
    competingTeam,
    competingTeamUrl,
    result,
    matchStatus,
  } = recentDetails

  return (
    <li className="match-card" key={id}>
      <img
        className="match-card-img"
        src={competingTeamUrl}
        alt={`competing team ${competingTeam}`}
      />
      <p className="team">{competingTeam}</p>
      <p className="result">{result}</p>
      {matchStatus === 'Won' ? (
        <p className="won">{matchStatus}</p>
      ) : (
        <p className="lose">{matchStatus}</p>
      )}
    </li>
  )
}

export default MatchCard
