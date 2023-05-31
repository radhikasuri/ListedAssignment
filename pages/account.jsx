import React from 'react'
import { getSession, useSession, signOut } from 'next-auth/react';
import { redirect } from 'next/dist/server/api-utils';

const account = () => {
    const {data: session, status} = useSession();
    if (status === "authenticated"){
        return (
            <div>
                <p>Welcome {session.user.name}</p>
                <button onClick={() =>signOut()}>signout</button>

            </div>
        ) 
    }
    else{
        return (
          <div>
              <p>You are not signed in</p>
          </div>
        )
    }
}

export default account

export const getServerSideProps = async (context) => {

    const session = await getSession(context);

    if(!session){
        return {
            redirect: {
                destination: "/login",

            }
        }
    }

    return {
        props: {session},
    }
}