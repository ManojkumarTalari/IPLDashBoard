// Write your code here
import '../TeamMatches/index.css'

const LatestMatch = props => {
  const {currentLatestMatch} = props
  return (
    <div className="latest-match-container">
      <div className="latest-match-top-section">
        <p className="latest-match-name">{currentLatestMatch.competingTeam}</p>
        <p className="latest-match-date">{currentLatestMatch.date}</p>
        <p className="latest-match-venue">{currentLatestMatch.venue}</p>
        <p className="latest-match-result">{currentLatestMatch.result}</p>
      </div>
      <div className="compitive-team-banner-section">
        <img
          src={currentLatestMatch.competingTeamLogo}
          className="compitive-team-banner-img"
          alt={`latest match ${currentLatestMatch.competingTeam}`}
        />
      </div>
      <div className="latest-match-bottom-section">
        <h1 className="latest-bottom-sec-heading">First Innings</h1>
        <p className="atest-bottom-sec-para">
          {currentLatestMatch.firstInnings}
        </p>
        <h1 className="latest-bottom-sec-heading">Second Innings</h1>
        <p className="atest-bottom-sec-para">
          {currentLatestMatch.secondInnings}
        </p>
        <h1 className="latest-bottom-sec-heading">Man Of The Match</h1>
        <p className="atest-bottom-sec-para">
          {currentLatestMatch.manOfTheMatch}
        </p>
        <h1 className="latest-bottom-sec-heading">Umpires</h1>
        <p className="atest-bottom-sec-para">{currentLatestMatch.umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
