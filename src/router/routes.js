const routes = [
  {
    path: "/",
    component: () => import("pages/Index.vue")
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "practice", component: () => import("pages/Practice.vue") },
      { path: "membership", component: () => import("pages/Membership.vue") },
      { path: "shop", component: () => import("pages/Shop.vue") },
      { path: "contact", component: () => import("pages/Contact.vue") },
      { path: "gallery", component: () => import("pages/Gallery.vue") }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
