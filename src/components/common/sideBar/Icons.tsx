import IconSearch from "../../../../public/icons/search.svg";
import IconNotifications from "../../../../public/icons/notifications.svg";
import IconCommands from "../../../../public/icons/commands.svg";
import IconCreate from "../../../../public/icons/create.svg";
import IconAllDocs from "../../../../public/icons/alldocs.svg";

const Icons: { [i: string]: JSX.Element } = {
  search: <IconSearch />,
  notifications: <IconNotifications />,
  commands: <IconCommands />,
  create: <IconCreate />,
  "all-docs": <IconAllDocs />,
};

export default Icons;
