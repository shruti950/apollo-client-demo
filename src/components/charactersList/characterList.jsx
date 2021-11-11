import React from "react";
import { Link } from "react-router-dom";
import Usecharacterslist from "../../hook/useCharactersList";
import "./characterList.css";
const Characterlist = () => {
  const { loading, data, error } = Usecharacterslist();
  if (loading)
    return (
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  if (error) return <p>error{error}</p>;
  return (
    <div className="image-data">
      {data.characters.results.map((characters) => (
        <div key={characters.id}>
          <Link to = {{pathname : `/${characters.id}`}} >
          <img src={characters.image} alt="ima" />
          <h5>{characters.name}</h5>{" "}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Characterlist;
