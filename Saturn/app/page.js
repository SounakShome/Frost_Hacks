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
          <div className="mt-20 ml-20 mr-10">
            <h1 className="text-4xl font-medium">Welcome</h1>
            <p className="pt-3 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque obcaecati veritatis earum nihil molestiae natus, eum sunt illum maxime impedit nesciunt unde. Dolore accusantium atque ipsum fugiat incidunt reprehenderit cumque praesentium deserunt eius impedit nesciunt, est delectus illum nisi veniam repudiandae enim commodi molestias, necessitatibus maxime voluptatibus saepe. Alias veniam, deleniti laudantium officia minus, odit accusantium praesentium quam voluptatum velit ipsam vero voluptates neque impedit ad quos sunt. Dolorem minus quos quisquam accusantium expedita, iste soluta nesciunt iure. Dolorem qui expedita repudiandae, distinctio consequuntur hic commodi obcaecati voluptate fugit quae eveniet dolorum voluptatem ad asperiores nam cumque laborum esse natus.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
