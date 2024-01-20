import Navbar from "./components/Navbar";
import Image from "next/image"

export default function Home() {
  return (
    <main className="text-white font-custom">
      <div className="grid grid-cols-2 divide-x h-screen">
        <div className="flex justify-center items-center h-screen bg-[#C8E3DF]">
          <Image src="/saturn.png" width={400} height={400} />
        </div>
        <div className="bg-[#559092]">
          <Navbar />
          <div className="mt-20 ml-20 mr-10">
            <h1 className="text-4xl font-medium">Welcome</h1>
            <p className="pt-3 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque obcaecati veritatis earum nihil molestiae natus, eum sunt illum maxime impedit nesciunt unde. Dolore accusantium atque ipsum fugiat incidunt reprehenderit cumque praesentium deserunt eius impedit nesciunt, est delectus illum nisi veniam repudiandae enim commodi molestias, necessitatibus maxime voluptatibus saepe. Alias veniam, deleniti laudantium officia minus, odit accusantium praesentium quam voluptatum velit ipsam vero voluptates neque impedit ad quos sunt. Dolorem minus quos quisquam accusantium expedita, iste soluta nesciunt iure. Dolorem qui expedita repudiandae, distinctio consequuntur hic commodi obcaecati voluptate fugit quae eveniet dolorum voluptatem ad asperiores nam cumque laborum esse natus.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
