import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
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
