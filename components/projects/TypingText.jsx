import { motion } from "framer-motion";

import { textContainer, textVariant2 } from "@/constants/motion";

const TypingText = ({ title, textStyles }) => (
  <motion.p variants={textContainer} className={`${textStyles}`}>
    {Array.from(title).map((Letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {Letter === " " ? "\u00A0" : Letter}
      </motion.span>
    ))}
  </motion.p>
);

export default TypingText;
