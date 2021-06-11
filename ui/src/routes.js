import Authors from "./components/Authors.vue";
import UserInfo from './components/UserInfo.vue';
import Home from './components/Home.vue';

const routes = [
    { path: "/", component: Home },
    { path: "/authors", component: Authors },
    { path: "/user", component: UserInfo },
];

export default routes;