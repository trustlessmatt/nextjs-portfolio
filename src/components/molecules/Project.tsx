import { FC } from "react";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  tags: string[];
  media: string;
}

const Project: FC<Props> = ({ title, description, tags, media }) => {
  return (
    <div className="relative w-[500px] h-[250px] rounded-lg overflow-hidden">
      <Image
        src={media}
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        alt="title"
      />
    </div>
  );
};

export default Project;
