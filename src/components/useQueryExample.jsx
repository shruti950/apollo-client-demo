import React from 'react';
import {
  useQuery,
  gql
} from "@apollo/client";

export default function Simple({onUserSelected}) {
  const { loading, error, data } = useQuery(gql`
 {
    events {
      name
      _id
      age
    }
  }
  `);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(${error.message}</p>;
    return (
      <select name="user" onChange={onUserSelected}>
      {data.events.map(event => (
        <option key={event._id} value={event.name}>
        {event.name}
      </option>
      ))};
      </select>
    )
}

