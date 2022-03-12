import {
  createContext,
  useState,
  forwardRef,
  useContext,
  ReactChild,
} from "react";

const ToggleMenuContext = createContext<{
  isMenuOpen: boolean;
  toggleMenu: () => void;
}>({
  isMenuOpen: true,
  toggleMenu: () => {},
});

const ToggleMenuProvider = ({
  children,
}: {
  children: ReactChild;
}): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
  return (
    <ToggleMenuContext.Provider
      value={{
        isMenuOpen,
        toggleMenu: () => {
          console.log("toggle menu ", isMenuOpen);
          setIsMenuOpen(bool => !bool);
        },
      }}
    >
      {children}
    </ToggleMenuContext.Provider>
  );
};

export { ToggleMenuProvider };
export default ToggleMenuContext;
