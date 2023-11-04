import { FC } from "react";
import { Check } from "@/components";
import { motion } from "framer-motion";
import { smallClickAnimation } from "@/utils/framer.config";

interface Props {
  title: string;
  price: number;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

const PricingCard: FC<Props> = ({
  title,
  price,
  features,
  buttonText,
  popular = false,
}) => {
  return (
    <div
      className={`relative flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border-4 ${
        popular ? "border-purple-500" : "border-secondary"
      }`}
    >
      {popular && (
        <div className="px-3 py-1 text-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Popular
        </div>
      )}
      <div>
        <h3 className="text-2xl font-base-b text-center">{title}</h3>
        <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
          <span className="text-4xl font-bold">{`$${price}`}</span>
        </div>
        <ul className="mt-4 space-y-2">
          {features.map((feature, index) => (
            <li className="flex items-center" key={`${title}-${index}`}>
              <Check />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <motion.button
          {...smallClickAnimation}
          className={`w-full py-3 rounded-md ${
            popular
              ? "bg-gradient-to-r from-pink-500 to-purple-500 text-primary"
              : "bg-primary text-white"
          }`}
        >
          {buttonText}
        </motion.button>
      </div>
    </div>
  );
};

export default PricingCard;
