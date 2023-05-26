import { RiBriefcaseLine, RiBugLine, RiChromeLine, RiClipboardLine, RiMovie2Line, RiRemoteControlLine, RiRobotLine, RiToolsFill } from "react-icons/ri"

const ButtonLinks = [
  {
    id: 1,
    name: 'All',
    category: 'all',
    icon: [ RiBriefcaseLine,'ri-briefcase-line']
  },
  {
    id: 2,
    name: 'Remote Jobs',
    category: 'remote',
    icon: [ RiRemoteControlLine,"ri-remote-control-line"]
  },
  {
    id: 3,
    name: 'Resume Builder',
    category: 'resume',
    icon: [ RiClipboardLine,'ri-clipboard-line']
  },
  {
    id: 4,
    name: 'AI',
    category: 'ai',
    icon: [ RiRobotLine,'ri-robot-line']
  },
  {
    id: 5,
    name: 'Ethical Hacking',
    category: 'ethical',
    icon: [ RiBugLine,'ri-bug-line']
  },
  {
    id: 6,
    name: 'Movies | Series',
    category: 'movies',
    icon: [ RiMovie2Line,'ri-movie-2-line']
  },
  {
    id: 7,
    name: 'Extensions',
    category: 'extensions',
    icon: [ RiChromeLine,'ri-chrome-line']
  },
  {
    id: 8,
    name: 'Useful Tools',
    category: 'tools',
    icon: [ RiToolsFill,'ri-tools-fill']
  },
]

export default ButtonLinks