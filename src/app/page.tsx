import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";
import Main from "./_components/main";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <>
      {" "}
      <Main />
    </>
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest();

  return <div className="h-full w-full max-w-xs"></div>;
}
