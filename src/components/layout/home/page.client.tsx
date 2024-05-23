"use client";

import React from "react";
import texts from "@/messages/es.json";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HomeClient = () => {
  const text = texts.layout;
  const [stateContact, setStateContact] = React.useState<boolean>(false);

  return (
    <main className="w-full h-auto flex items-start justify-center">
      <div className="w-full h-full container mx-0 lg:mx-[35rem] pt-6 pb-20">
        <Avatar className="w-16 h-16 mt-24 mb-12">
          <AvatarImage src={text.home.avatar} alt={text.home.user} />
          <AvatarFallback>{text.home.user}</AvatarFallback>
        </Avatar>
        <h1 className="text-lg font-semibold text-pretty">{text.home.title}</h1>
        <h2 className="text-lg text-pretty font-semibold mb-10">
          {text.home.subTitle}
        </h2>
        <p className="max-w-[40rem] text-balance">{text.home.description}</p>
        <Button variant="link" className="px-0">
          <Link href="/about" className="text-green-500 text-sm">
            More...
          </Link>
        </Button>

        <ul className="mt-7 mb-10">
          {text.home.socialMediaTopHome.map((item) => (
            <li key={item.id}>
              {item.title}
              <Link href={item.href} target="_blank" rel="noopener noreferrer">
                <Button variant="link" className="p-0 m-0">
                  {item.titleLink}
                </Button>
              </Link>
            </li>
          ))}
        </ul>

        <div className="bg-gray-100 w-[16rem] flex items-center gap-4 p-1 rounded-md">
          <Button
            onClick={() => {
              !stateContact ? alert("Unavailable") : null; // add function
            }}
            className="bg-gradient-to-t from-black to-white/30 shadow-transparent hover:shadow-lg transition-all"
          >
            {text.home.buttonContact.button}
          </Button>

          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-red-400/10 flex items-center justify-center">
              <div
                className={
                  stateContact
                    ? "h-2 w-2 rounded-full bg-green-400"
                    : "h-2 w-2 rounded-full bg-red-400"
                }
              ></div>
            </div>
            <span className="text-sm text-gray-500">
              {stateContact
                ? text.home.buttonContact.available
                : text.home.buttonContact.unavailable}
            </span>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start gap-5">
          <Link href="/blog">
            <Button
              variant="link"
              className="px-0 text-md flex items-center gap-1"
            >
              {text.home.recentEngagements.titleSection}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                />
              </svg>
            </Button>
          </Link>

          <ul className="w-full h-auto bg-gray-100 rounded-md flex flex-col gap-2 px-5 py-5">
            {text.home.recentEngagements.Works.map((work) => (
              <li
                key={work.title}
                className="w-full flex items-center justify-between font-sans font-medium"
              >
                <Link
                  href={work.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="link" className="p-0 m-0">
                    {work.title}
                  </Button>
                </Link>
                <span className="font-normal text-gray-500">{work.rol}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 flex flex-col items-start gap-5">
          <Link href="/blog">
            <Button
              variant="link"
              className="px-0 text-md flex items-center gap-1"
            >
              {text.home.blogSection.titleSection}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                />
              </svg>
            </Button>
          </Link>

          <ul className="w-full h-auto rounded-md flex flex-col gap-2 px-0 pb-5">
            {text.home.blogSection.Blogs.map((blog) => (
              <li
                key={blog.title}
                className="w-full flex items-center justify-between font-sans font-medium"
              >
                <Link href={`/blog/${blog.id}`} rel="noopener nowreferrer">
                  <Button
                    variant="link"
                    className="p-0 m-0 flex flex-col items-start"
                  >
                    <h3 className="text-xl">
                      {blog.title}{" "}
                      <span className="text-sm text-gray-500 font-normal">
                        {blog.date}
                      </span>
                    </h3>
                  </Button>
                  <p className="font-normal text-gray-500">
                    {blog.description.slice(0, 100)}...
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default HomeClient;
