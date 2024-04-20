"use client";
import React, { useState } from "react";
import { string } from "zod";
import { Button } from "~/components/ui/button";
import { userRouter } from "~/server/api/routers/post";
import { api } from "~/trpc/react";
// Import your generated tRPC hook for the mutation

function Page() {
  const [apiKey, setApiKey] = useState<string>("");
  const [name, setName] = useState<string>("");
  const mutation = api.addUser.addUser.useMutation();
  const submitForm = async ({
    apiKey,
    name,
  }: {
    apiKey: string;
    name: string;
  }) => {
   mutation.mutate({name, apiKey});

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    await submitForm({ apiKey, name });
  };
};

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="mb-7 mt-5 text-center text-3xl font-bold">Setup Page</h1>
      <p className="mb-6 max-w-md text-center">
        pwease enter your api key and name pls :3
      </p>
      <form className="flex flex-col gap-4">
        {/* onSubmit={handleSubmit} */}
        <input
          type="text"
          id="api-key"
          name="api-key"
          placeholder="API_KEY"
          className="w-[300px] rounded-lg border border-slate-200 bg-transparent px-5 py-3 outline-none"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
        />
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          className="w-[300px] rounded-lg border border-slate-200 bg-transparent px-5 py-3 outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          type="submit"
          className="shadow-[0px_2px_0px_0px_#FFFFFF40_inset] transition duration-200 hover:bg-blue-700"
        >
          Submit Now
        </Button>
      </form>
    </div>
  );
}

export default Page;
