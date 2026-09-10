export interface RouteMeta {
  name?: string;
  path: string;
}

export const ROUTES: RouteMeta[] = [
  { path: "" },
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "#portfolio" },
  { name: "Contact", path: "#contact" },
  { name: "Blog", path: "/blog" },
  { name: "Blog Post", path: "/blog/:slug" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms of Service", path: "/terms-of-service" },
];

export const HEADERROUTES: RouteMeta[] = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
];
