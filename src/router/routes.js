const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "test", component: () => import("pages/TestPage.vue") },
    ],
  },
  {
    path: "/products",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: ":name", component: () => import("pages/ProductPage.vue") },
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
