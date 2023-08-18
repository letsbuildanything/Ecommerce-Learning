"user client";
import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from "../components/Navbar";

const login = ({ childComponent }) => {
  const { data: session } = useSession();
  // const {data} = useSession();
  // console.log({data})
  if (!session) {
    return (
      <>
        not sign in <br />
        <button onClick={() => signIn("google")}> sign in with google </button>
      </>
    );
  }

  return (
    <>
      <div className='flex'>
        <Navbar />
        <div className='mt-2 ml-2 w-full'>{childComponent}</div>
      </div>
    </>
  );
};

export default login;
