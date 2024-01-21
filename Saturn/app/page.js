import Image from "next/image"
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-white font-custom">
      <div className="grid grid-cols-2 divide-x h-screen">
        <div className="flex justify-center items-center bg-[#C8E3DF]">
          <Image src="/saturn.png" width={400} height={400} />
        </div>
        <div className="bg-[#559092]">
          <nav className="flex flex-col items-center justify-between pt-10">
            <ul className="flex">
              <Link href="/">
                <li className="mr-4 mb-8 p-5 pt-3 text-base">Home</li>
              </Link>
              <Link href="/space_weather">
                <li className="mr-4 mb-8 p-5 pt-3 text-base">Space Weather</li>
              </Link>
              <Link href="/about">
                <li className="mr-4 mb-8 p-5 pt-3 text-base">About</li>
              </Link>
              <Link href="/news">
                <li className="mr-4 mb-8 p-5 pt-3 text-base">News</li>
              </Link>
              <Link href="http://localhost:8501/">
                <li className="mr-4 mb-8 p-5 pt-3 text-base">Chat</li>
              </Link>
            </ul>
          </nav>
          <div className="mt-24 ml-20 mr-10">
            <h1 className="text-4xl font-medium">Welcome</h1>
            <p className="pt-3 text-justify">Welcome to Saturn, your celestial guide to space weather predictions! Embark on a cosmic journey as our cutting-edge algorithms analyze solar activity, magnetic fields, and celestial events to provide real-time forecasts. Witness the captivating dance of solar flares, cosmic rays, and geomagnetic storms. Whether you're a stargazer, astronaut, or simply curious about the cosmic ballet, Saturn is your trusted companion in unraveling the mysteries above. Fasten your seatbelt and prepare for a voyage into the unknown, where the wonders of space unfold. Explore the future of space weather forecasting, only at Saturn – your window to the cosmos!</p>
          </div>
        </div>
      </div>
    </main>
  );
}
