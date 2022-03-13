import { createContext, useState, ReactNode } from "react";

const ToggleSideBarContext = createContext<{
  isSideBarOpen: boolean;
  toggleSideBar: () => void;
}>({
  isSideBarOpen: true,
  toggleSideBar: () => {},
});

const ToggleSideBarProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(true);

  return (
    <ToggleSideBarContext.Provider
      value={{
        isSideBarOpen,
        toggleSideBar: () => {
          console.log("toggle menu ", isSideBarOpen);
          setIsSideBarOpen(bool => !bool);
        },
      }}
    >
      {children}
    </ToggleSideBarContext.Provider>
  );
};

export { ToggleSideBarProvider };
export default ToggleSideBarContext;
