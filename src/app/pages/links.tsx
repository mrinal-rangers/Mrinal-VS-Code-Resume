import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";
import { FaRegFileWord } from "react-icons/fa";
export const links = [
  {
    index: 0,
    title: "Find me on Github",
    href: "https://github.com/mrinal-rangers",
    icon: <FaGithub />,
  },
  {
    index: 1,
    title: "Find me on LinkedIn",
    href: "https://www.linkedin.com/in/mrinal-deb-a5a6a3199/",
    icon: <FaLinkedin />,
  },
  {
    index: 2,
    title: "Contact me via email",
    href: "mrinalenquiry@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    index: 3,
    title: "Find me on Leetcode",
    href: "https://leetcode.com/mrinal_rewa/",
    icon: <SiLeetcode />,
  },
  {
    index: 4,
    title: "Resume",
    href: "https://drive.google.com/drive/folders/1de1sVk3A8ebWejJzaZSRawpM1vanmyTL",
    icon: <FaRegFileWord />,
  },
];
