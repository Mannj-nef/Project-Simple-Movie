import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTERLINK } from "./common/routerLink";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="py-10 container bg-[#222126]">
          <Header></Header>
          <Routes>
            {!!ROUTERLINK.length &&
              ROUTERLINK.map((page) => {
                const Component = page.element;
                return (
                  <Route path={page.path} element={<Component></Component>} />
                );
              })}
          </Routes>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
