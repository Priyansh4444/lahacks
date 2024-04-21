import Link from "next/link";

import { api } from "~/trpc/server";
import Main from "./_components/main";
import Cursor from "./_components/Cursor";

export default async function Home() {
  return (
    <>
      {" "}
      <Cursor />
      <Main />
    </>
  );
}
