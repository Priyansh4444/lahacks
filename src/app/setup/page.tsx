"use client";
import React, { useState } from "react";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";

// Assuming "~/trpc/react" is the correct path for your tRPC hooks
// And assuming there's an "addUser" mutation in your tRPC setup

function Page() {
  const [apiKey, setApiKey] = useState(""); // No need to explicitly type here; TypeScript infers it's a string.
  const [name, setName] = useState("");
  const [error, setError] = useState(""); // State to handle any error messages
  const addUserMutation = api.addUser.addUser.useMutation(); // Adjusted based on your API structure. Ensure correct path.

  const submitForm = async (apiKey: string, name: string) => {
    try {
      await addUserMutation.mutateAsync({ name, apiKey });
      // Optionally reset state or redirect after success
      // setApiKey("");
      // setName("");
    } catch (error) {
      // Assuming the error is an instance of Error
      setError(
        error instanceof Error ? error.message : "An unexpected error occurred",
      );
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submit action
    submitForm(apiKey, name)
      .then(() => {
        // Handle any post-submit actions here
      })
      .catch((error) => {
        // Handle any errors here
      });
  };

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="mb-7 mt-5 text-center text-3xl font-bold">Setup Page</h1>
      <p className="mb-6 max-w-md text-center">
        Please enter your API key and name.
      </p>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}

export default Page;
