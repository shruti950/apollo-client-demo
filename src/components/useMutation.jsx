import React,{useState} from 'react';
import {
  useMutation,
  gql,
} from "@apollo/client";
const mutation = gql`
mutation admin($email:String!,$password:String!){
  createAdmin(adminInput:{email:$email,password:$password}){
    email
  }
}`
export default function UseMutation() {
  const [mutateFunction, { data, loading, error }] = useMutation(mutation);
  const [email, setemail] = useState(null)
  const [password, setpassword] = useState(null)
  if(loading) return <p>loading..</p>
  if(error) return <p>{error}</p>
  const submitHandler = (event) =>{
  mutateFunction({variables:{email:email,password:password}})
  
  }
  const onChange = (event) =>{
    if(event.target.name === "password"){
      setpassword(event.target.value)
    }
   if(event.target.name === "email"){
     setemail(event.target.value)
   } 
  }
  return (
    <>
    <form>
      <label> Email</label>
      <input type="email" name="email" onChange={onChange} />
      <label>Password</label>
      <input type="password" name="password" onChange={onChange}/>
      <button onClick={event=>submitHandler(event)}>Submit</button>
    </form>
    </>
  );
}
