import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

// styles
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/admin/assets/styles/tailwind.css";
import "@/sitemanager/assets/styles/tailwind.css";

// mounting point for the whole app
import App from "@/App.vue";

// layouts - Admin
import AdminLayout from "@/admin/layouts/Admin.vue";
import AdminAuth from "@/admin/layouts/Auth.vue";

// layouts - Site Manager
import SiteManagerLayout from "@/sitemanager/layouts/Admin.vue";
import SiteManagerAuth from "@/sitemanager/layouts/Auth.vue";

// views for Admin layout
import AdminDashboard from "@/admin/views/admin/Dashboard.vue";
import AdminSettings from "@/admin/views/admin/Settings.vue";
import AdminTables from "@/admin/views/admin/Tables.vue";
import AdminMaps from "@/admin/views/admin/Maps.vue";

// views for Site Manager layout
import SiteManagerDashboard from "@/sitemanager/views/site Manager/Dashboard.vue";
import SiteManagerSettings from "@/sitemanager/views/site Manager/Settings.vue";
import SiteManagerTables from "@/sitemanager/views/site Manager/Tables.vue";
import SiteManagerMaps from "@/sitemanager/views/site Manager/Maps.vue";

// views for Auth layout - Admin
import AdminLogin from "@/admin/views/auth/Login.vue";
import AdminRegister from "@/admin/views/auth/Register.vue";

// views for Auth layout - Site Manager
import SiteManagerLogin from "@/sitemanager/views/auth/Login.vue";
import SiteManagerRegister from "@/sitemanager/views/auth/Register.vue";

// views without layouts - Admin
import AdminLanding from "@/admin/views/Landing.vue";
import AdminProfile from "@/admin/views/Profile.vue";
import AdminIndex from "@/admin/views/Index.vue";

// views without layouts - Site Manager
import SiteManagerLanding from "@/sitemanager/views/Landing.vue";
import SiteManagerProfile from "@/sitemanager/views/Profile.vue";
// import SiteManagerIndex from "@/sitemanager/views/Index.vue";

// routes
const routes = [
  // Admin routes
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: AdminLayout,
    children: [
      {
        path: "/admin/dashboard",
        component: AdminDashboard,
      },
      {
        path: "/admin/settings",
        component: AdminSettings,
      },
      {
        path: "/admin/tables",
        component: AdminTables,
      },
      {
        path: "/admin/maps",
        component: AdminMaps,
      },
    ],
  },
  {
    path: "/admin/auth",
    redirect: "/admin/auth/login",
    component: AdminAuth,
    children: [
      {
        path: "/admin/auth/login",
        component: AdminLogin,
      },
      {
        path: "/admin/auth/register",
        component: AdminRegister,
      },
    ],
  },
  {
    path: "/admin/landing",
    component: AdminLanding,
  },
  {
    path: "/admin/profile",
    component: AdminProfile,
  },
  
  // Site Manager routes
  {
    path: "/sitemanager",
    redirect: "/sitemanager/dashboard",
    component: SiteManagerLayout,
    children: [
      {
        path: "/sitemanager/dashboard",
        component: SiteManagerDashboard,
      },
      {
        path: "/sitemanager/settings",
        component: SiteManagerSettings,
      },
      {
        path: "/sitemanager/tables",
        component: SiteManagerTables,
      },
      {
        path: "/sitemanager/maps",
        component: SiteManagerMaps,
      },
    ],
  },
  {
    path: "/sitemanager/auth",
    redirect: "/sitemanager/auth/login",
    component: SiteManagerAuth,
    children: [
      {
        path: "/sitemanager/auth/login",
        component: SiteManagerLogin,
      },
      {
        path: "/sitemanager/auth/register",
        component: SiteManagerRegister,
      },
    ],
  },
  {
    path: "/sitemanager/landing",
    component: SiteManagerLanding,
  },
  {
    path: "/sitemanager/profile",
    component: SiteManagerProfile,
  },
  
  // Default route (you need to decide which index to use)
  {
    path: "/",
    component: AdminIndex, // or SiteManagerIndex
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");