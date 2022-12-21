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
    path: "/test2",
    component: () => import("layouts/TestLayout.vue"),
    children: [{ path: "", component: () => import("pages/TestPage2.vue") }],
  },
  {
    path: "/ilhan",
    component: () => import("layouts/IlhanL.vue"),
    children: [{ path: "", component: () => import("pages/IlhanPage.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
