import React from "react";
import { CanvasCards } from "./canvascards";
import { Vortex } from "~/components/vortex";
import { Button } from "~/components/ui/button";
import Example from "./charts";
import { SignedIn } from "@clerk/nextjs";

function Main() {
  return (
    <main className="h-full">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="mb-[150px] mt-[200px] flex w-full flex-col items-center justify-center  px-2 py-4 md:px-10"
      >
        <h2 className="text-center text-2xl font-bold text-white md:text-6xl">
          Youtube-Maxxing?
        </h2>
        <p className="mt-6 max-w-xl text-center text-sm text-white md:text-2xl">
          Take control of your time again by cognizing of how much time you
          spend on websites and set limits to help you focus on what matters.
        </p>
        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row">
          <Button className="shadow-[0px_2px_0px_0px_#FFFFFF40_inset] transition duration-200 hover:bg-blue-700">
            Download Today!
          </Button>
        </div>
      </Vortex>
      <CanvasCards />
      <SignedIn>
        <div className="flex w-full">
          <div className="gg mt-[50px] flex h-[500px] w-full flex-col justify-center px-[300px]">
            <Example />
          </div>
        </div>
      </SignedIn>
    </main>
  );
}

export default Main;
