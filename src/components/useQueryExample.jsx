import React from 'react';
import {
  useQuery,
  gql,
  NetworkStatus
} from "@apollo/client";

const query = gql`
query login($email:String!,$password:String!){
 login(email:$email,password:$password){
   userId
   token
 }
 }
 `
export default function Simple({email,password}) {
  const { loading, error, data ,refetch,networkStatus} = useQuery(query,{variables: { email:"test4@test.com",password:"123456" },notifyOnNetworkStatusChange: true});
  if (networkStatus === NetworkStatus.refetch) return 'Refetching!';
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(${error.message}</p>;
    return (
      <>
      <h5>userId {data.login.userId}</h5>
      <button onClick={() => refetch({
          email:"test43@test.com" ,password:"123456" // Always refetches a dalmatian instead of original breed
        })}>Refetch!</button>
      </>
    )
}

