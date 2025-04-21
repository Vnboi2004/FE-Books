import { Routes, Route,  useLocation } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { appRoutes } from "./routes/Routes";
import './App.css';
import { Suspense } from "react";
import useDarkMode from "./hooks/useDarkMode";

const App = () => {
  
  const location = useLocation();

  return (
    <SwitchTransition mode="in-out">
        <CSSTransition
        key={location.pathname}
        className="fade"
        timeout={150}
        exit={false}
      >
        <Suspense fallback={<h1 className="text-center">Loading</h1>}>
          <Routes location={location}>
            {appRoutes.map((route) => <Route key={route.path} path={route.path} element={<route.component/>}/>)}
          </Routes>
        </Suspense>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default App
