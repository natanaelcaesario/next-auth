import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
export default function Home() {
  const [session, loading] = useSession();
  console.log(session);
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Authentication</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {!session && (
          <>
            Not signed in
            <br />
            <button onClick={signIn}>Sign IN</button>
          </>
        )}
        {session && (
          <>
            Signed in as
            {!session.user.email ? session.user.name : session.user.email}
            <br />
            <div>You have access now</div>
            <button>
              <Link href="/secret">To the secret page</Link>
            </button>
            <button onClick={signOut}>Sign Out</button>
          </>
        )}
      </main>
    </div>
  );
}
