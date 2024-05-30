import React from "react";
import Navbar from "../components/Navbar_n";
import TeamMemberCard from "./TeamMemberCard";
import Link from "next/link";

const page = () => {
  const teamMembers = [
    {
      name: "Kunal Mukherjee",
      description: "Sophomore at VIT CHENNAI, and thrive at the intersection of mathematics, data science, and design.",
      link: "https://www.linkedin.com/in/kunal-mukherjee-447300251/ ",     
      image: "https://media.licdn.com/dms/image/D5603AQFWXRJKOVnHaw/profile-displayphoto-shrink_200_200/0/1694621374104?e=2147483647&v=beta&t=BI1NsPDP3-hvurO8_gKclU9QVSVJ5NRUt3Y794N7bEQ"  
    },
    {
      name: "Mohit Kumar",
      description: "Electronics and Computer Engineering student at VIT CHENNAI | Member of IEEE Computer Society.",
      link: "https://www.linkedin.com/in/mohitkumar111/",
      image: "https://media.licdn.com/dms/image/C4D03AQGq0tDr2AUu8A/profile-displayphoto-shrink_400_400/0/1640622208308?e=1710979200&v=beta&t=iBJM5q3chiScCeYGeO7MkEYQcQAO0OE2JBT9jPDjVX8",
    },
    {
      name: "Diya Ravishankar",
      description: "Student @ VIT Chennai |Web Development Member @ IEEE Robotics And Automation Society and @ Zero Bugs Club VIT Chennai Student Chapter | Machine Learning",
      link: "https://www.linkedin.com/in/diya-ravishankar/",
      image: "https://media.licdn.com/dms/image/D5603AQGpH7sWz2NeoA/profile-displayphoto-shrink_400_400/0/1696598788905?e=1710979200&v=beta&t=zFwExThWSnt17-7ipq4z7EbbheqyYVqo5TM3GddBP6k"
    },
    {
      name: "Sounak Shome",
      description: "Electronics and Computer Engineering Undergrad at VIT Chennai | Member @ IEEE RAS | Member of IEEE CompSoc | Avionics Engineer @ Team Aviators International.",
      link: "https://www.linkedin.com/in/SounakShome",
      image: "https://media.licdn.com/dms/image/D5603AQGlLfdrBOIt-g/profile-displayphoto-shrink_400_400/0/1694006672658?e=1710979200&v=beta&t=RhU5dHM-bfEovXwfwGTu-alOb5x7qG_gEFqPXMIOHaU"
    },
    // Add more team members as needed
  ];
  return (
    <div>
      <Navbar />
      <div className="bg-[#559092]">
        <section className="about-section p-8">
          <h2 className="text-3xl text-white font-bold mb-4">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 min-h-fit">
            {teamMembers.map((member, index) => (
              <Link href={`${member.link}`} key={index}>
                <TeamMemberCard {...member} />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
