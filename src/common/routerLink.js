import { lazy } from "react";

const HomePage = lazy(() => import("../pages/HomePage"));
const MoviePage = lazy(() => import("../pages/MoviePage"));

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
  // {
  //   id: 3,
  //   name: "Anime page",
  //   nameLink: "Anime",
  //   path: "/anime",
  // },
];
