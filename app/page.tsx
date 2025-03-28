import Image from "next/image";
import HomePage from "./HomepageSection/page";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center w-full h-auto p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <HomePage />
        </main>
      </div>
    </>
  );
}
