"use client";
import React, { useState } from "react";
import { Button } from "~/components/ui/button";
// Import your generated tRPC hook for the mutation

function Page() {
  const [apiKey, setApiKey] = useState('');
  const [name, setName] = useState('');

  // Example trpc mutation hook (adjust with your actual mutation hook)
//   const { mutate: submitForm } = trpc.useMutation(['yourMutationPath'], {
//     onSuccess: () => {
//       // Handle success (e.g., showing a success message or redirecting)
//     },
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Call your tRPC route with the form data
//     submitForm({ apiKey, name });
//   };

  return (
    <div className="flex flex-col h-full items-center justify-center">
        <h1 className="text-3xl mt-5 mb-7 font-bold text-center">Setup Page</h1>
        <p className="text-center max-w-md mb-6">
            pwease enter your api key and name pls :3
        </p>
      <form className="flex flex-col gap-4" >
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
        <Button type="submit" className="shadow-[0px_2px_0px_0px_#FFFFFF40_inset] transition duration-200 hover:bg-blue-700">
          Submit Now
        </Button>
      </form>
    </div>
  );
}

export default Page;
