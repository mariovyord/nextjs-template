import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React, { ReactComponentElement } from "react";

export default function withAuth(Component: any) {
  return async function WithAuth(props: any) {
    const session = await auth();

    if (!session || !session.user) {
      redirect("/");
    }

    return <Component {...props}></Component>;
  };
}
