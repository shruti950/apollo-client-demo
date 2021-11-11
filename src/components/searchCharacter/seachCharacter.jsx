import { useLazyQuery, gql } from "@apollo/client";
import React, { useState } from "react";

const Get_SearchedCharacter = gql`
  query searchCharacter($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;
const Seachcharacter = () => {
  const [name, setname] = useState(null);
  const [getSearchedCharacter, { loading, data, error }] = useLazyQuery(
    Get_SearchedCharacter,
    {
      variables: {
        name: name,
      },
    }
  );
  if (loading)
    return (
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  if (error) return <p>error{error}</p>;
  return (
    <>
      <div>
        <input type="search" onChange={(e) => setname(e.target.value)} />
        <button onClick={getSearchedCharacter}>search</button>
      </div>
      <div>
        {data &&
          data.characters.results.map((results) => {
            return <div key={results.location.id}>{results.location.name}</div>;
          })}
      </div>
    </>
  );
};

export default Seachcharacter;
