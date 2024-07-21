import './index.css'

const LatestMatch = props => {
  const {latestDetails} = props
  const {
    id,
    umpires,
    manOfMatch,
    date,
    venue,
    result,
    competingTeam,
    competingTeamUrl,
    firstInnings,
    secondInnings,
    matchStatus,
  } = latestDetails

  return (
    <div className="latest-match">
      <p className="title">Latest Match</p>
      <div className="details">
        <div className="common-details">
          <p className="team">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="venue">{result}</p>
        </div>
        <img
          className="logo"
          src={competingTeamUrl}
          alt={`latest match ${competingTeam}`}
        />
        <div className="innings-details">
          <p className="header">First Innings</p>
          <p className="answer">{firstInnings}</p>
          <p className="header">Second Innings</p>
          <p className="answer">{secondInnings}</p>
          <p className="header">Man of the Match</p>
          <p className="answer">{manOfMatch}</p>
          <p className="header">Umpires</p>
          <p className="answer">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
