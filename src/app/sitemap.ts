import { baseURL } from "@/resources";

export default function sitemap() {
  return [
    {
      url: `${baseURL}/`,
      lastModified: new Date(),
    },
  ];
}