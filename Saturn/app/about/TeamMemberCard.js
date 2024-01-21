import Image from "next/image";
const TeamMemberCard = ({ name, description, image }) => {
    return (
      <div className="bg-white rounded-lg p-6 shadow-md mb-4">
        <Image src={image} width={200} height={200} className="rounded-lg" />
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    );
  };
  
  export default TeamMemberCard;
  