import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  href: string;
  tags: string[];
  media: string;
}

const Project: FC<Props> = ({ title, description, href, tags, media }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-[500px] flex flex-col rounded-lg overflow-hidden group border-2 border-gray-300 hover:border-white/50 transition-all duration-300 cursor-pointer"
    >
      <div className="w-full h-[250px] relative">
        <Image
          src={media}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          alt="title"
        />
      </div>
      <div
        className="block lg:hidden lg:group-hover:block absolute inset-0 
        bg-gradient-to-t from-black/80 to-transparent overflow-hidden"
      >
        <div className="w-full h-full flex flex-col justify-end gap-1.5 p-5 text-white">
          <p className="font-base-b text-xl">{title}</p>
          <p className="text-sm">{description}</p>
          <div className="flex items-center gap-4 w-full">
            {tags.map((tag) => (
              <div
                key={tag}
                className="bg-gray-500 rounded-md px-1.5 py-1 flex items-center justify-center text-xs mt-1"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default Project;
