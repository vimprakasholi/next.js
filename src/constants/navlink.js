import {
  ABOUT_ROUTE,
  BLOGS_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  PRODUCTS_ROUTE,
  TESTIMONIAL_ROUTE,
} from "./routes";

const navLinks = [
  {
    route: HOME_ROUTE,
    label: "Home",
  },
  {
    route: ABOUT_ROUTE,
    label: "About",
  },
  {
    route: PRODUCTS_ROUTE,
    label: "Products",
  },
  {
    route: BLOGS_ROUTE,
    label: "Blogs",
  },
  {
    route: TESTIMONIAL_ROUTE,
    label: "Testimonials",
  },
  {
    route: CONTACT_ROUTE,
    label: "Contact",
  },
];

export default navLinks;
