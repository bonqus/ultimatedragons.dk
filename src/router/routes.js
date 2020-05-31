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
      { path: "teams", component: () => import("pages/Teams.vue") },
      { path: "membership", component: () => import("pages/Membership.vue") },
      { path: "shop", component: () => import("pages/Shop.vue") },
      { path: "contact", component: () => import("pages/Contact.vue") }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
