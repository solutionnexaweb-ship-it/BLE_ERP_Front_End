import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import App from "@/App.vue";

// styles
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/admin/assets/styles/tailwind.css";
import "@/sitemanager/assets/styles/tailwind.css";

// Shared login
import Login from "@/views/Login.vue";

// ================= ADMIN =================
import AdminLayout from "@/admin/layouts/Admin.vue";
import AdminDashboard from "@/admin/views/admin/Dashboard.vue";
import AdminProjectIndex from "@/admin/views/admin/Projects/index.vue";
import AdminProjectCreateUpdate from "@/admin/views/admin/Projects/createUpdate.vue";

// ================= SITE MANAGER =================
import SiteManagerLayout from "@/sitemanager/layouts/Admin.vue";
import SiteManagerDashboard from "@/sitemanager/views/site Manager/Dashboard.vue";

// ================= ROUTES =================
const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },

  // Admin routes
  {
    path: "/admin",
    component: AdminLayout,
    children: [
      { path: "dashboard", component: AdminDashboard },
      { path: "projects", component: AdminProjectIndex },
      { path: "projects/create-update", component: AdminProjectCreateUpdate },
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

  { path: "/:pathMatch(.*)*", redirect: "/login" },
];

// ================= ROUTER =================
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// ================= ROUTE GUARD =================
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("accessToken");

  // Always allow login
  if (to.path === "/login") {
    return next();
  }

  // Protect admin & sitemanager routes
  if (to.path.startsWith("/admin") || to.path.startsWith("/sitemanager")) {
    if (!token) {
      return next("/login");
    }
  }

  next();
});

// ================= APP =================
createApp(App).use(router).mount("#app");
