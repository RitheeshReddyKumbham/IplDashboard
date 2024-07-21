import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamBanner: '',
    recentMatchesList: [],
    matchDetails: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getLatestMatches()
  }

  getLatestMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formattedData = {
      teamBanner: data.team_banner_url,
      latestMatch: {
        id: data.latest_match_details.id,
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfMatch: data.latest_match_details.man_of_the_match,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamUrl: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(item => ({
        id: item.id,
        umpires: item.umpires,
        result: item.result,
        manOfMatch: item.man_of_the_match,
        date: item.date,
        venue: item.venue,
        competingTeam: item.competing_team,
        competingTeamUrl: item.competing_team_logo,
        firstInnings: item.first_innings,
        secondInnings: item.second_innings,
        matchStatus: item.match_status,
      })),
    }
    this.setState({
      teamBanner: formattedData.teamBanner,
      matchDetails: formattedData.latestMatch,
      recentMatchesList: formattedData.recentMatches,
      isLoading: false,
    })
  }

  renderTeamDetails = () => {
    const {teamBanner, matchDetails, recentMatchesList} = this.state
    return (
      <div className="team-matches">
        <img className="team-banner" src={teamBanner} alt="team banner" />
        <div className="latest-match">
          <LatestMatch latestDetails={matchDetails} />
        </div>
        <ul className="recent-matches">
          {recentMatchesList.map(eachItem => (
            <MatchCard key={eachItem.id} recentDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="cont">
        {isLoading ? (
          <div className="container" data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamDetails()
        )}
      </div>
    )
  }
}

export default TeamMatches
