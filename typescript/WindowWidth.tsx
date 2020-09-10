import * as React from "react";

const WindowWidthContext = React.createContext<number>(0);

export function WindowWidthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [windowWidth, setWindowWidth] = React.useState(
    () => document.body.clientWidth
  );
  React.useEffect(() => {
    function onResize() {
      setWindowWidth(document.body.clientWidth);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <WindowWidthContext.Provider value={windowWidth}>
      {children}
    </WindowWidthContext.Provider>
  );
}

export const useWindowWidth = () => React.useContext(WindowWidthContext);
