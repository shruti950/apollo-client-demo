import React from "react";
import { useParams } from "react-router-dom";
import Usecharacter from "../../hook/useCharacter";


export default function Character() {
  const {id} = useParams();
  const { loading, data, error } = Usecharacter(id);
  if (loading)
    return (
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  if (error) return <p>{error}</p>;
  return <div>
    <img src={data.character.image} alt="lr"/>
    <h4>{data.character.name}</h4>
    {data.character.episode.map(episode=><div key={episode.key}>
      <h6>{episode.name}</h6>
      <p>{episode.episode}</p>
    </div>)}
  </div>;
}
