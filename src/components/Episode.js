import React from "react";

const Episode = ({ episodes, loading, filteredEpisode }) => {
  if (loading) {
    return <h2>Loading..</h2>;
  }
  // console.log(typeof episodes);
  return (
    <div
      style={{
        marginTop: "25px",

        width: "100%",
      }}
    >
      {episodes &&
        episodes.map((episode) => (
          <div
            className="card"
            style={{
              width: "400px",
              marginBottom: "25px",
              borderColor: "grey",
              backgroundColor: "white",
              // color: "rgb(24, 100, 177)",
            }}
          >
            <div className="card-body" style={{ marginLeft: "25px" }}>
              <h5 className="card-title">Episode ID : {episode.id}</h5>
              <h6 className="card-subtitle mb-3 ">Name: {episode.name}</h6>
              <h6 className="card-subtitle mb-3 ">Date: {episode.air_date}</h6>
              <h6 className="card-subtitle mb-3 ">Code: {episode.episode}</h6>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Episode;
