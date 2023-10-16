"use client"
import Link from "next/link";
import React from "react";


export default function Home() {
  const [users, setUsers] = React.useState([]);

  const handleSubmit = () =>{
    console.log(users)
  }

  return (
    <div>
      <Link href={"/signin"}> Sign in </Link>
      <Link href={"/signup"}> Sign up </Link>
      <button onClick={handleSubmit}>click me</button>
      {/* <div>
        {data.users.map((user: any) => (
          <div key={user.id}>
            <p>
              {user.name} {user.surname}
            </p>
            <ul>
              {user.animals.map((animal: any, index: number) => (
                <li key={index}>
                  {animal.name} - {animal.species}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
    </div>
  );
}
