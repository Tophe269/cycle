import { ReactElement } from "react";
import IconSearch from "app/_icons/Search";
import IconNotifications from "app/_icons/Notifications";
import IconCommands from "app/_icons/Commands";
import IconCreate from "app/_icons/Create";
import IconAllDocs from "app/_icons/AllDocs";

const Icons: { [i: string]: ReactElement } = {
  search: <IconSearch />,
  notifications: <IconNotifications />,
  commands: <IconCommands />,
  create: <IconCreate />,
  "all-docs": <IconAllDocs />,
};

export default Icons;
