import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTERLINK } from "./common/routerLink";
import "swiper/css";
import Main from "./pages/Main";
import LoadingPage from "./components/loading/LoadingPage";

const detail = ROUTERLINK.find((item) => item.name === "Detail page");

function App() {
  return (
    <div className="App">
      <Suspense fallback={<LoadingPage></LoadingPage>}>
        <Routes>
          <Route element={<Main></Main>}>
            {ROUTERLINK.filter((item) => item.nameLink !== "Detail").map(
              (page) => {
                const Component = page.element;
                return (
                  <Route
                    key={page.id}
                    path={page.path}
                    element={<Component></Component>}
                  />
                );
              }
            )}
          </Route>
          <Route
            path={detail.path}
            element={<detail.element></detail.element>}
          ></Route>
          <Route path="*" element="404"></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
