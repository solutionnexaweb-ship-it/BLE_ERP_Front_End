import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import App from "@/App.vue";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/admin/assets/styles/tailwind.css";
import "@/sitemanager/assets/styles/tailwind.css";
// Shared login
import Login from "@/views/Login.vue";

// Admin
import AdminLayout from "@/admin/layouts/Admin.vue";
import AdminDashboard from "@/admin/views/admin/Dashboard.vue";

// Site Manager
import SiteManagerLayout from "@/sitemanager/layouts/Admin.vue";
import SiteManagerDashboard from "@/sitemanager/views/site Manager/Dashboard.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },

  // Admin routes
  {
    path: "/admin",
    component: AdminLayout,
    children: [
      { path: "dashboard", component: AdminDashboard },
    ],
  },

  // Site Manager routes
  {
    path: "/sitemanager",
    component: SiteManagerLayout,
    children: [
      { path: "dashboard", component: SiteManagerDashboard },
    ],
  },

  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Protect dashboards
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("accessToken");
  if (
    (to.path.startsWith("/admin") || to.path.startsWith("/sitemanager")) &&
    !token
  ) {
    return next("/login");
  }
  next();
});

createApp(App).use(router).mount("#app");
