import { createContext, useState, ReactNode } from "react";

const ToggleSideBarContext = createContext<{
  isSideBarExtended: boolean;
  toggleSideBar: () => void;
}>({
  isSideBarExtended: true,
  toggleSideBar: () => {},
});

const ToggleSideBarProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [isSideBarExtended, setIsSideBarExtended] = useState<boolean>(true);

  return (
    <ToggleSideBarContext.Provider
      value={{
        isSideBarExtended,
        toggleSideBar: () => {
          setIsSideBarExtended(state => !state);
        },
      }}
    >
      {children}
    </ToggleSideBarContext.Provider>
  );
};

export { ToggleSideBarProvider };
export default ToggleSideBarContext;
