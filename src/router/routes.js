
const routes = [
  {
    path: "/",
    component: () => import("pages/Index.vue"),
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "practice", component: () => import("pages/Practice.vue") },
      { path: "shop", component: () => import("pages/Shop.vue") },
      { path: "contact", component: () => import("pages/Contact.vue") },
      { path: "gallery", component: () => import("pages/Gallery.vue") },
    ],
  },
  {
    path: "/intranet/",
    component: () => import("layouts/IntranetLayout.vue"),
    redirect: '/intranet/practice',
    children: [
      {
        path: "members",
        component: () => import("pages/intranet/Members.vue"),
      },
      { path: "shop", component: () => import("pages/Shop.vue") },
      { path: "practice", component: () => import("pages/Practice.vue") },
      {
        path: "calendar",
        component: () => import("pages/intranet/Calendar.vue"),
      },
      {
        path: "committees",
        component: () => import("pages/intranet/Committees.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
