import { createContext, useState, ReactNode } from "react";

const ToggleMenuContext = createContext<{
  isSideBarOpen: boolean;
  toggleMenu: () => void;
}>({
  isSideBarOpen: true,
  toggleMenu: () => {},
});

const ToggleMenuProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [isSideBarOpen, setisSideBarOpen] = useState<boolean>(true);
  return (
    <ToggleMenuContext.Provider
      value={{
        isSideBarOpen,
        toggleMenu: () => {
          console.log("toggle menu ", isSideBarOpen);
          setisSideBarOpen(bool => !bool);
        },
      }}
    >
      {children}
    </ToggleMenuContext.Provider>
  );
};

export { ToggleMenuProvider };
export default ToggleMenuContext;
