import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { HiPhone, HiMiniGlobeAmericas, HiMiniHeart } from "react-icons/hi2";

const footerContent = {
  about: {
    logo: "/image/logo/svg",
    description:
      "From heartwarming testimonials to glowing reviews, these voices reflect the trust and confidence our customers place in us. Let their words speak volumes about the extraordinary experiences that await you with",
    cta: {
      href: "#_",
      label: "Learn more",
    },
  },
  footerLinks: [
    {
      heading: "Company",
      links: [
        {
          href: "#_",
          label: "Home",
        },
        {
          href: "#_",
          label: "How we work",
        },
        {
          href: "#_",
          label: "Our mission",
        },
        {
          href: "#_",
          label: "About",
        },
        {
          href: "#_",
          label: "Careers",
        },
        {
          href: "#_",
          label: "Contact",
        },
      ],
    },
    {
      heading: "Resources",
      links: [
        {
          href: "#_",
          label: "Blog",
        },
        {
          href: "#_",
          label: "Support",
        },
        {
          href: "#_",
          label: "Terms and conditions",
        },
        {
          href: "#_",
          label: "Privacy policy",
        },
      ],
    },
  ],
  contact: {
    heading: "Contact",
    description:
      "Please feel free to reach out to us with any inquiries, questions, or assistance you may need.",
    address: {
      street: "23 Main Street, Cityville, State, Zip Code",
      phone: "(555) 123-4567",
      website: "https://joefreycodes.com",
    },
  },
  copyright: {
    labelOne: "Copyright 2023. Designed with",
    labelTwo: "by Aziken Precious. All rights reserved",
  },
};

const Footer = () => {
  return (
    <footer role="contentinfo" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="block lg:flex gap-20 mb-10 pb-10">
            <div className="w-full lg:w-4/12 mb-10 lg:mb-0"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
