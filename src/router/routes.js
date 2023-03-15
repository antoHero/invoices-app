const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    redirect: { path: "/invoices" },
    children: [
      { path: "/invoices", component: () => import("pages/IndexPage.vue") },
      {
        path: "/dashboard",
        component: () => import("pages/DashboardPage.vue"),
      },
      { path: "/wallet", component: () => import("pages/WalletPage.vue") },
      { path: "/activity", component: () => import("pages/ActivityPage.vue") },
      { path: "/help", component: () => import("pages/HelpPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
