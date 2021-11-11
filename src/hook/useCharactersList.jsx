import { useQuery, gql } from "@apollo/client";
import React from "react";

const Get_Characters = gql`
  query {
    characters {
      results {
        name
        id
        image
      }
    }
  }
`;

const Usecharacterslist = () => {
  const { loading, data, error } = useQuery(Get_Characters);
  return {
    loading,
    data,
    error,
  };
};

export default Usecharacterslist;
