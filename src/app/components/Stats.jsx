"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { BiChevronRight } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";

const statsContent = {
  stats: [
    {
      number: "99.9%",
      label: "Child Safety Solutions",
    },
    {
      number: "3,912",
      label: "Happy Customers",
    },
    {
      number: "4.8",
      label: "Rating Reviews",
    },
  ],
  getStarted: {
    heading: "Get started with our service?",
    description:
      "We understand that protecting your loved ones is of utmost importance.",
    img: "/images/illustration-woman.svg",
    cta: {
      cta_href: "#_",
      cta_label: "Learn More",
    },
  },
};

const Stats = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easeing: "slide",
      once: true,
    });
  }, []);

  return (
    <section className="pt-20 pb-10">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center space-x-0">
          <div className="w-full lg:w-7/12 mb-20 lg:mb-0">
            <div className="grid grid-cols-3">
              {statsContent.stats.map((stat, idx) => (
                <div
                  className="text-center lg:text-left"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  key={stat.label}
                >
                  <strong className="text-primary text-4xl xl:text-[52px] font-bold block leading-tight">
                    {stat.number}
                  </strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-5/12">
            <div className="bg-light py-10 px-7 lg:px-10 !pr-28 md:!pr-32 lg:!pr-40 rounded-lg relative" data-aos="fade-in">
              {statsContent.getStarted.img && (
                <img
                  src={statsContent.getStarted.img}
                  alt="img"
                  className="absolute right-0 lg:right-6 -top-14 w-24"
                />
              )}

              {statsContent.getStarted.heading && (
                <h3 className="text-heading font-bold textx-xl mb-3">
                  {statsContent.getStarted.heading}
                </h3>
              )}

              {statsContent.getStarted.description && (
                <p className="text-md mb-5">
                  {statsContent.getStarted.description}
                </p>
              )}

              {statsContent.getStarted.cta.cta_label && (
                <Link
                  href={statsContent.getStarted.cta.cta_href}
                  className="flex space-x-2 outline-none items-center font-semibold text-primary group"
                >
                  <span>{statsContent.getStarted.cta.cta_label}</span>
                  <span className="w-6 h-6 rounded-full bg-primary text-white inline-flex items-center justify-center duration-300 transition-all ease-in-out group-hover:bg-secondary">
                    <BiChevronRight className="text-lg" />
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
