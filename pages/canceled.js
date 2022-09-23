import React, { useEffect } from 'react';
import { useRouter } from "next/router";


export default function cancelled() {
  const router = useRouter();

  
  return (
    <div>cancelled</div>
  )
}

export async function getServerSideProps({ req, res }) {
 
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }

          
} 