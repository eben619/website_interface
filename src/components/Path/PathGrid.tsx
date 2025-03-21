


import React from "react";
import PathCard from "./PathCard";

interface MembersProps {
  members: {
    id: number;
    name: string;
    position: string;
    image: string;
  }[];
}

const PathGrid = ({ members }: MembersProps) => {
  return (
    <div className="grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {members.map((member) => (
        <PathCard key={member.id} member={member} />
      ))}
    </div>
  );
};

export default PathGrid;