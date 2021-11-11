import { useQuery, gql } from "@apollo/client";
import React from "react";
const Get_Character = gql`
  query character($id: ID!) {
    character(id: $id) {
      name
      image
      episode {
        name
        episode
      }
    }
  }
`;

const Usecharacter = (id) => {
  const { loading, data, error } = useQuery(Get_Character, {
    variables: { id: id },
  });
  return {
    loading,
    data,
    error,
  };
};

export default Usecharacter;
