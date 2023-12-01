"use client";

import { signIn } from "@/actions/sign-in";
import { signOut } from "@/actions/sign-out";
import { useSession } from "next-auth/react";

export default function AuthHeader() {
  const session = useSession();

  return (
    <>
      {session.data?.user ? (
        <>
          <form action={signOut}>
            <button className="underline text-red-700">Sign Out</button>
          </form>
          <div>Hello, {session.data?.user.name?.split(" ")[0]}</div>
        </>
      ) : (
        <form action={signIn}>
          <button className="underline text-green-700">Sign In</button>
        </form>
      )}
    </>
  );
}
