import React from "react";
import { UseVotingPage } from "../../Hooks/UseVotingPage";
function VotingPage() {
  const { handleVoting, candidatesData, voted, handleChangeVote } =
    UseVotingPage();
  console.log(voted);
  return (
    <div className="VotingList">
      {candidatesData ? (
        candidatesData.map((candidate) => {
          return (
            <div key={candidate.name} className="candidate">
              <img src={candidate.url} alt={candidate.name} />
              <h1>{candidate.name}</h1>
              <p>{candidate.vote}</p>

              {voted == "" ? (
                <button
                  className="Vote"
                  onClick={() => handleVoting(candidate.name)}
                >
                  Vote
                </button>
              ) : (
                // <div></div>
                <div>
                  {voted == candidate.name ? (
                    <button className="Change-Vote" onClick={handleChangeVote}>
                      Change Vote
                    </button>
                  ) : null}
                </div>
              )}
            </div>
          );
        })
      ) : (
        <p>Loading candidates</p>
      )}
    </div>
  );
}

export default VotingPage;
