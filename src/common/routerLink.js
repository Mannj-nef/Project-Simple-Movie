import { lazy } from "react";

const HomePage = lazy(() => import("../pages/HomePage"));
const MoviePage = lazy(() => import("../pages/MoviePage"));
const Upcoming = lazy(() => import("../pages/Upcoming"));
const Detail = lazy(() => import("../pages/MovieDetail"));

export const ROUTERLINK = [
  {
    id: 1,
    name: "Home page",
    nameLink: "Home",
    path: "/",
    element: HomePage,
  },
  {
    id: 2,
    name: "Movie page",
    nameLink: "Movie",
    path: "/movie",
    element: MoviePage,
  },
  {
    id: 3,
    name: "Upcoming page",
    nameLink: "Upcoming",
    path: "/upcoming",
    element: Upcoming,
  },
  {
    id: 4,
    name: "Detail page",
    nameLink: "Detail",
    path: "/detail/:id",
    element: Detail,
  },
];
