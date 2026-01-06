import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Собаки",
  lastName: "Шукаки",
  name: "Собаки Шукаки",
  role: "Підрозділ безпілотних систем",
  avatar: "/images/avatar.jpg", // можеш замінити пізніше
  email: "",
  location: "Europe/Kyiv",
  languages: [],
};

const newsletter: Newsletter = {
  display: false,
  title: <></>,
  description: <></>,
};

const social: Social = [
  { name: "Telegram", icon: "telegram", link: "https://t.me/sobaki_shukaki?direct", essential: true },
  { name: "Instagram", icon: "instagram", link: "https://www.instagram.com/shukaki_sobaki/", essential: true },
  { name: "Facebook", icon: "facebook", link: "http://www.facebook.com/sobaki.shukaki", essential: true },
  { name: "TikTok", icon: "tiktok", link: "https://www.tiktok.com/@sobaki_shukaki", essential: true },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Головна",
  title: "Собаки Шукаки",
  description: "Підрозділ безпілотних систем",
  headline: <>Підрозділ безпілотних систем</>,
  featured: { display: false, title: <></>, href: "/" },
  subline: (
    <>
      Основою нашої сили є поєднання людської відваги, технічної майстерності та глибокої
      відданості Україні. У підрозділі аеророзвідки ми щодня доводимо: сучасна війна — це не лише
      про зброю, а про розум, швидкість рішень та точність дій.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: "About",
  description: "",
  tableOfContent: { display: false, subItems: false },
  avatar: { display: false },
  calendar: { display: false, link: "" },
  intro: { display: false, title: "", description: <></> },
  work: { display: false, title: "", experiences: [] },
  studies: { display: false, title: "", institutions: [] },
  technical: { display: false, title: "", skills: [] },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "",
  description: "",
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: "",
  description: "",
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: "",
  description: "",
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };