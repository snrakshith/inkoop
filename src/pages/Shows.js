import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Episode from "../components/Episode";
import Pagination from "../components/Pagination";
import { faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Searchbar from "../components/Searchbar";
import "./Show.css";

const Shows = () => {
  const [episodes, setEpisodes] = useState();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [episodesPerPage] = useState(2);
  const [searchEpisodeByName, setSearchEpisodeByName] = useState("");
  const [filteredEpisode, setfilteredEpisode] = useState([]);
  const [active, setActive] = useState(false);

  // API Call
  useEffect(() => {
    const fetchEpisodes = async () => {
      setLoading(true);
      const res = await axios.get("https://rickandmortyapi.com/api/episode");
      setEpisodes(res.data.results);
      setLoading(false);
    };
    fetchEpisodes();
  }, []);

  // For Search
  useEffect(() => {
    setfilteredEpisode(
      episodes &&
        episodes.filter((episode) => {
          return episode.name
            .toLowerCase()
            .includes(searchEpisodeByName.toLowerCase());
        })
    );
  }, [searchEpisodeByName, searchEpisodeByName]);
  // console.log(episodes);

  // Get Current Episodes
  const indexOfLastEpisode = currentPage * episodesPerPage;
  const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage;
  const currentEpisodes =
    episodes && episodes.slice(indexOfFirstEpisode, indexOfLastEpisode);

  // Total Episodes
  const totalEpisodesLength = episodes && episodes.length;

  // Paginate Function
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log(filteredEpisode);
  // if (clearSearch) {
  //   const clearSearch = setActive(false);
  //   (e) => setSearchEpisodeByName(e.target.value === "");
  // }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", marginTop: "25px" }}>
        <div>
          <h3 style={{ color: "rgb(122, 32, 212)" }}>
            List of Available Shows :
          </h3>
          {active ? (
            <Episode episodes={filteredEpisode} loading={loading} />
          ) : (
            <Episode episodes={currentEpisodes} loading={loading} />
          )}
        </div>
        {/* Search Bar */}
        <div style={{ marginLeft: "50px", display: "flex" }}>
          <input
            className="form-control"
            type="text"
            placeholder="Search Episode Name"
            aria-label="Search"
            style={{
              width: "240px",
              color: "black",
              border: "1.5px solid black",
            }}
            onChange={(e) => setSearchEpisodeByName(e.target.value)}
          />
          <div style={{ marginLeft: "10px", height: "50px" }}>
            <button className="fa-btn" onClick={() => setActive(true)}>
              <FontAwesomeIcon icon={faSearch} />
            </button>

            <button
              className="fa-btn"
              onClick={() => (setSearchEpisodeByName(" "), setActive(false))}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      </div>
      {/* Pagination */}
      <div
        style={{
          marginBottom: "0px",
          marginLeft: "25%",
        }}
      >
        <Pagination
          style={{
            color: "red",
          }}
          episodesPerPage={episodesPerPage}
          totalEpisodes={totalEpisodesLength}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Shows;
