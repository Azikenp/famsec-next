"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const blogContent = {
  heading: {
    headingSubTitle: "Out Writeups",
    headingTitle: "Our Latest Articles",
    description:
      "We are dedicated to staying at the forefront of our industry and keeping our valued community informed about the latest trends, insights, and innovations.",
  },
  recentBlog: [
    {
      permalink: "#_",
      featuredImg: "/images/post-1-min.jpg",
      title: "10 Essential Tips for Protecting Your Home from Burglaries",
      excerpt:
        "Learn the best practices and simple steps to safeguard your home and loved ones from potential break-ins and theft.",
      author: {
        img: "/images/person-1-min.jpg",
        name: "Alisa Richardson",
        titleRole: "Editor, CEO, Co-founder",
      },
    },
    {
      permalink: "#_",
      featuredImg: "/images/post-2-min.jpg",
      title: "Securing Your families with disabilities",
      excerpt:
        "lorem ipsum dolores wdjwd ydod dhksoqs  udgwdhwidgwywu weuf ehfe jifefiwe fwfu wf hfw bb wdw dw f f fwhf wefuwfuwe wbefuwf w fw he fweyfwuefwe fwhfwh fw fw fqhhf qh fhqw fhwf",
      author: {
        img: "/images/person-2-min.jpg",
        name: "Micheal Richardson",
        titleRole: "Editor, CEO, Co-founder",
      },
    },
    {
      permalink: "#_",
      featuredImg: "/images/post-3-min.jpg",
      title: "People who live in glass houses don't throw stones",
      excerpt:
        "dwydw wdbw dwm fwj wek ekfweifwe f wejdf weif wekf fhevfwndfwjf wefmwnfw hf wfkwmifwef whf wefijweofi wejhf efjmefe jeqiqj fnqi jflwefjhe rnqelq efelife fhe feufweidq jd wfwefiw fhw efjwqjh",
      author: {
        img: "/images/person-3-min.jpg",
        name: "Brandon Richardson",
        titleRole: "Editor, CEO, Co-founder",
      },
    },
    {
      permalink: "#_",
      featuredImg: "/images/post-1-min.jpg",
      title: "10 Essential Tips for Protecting Your Home from Burglaries",
      excerpt:
        "Learn the best practices and simple steps to safeguard your home and loved ones from potential break-ins and theft.",
      author: {
        img: "/images/person-1-min.jpg",
        name: "Alisa Richardson",
        titleRole: "Editor, CEO, Co-founder",
      },
    },
    {
      permalink: "#_",
      featuredImg: "/images/post-2-min.jpg",
      title: "Securing Your families with disabilities",
      excerpt:
        "lorem ipsum dolores wdjwd ydod dhksoqs  udgwdhwidgwywu weuf ehfe jifefiwe fwfu wf hfw bb wdw dw f f fwhf wefuwfuwe wbefuwf w fw he fweyfwuefwe fwhfwh fw fw fqhhf qh fhqw fhwf",
      author: {
        img: "/images/person-2-min.jpg",
        name: "Micheal Richardson",
        titleRole: "Editor, CEO, Co-founder",
      },
    },
    {
      permalink: "#_",
      featuredImg: "/images/post-3-min.jpg",
      title: "People who live in glass houses don't throw stones",
      excerpt:
        "dwydw wdbw dwm fwj wek ekfweifwe f wejdf weif wekf fhevfwndfwjf wefmwnfw hf wfkwmifwef whf wefijweofi wejhf efjmefe jeqiqj fnqi jflwefjhe rnqelq efelife fhe feufweidq jd wfwefiw fhw efjwqjh",
      author: {
        img: "/images/person-3-min.jpg",
        name: "Brandon Richardson",
        titleRole: "Editor, CEO, Co-founder",
      },
    },
  ],
  cta: {
    href: "#_",
    label: "To view all posts",
    labelSuffix: "click here",
  },
};

const RecentBlog = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(null);
  const [isBeginning, setIsBeginning] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    setIsEnd(sliderRef.current?.swiper.isEnd);
    setIsBeginning(sliderRef.current?.swiper.isBeginning);
  }, []);

  const preventHandler = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  });
  const nextHandler = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  });

  return (
    <section className="py-20 bg-light overflow-x-hidden">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center mb-10">
          <div className="lg:w-5/12 mb-10 lg:mb-0">
            {blogContent.heading.headingSubTitle && (
              <span className="inline-block py-0.5 pl-3 text-heading font-semibold relative mb-7 before:absolute before:w-2/3 before:bg-yellowLight before:left-0 before:top-0 before:bottom-0 before:z-[-1]">
                {blogContent.heading.headingSubTitle}
              </span>
            )}

            {blogContent.heading.headingTitle && (
              <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5">
                {blogContent.heading.headingTitle}
              </h2>
            )}

            {blogContent.heading.description && (
              <h2 className="text-body leading-relaxed">
                {blogContent.heading.description}
              </h2>
            )}
          </div>

          <div className="lg:w-5/12 text-left lg:text-right">
            <div classNAme="inline-flex ml-auto space-x-3 gap-x-3">
              <div
                onClick={preventHandler}
                className={`${
                  isBeginning === true
                    ? "opacity-30 bg-[#E1E7EA] cursor-auto"
                    : "opacity-100 hoveer:bg=primary"
                } group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer bg-[#E1E7EA] rounded-full inline-flex justify-center items-center`}
              >
                <BiChevronLeft
                  className={`text-3xl text-primary transition-all duration-300 ease-in-out group-hover:text-white 
              ${
                isBeginning === true
                  ? "group-hover:text-primary"
                  : "group-hover:text-white"
              }`}
                />
              </div>

              <div
                onClick={nextHandler}
                className={`${
                  isBeginning === true
                    ? "opacity-30 bg-[#E1E7EA] cursor-auto"
                    : "opacity-100 hoveer:bg=primary"
                } group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer bg-[#E1E7EA] rounded-full inline-flex justify-center items-center`}
              >
                <BiChevronRight
                  className={`text-3xl text-primary transition-all duration-300 ease-in-out group-hover:text-white 
              ${
                isBeginning === true
                  ? "group-hover:text-primary"
                  : "group-hover:text-white"
              }`}
                />
              </div>
            </div>
          </div>
        </div>

        <Swiper
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
            968: {
              width: 968,
              slidesPerView: 2,
            },
          }}
          ref={sliderRef}
          speed={700}
          spaceBetween={30}
          onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex)}
          classame="z-50 py-32 mb-24 relative flex items-stretch !overflow-visible before:z-50 before:py-32 before:right-full before:w-screen before:absolute before:-top-5 before:-bottom-5 before:bg-light"
        >
          {blogContent.recentBlog.map((blog, idx) => (
            <SwiperSlide className="overflow-visible h-full" key={idx}>
              <div className="p-5 rounded-lg bg-white relative mt-10">
                <Link
                  href={blog.permalink}
                  className="relative -mt-10 inline-block overflow-hidden rounded-lg mb-4"
                >
                  <Image
                    src={blog.featuredImg}
                    width={782}
                    height={467}
                    alt="img"
                  />
                </Link>
                <h2 className="text-heading text-lg font-bold leading-7 mb-5">
                  <Link
                    href={blog.permalink}
                    className="relative text-heading "
                  >
                    {blog.title}
                  </Link>
                </h2>
                <p className="relative mb-6">{blog.excerpt}</p>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={blog.author.img}
                      width={50}
                      height={50}
                      alt="img"
                      className="rounded-full object-cover w-14 h-14"
                    />
                  </div>
                  <div className="leading-5">
                    <strong className="text-primary">{blog.author.name}</strong>
                    <span className="block text-sm">
                      {blog.author.titleRole}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mx-auto flex items-center justify-center">
          <Link
            href={blogContent.cta.href}
            className="duration-300 transition-all ease-in-out py-3 px-6 flex border rounded-full space-x-3 items-center hover:border-gray-400"
          >
            {blogContent.cta.label}
            {""}
            <strong className="text-primary pl-1 font-semibold">
              {blogContent.cta.labelSuffix}
            </strong>
            <span className="text-gray-300">|</span>
            <span className="bg-primary rounded-full w-8 h-8 flex items-center justify-center"></span>
            <BiChevronRight className="w-4 h-6 text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;
