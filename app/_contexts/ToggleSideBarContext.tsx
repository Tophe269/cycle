import { FC, createContext, useState, PropsWithChildren } from "react";

const ToggleSideBarContext = createContext<{
  isSideBarExtended: boolean;
  toggleSideBar: () => void;
}>({
  isSideBarExtended: true,
  toggleSideBar: () => {},
});

const ToggleSideBarProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isSideBarExtended, setIsSideBarExtended] = useState<boolean>(true);

  const toggleSideBar = () => {
    setIsSideBarExtended(state => !state);
  };

  return (
    <ToggleSideBarContext.Provider
      value={{
        isSideBarExtended,
        toggleSideBar,
      }}
    >
      {children}
    </ToggleSideBarContext.Provider>
  );
};

export { ToggleSideBarProvider };
export default ToggleSideBarContext;
