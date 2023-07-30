export interface Logo {
  name: string;
  url: string;
  icon_url: string;
}

// Logos are served from `public/logos` and are referenced by `logos/{filename}`.
const LOGOS: Logo[] = [
  {
    name: "Vite",
    url: "https://vitejs.dev",
    icon_url: "/logos/vite.svg",
  },
  {
    name: "Preact",
    url: "https://preactjs.com",
    icon_url: "/logos/preact.svg",
  },
  {
    name: "Cloudflare",
    url: "https://developers.cloudflare.com/pages/",
    icon_url: "/logos/cloudflare.svg",
  },
  {
    name: "TypeScript",
    url: "https://typescriptlang.org",
    icon_url: "/logos/typescript.svg",
  },
];

export const onRequestGet: PagesFunction = async () => {
  return Response.json(LOGOS);
};
