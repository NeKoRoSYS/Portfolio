export interface RouteMeta {
    name?: string;
    path: string;
}

export const ROUTES: RouteMeta[] = [
    {path: ""},
    {name: "Home", path: "/home"},
    {name: "Contact", path: "/contact"},
    {name: "Blog", path: "/blogs"},
    {name: "Blog Post", path: "/blogs/:slug"},
    {name: "Privacy Policy", path: "/privacy-policy"},
    {name: "Terms of Service", path: "/terms-of-service"},
]

export const HEADERROUTES: RouteMeta[] = [
    {name: "Home", path: "/home"},
    {name: "Blog", path: "/blogs"},
]