import Link from "next/link";

import { api } from "~/trpc/server";
import Main from "./_components/main";

export default async function Home() {
  return (
    <>
      {" "}
      <Main />
    </>
  );
}
