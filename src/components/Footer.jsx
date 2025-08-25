import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import esewa from "@/assets/images/payments/esewa.png";
import fonepay from "@/assets/images/payments/fonepay.png";
import khalti from "@/assets/images/payments/khalti.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-16 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-slate-600 pb-16 mb-5">
          <div>
            <h1 className="text-2xl font-bold text-white">ShopNest</h1>
            <p className="text-sm text-slate-400 text-justify py-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ipsum
              sit numquam saepe iste veniam nesciunt quaerat labore molestias.
              Inventore.
            </p>
            <div className="flex gap-2">
              <Link href="#" className="text-slate-300">
                <FaFacebookF />
              </Link>
              <Link href="#" className="text-slate-300">
                <FaInstagram />
              </Link>
              <Link href="#" className="text-slate-300">
                <FaYoutube />
              </Link>
              <Link href="#" className="text-slate-300">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-3">Shop</h3>
            <ul>
              <li>
                <a href="#" className="text-sm text-slate-300 hover:underline">
                  Featured Products
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-300 hover:underline">
                  Popular Products
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-300 hover:underline">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-300 hover:underline">
                  Sale Items
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-3">We Accept</h3>
            <div className="flex items-start flex-col gap-x-2 gap-y-3">
              <Image
                className="w-auto h-10 bg-white rounded px-5 py-2"
                src={esewa}
                alt="eSewa Logo"
              />
              <Image
                className="w-auto h-10 bg-white rounded px-5 py-2"
                src={fonepay}
                alt="Fonepay Logo"
              />
              <Image
                className="w-auto h-10 bg-white rounded px-5 py-2"
                src={khalti}
                alt="Khalti Logo"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-3">Contact Us</h3>
            <ul className="text-slate-300 text-sm">
              <li className="mb-1 flex items-center gap-2">
                <i className="fa fa-envelope" />
                <span>info@shopnest.com</span>
              </li>
              <li className="mb-1 flex gap-2">
                <i className="fa fa-map-marker-alt" />
                <span>Ghorahi Sub-Metropolitancity -15, Ratanpur, Dang</span>
              </li>
              <li className="mb-1 flex gap-2">
                <i className="fa fa-phone" />
                <span>+977 9813456034</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-3s">
          <p className="text-slate-400 text-sm">Copyright © 2025 ShopNest</p>
          <div>
            <a className="text-sm text-slate-400 hover:underline" href="#">
              Privacy Policy
            </a>
            <a className="text-sm text-slate-400 hover:underline" href="#">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
