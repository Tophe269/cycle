import { FC } from "react";
import { createContext, useState, ReactNode } from "react";

const ToggleSideBarContext = createContext<{
  isSideBarExtended: boolean;
  toggleSideBar: () => void;
}>({
  isSideBarExtended: true,
  toggleSideBar: () => {},
});

const ToggleSideBarProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
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
