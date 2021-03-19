import Home from "./views/Home.vue";
import Resume from "./views/Resume.vue";
import Projects from "./views/Projects.vue";
import Photos from "./views/Photos.vue";
import Videos from "./views/Videos.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/resume",
    name: "resume",
    component: Resume,
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects,
  },
  {
    path: "/photos",
    name: "photos",
    component: Photos,
  },
  {
    path: "/videos",
    name: "videos",
    component: Videos,
  },
];
