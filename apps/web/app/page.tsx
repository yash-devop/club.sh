import React from "react";
import { Aws, Docker, MaxWidthContainer, NextJS, Postgres, ReactQuery, Redis, Tailwind, Typescript } from '@club/ui'
import Navbar from "./components/Navbar";
import SignupButton from "./components/SignupButton";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <div className="bg-[#fafaf8] h-full min-h-screen">
        <Navbar />
        <MaxWidthContainer className="flex items-center justify-center py-20 border-l border-r h-full w-full px-6 md:px-0">
          <div className="w-full h-full flex items-center justify-center flex-col">
            <div className="max-w-4xl text-center flex flex-col gap-5 items-center justify-center w-full lg:pt-8 lg:pb-5">
              <span className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-medium tracking-tight text-[#1e1e1edc]">An URL Shortener with built-in <br className="hidden md:block" />Link Management for marketing teams.</span>
              <p className="max-w-xl text-[#7a7a7a]">Shorten URLs and enhance your link strategy with built-in tracking and comprehensive management features</p>
              <div className="flex items-center gap-4 py-2">
                <a href="/signin" rel="">
                  <SignupButton name="Get Started" type="primary" />
                </a>
                <a href="https://yashkambleportfolio.vercel.app/" rel="noopener noreferrer">
                  <SignupButton name="Visit Creator" type="outline" />
                </a>
              </div>
            </div>
            {/* custom div with circular corners */}
            <div className="border-t border-b w-full relative mt-12 flex items-center justify-center ">
              <div className="border-l border-r max-w-[1050px] w-full h-full relative ">
                <div className="overflow-hidden w-full h-full p-2 bg-[#f5f5f3]">
                  <div className="border p-2 rounded-xl">
                    <img src="/img_home.png" alt="" className="object-cover w-full rounded-lg select-none pointer-events-none" />
                  </div>
                </div>
                <div>
                  <div className="border border-gray-200 bg-white shadow shadow-slate-200 rounded-full size-3 absolute -top-[7px] -left-[6.5px] z-[1]">

                  </div>
                  <div className="h-[110px] w-[1px] absolute -top-28 -left-0 bg-gradient-to-t from-slate-200 to-white hidden lg:block">

                  </div>
                </div>
                <div>
                  <div className="border border-gray-200 bg-white shadow shadow-slate-200 rounded-full size-3 absolute -top-[7px] -right-[6.5px] z-[1]">

                  </div>
                  <div className="h-[110px] w-[1px] absolute -top-28 -right-0 bg-gradient-to-t from-slate-200 to-white">

                  </div>
                </div>

                <div className="border border-gray-200 bg-white shadow shadow-slate-200 rounded-full size-3 absolute -bottom-[7px] -left-[6.5px] ">

                </div>
                <div className="border border-gray-200 bg-white shadow shadow-slate-200 rounded-full size-3 absolute -bottom-[7px] -right-[6.5px] ">

                </div>
              </div>
              <div>
                <div className="border border-gray-200 bg-white shadow shadow-slate-200 rounded-full size-3 absolute -top-[7px] -left-[6.5px] z-[1]">

                </div>
                <div className="h-[1px] w-[110px] absolute -top-0.5 -left-28 bg-gradient-to-l from-slate-200 to-white hidden lg:block">

                </div>
              </div>
              <div>
                <div className="border border-gray-200 bg-white shadow shadow-slate-200 rounded-full size-3 absolute -top-[7px] -right-[6.5px] z-[1]">

                </div>
                <div className="h-[1px] w-[110px] absolute -top-0.5 -right-28 bg-gradient-to-r from-slate-200 to-white hidden lg:block">

                </div>
              </div>
              <div>
                <div className="border border-gray-200 bg-white shadow shadow-slate-200 rounded-full size-3 absolute -bottom-[7px] -left-[6.5px] z-[1]">

                </div>
                <div className="h-[1px] w-[110px] absolute -bottom-0.5 -right-28 bg-gradient-to-r from-slate-200 to-white hidden lg:block">

                </div>
              </div>
              <div>
                <div className="border border-gray-200 bg-white shadow shadow-slate-200 rounded-full size-3 absolute -bottom-[7px] -right-[6.5px] ">

                </div>
                <div className="h-[1px] w-[110px] absolute -bottom-0.5 -left-28 bg-gradient-to-l from-slate-200 to-white hidden lg:block">

                </div>
              </div>
            </div>
            <div className="h-[350px] w-full border-t border-b flex flex-col items-center justify-center">
              <p className="text-sm text-[#7a7a7a] font-mono">BUILT WITH</p>
              <div className="grid grid-cols-4 -space-y-3 gap-x-4 items-center justify-center">
                <div className="flex justify-center items-center">
                  <NextJS className="h-20 md:h-24 lg:h-28 aspect-square w-fit" />
                </div>
                <div className="flex justify-center items-center">
                  <Typescript className="h-8 md:h-8 lg:h-11 aspect-square w-fit" />
                </div>
                <div className="flex justify-center items-center">
                  <ReactQuery className="h-20 md:h-24 lg:h-28 aspect-square w-fit" />
                </div>
                <div className="flex justify-center items-center">
                  <Tailwind className="h-20 md:h-28 lg:h-32 aspect-square w-fit" />
                </div>
                <div className="flex justify-center items-center">
                  <Postgres className="h-10 md:h-12 lg:h-16 aspect-square w-fit" />
                </div>
                <div className="flex justify-center items-center">
                  <Redis className="h-10 md:h-12 lg:h-16 aspect-square w-fit" />
                </div>
                <div className="flex justify-center items-center">
                  <Docker className="h-12 md:h-12 lg:h-16 aspect-square w-fit" />
                </div>
                <div className="flex justify-center items-center">
                  <Aws className="h-14 md:h-16 lg:h-24 aspect-square w-fit" />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center py-16 ">
              <p className="font-mono text-[#7a7a7a] text-sm">FEATURES</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
                <div className=" bg-[#1e1e1edc] border rounded-xl overflow-hidden relative">
                  <img src="/img_links.png" alt="" className="object-contain w-[400px] translate-x-8 translate-y-5 rounded-md" />
                  <div className="bg-white w-full h-[80px] absolute bottom-0 px-4 py-4 overflow-hidden space-y-1">
                    <p className="font-medium tracking-tight">Links List</p>
                    <p className=" text-xs text-[#7a7a7a]">Manage your generated short links.</p>
                  </div>
                </div>
                <div className="  bg-[#1e1e1edc] border rounded-xl overflow-hidden relative">
                  <img src="/img_createlink.png" alt="" className="object-contain w-[400px] translate-x-8 translate-y-5 rounded-md" />
                  <div className="bg-white w-full h-[80px] absolute bottom-0 px-4 py-4 overflow-hidden space-y-1">
                    <p className="font-medium tracking-tight">Create Short Links</p>
                    <p className=" text-xs text-[#7a7a7a]">Create your shortlinks in seconds.</p>
                  </div>
                </div>
                <div className="  bg-[#1e1e1edc] border rounded-xl overflow-hidden relative">
                  <img src="/img_analytics.png" alt="" className="object-contain w-[400px] translate-x-8 translate-y-5 rounded-md" />
                  <div className="bg-white w-full h-[80px] absolute bottom-0 px-4 py-4 overflow-hidden space-y-1">
                    <p className="font-medium tracking-tight">Link Analytics</p>
                    <p className=" text-xs text-[#7a7a7a]">Analytics page for all your generated links.</p>
                  </div>
                </div>
                <div className="  bg-[#1e1e1edc] border rounded-xl overflow-hidden relative">
                  <img src="/img_qr.png" alt="" className="object-contain w-[400px] translate-x-8 translate-y-5 rounded-md" />
                  <div className="bg-white w-full h-[80px] absolute bottom-0 px-4 py-4 overflow-hidden space-y-1">
                    <p className="font-medium tracking-tight">QR Code</p>
                    <p className=" text-xs text-[#7a7a7a]">Auto-Generates QR Code for each Link.</p>
                  </div>
                </div>
                <div className="  bg-[#1e1e1edc] border rounded-xl overflow-hidden relative">
                  <video controls={false} muted loop autoPlay className="w-[400px] translate-x-8 translate-y-16 rounded-md">
                    <source src="/img_shortcode.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  <div className="bg-white w-full h-[80px] absolute bottom-0 px-4 py-4 overflow-hidden space-y-1">
                    <p className="font-medium tracking-tight">Custom Short Link</p>
                    <p className=" text-xs text-[#7a7a7a]">Generate your own custom shortlink or auto-generate it</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-full flex items-center justify-center bg-gray-100 py-16 border-b border-t">
              <div className="h-full w-full flex items-center justify-center flex-col">
                <div className="size-16 text-sm rounded-2xl bg-[#7a7a7a1b] text-black flex items-center justify-center ring-[#7a7a7a39] ring-1 ring-offset-4 ring-offset-gray-100 border border-[#7a7a7a78]">
                    <p className="font-semibold tracking-tight">club.url</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <span className="text-2xl font-semibold pt-4 pb-1">Get Started</span>
                  <p className="font-light text-sm pb-4 text-center px-4">Start using club.url as your new companion to short urls</p>
                  <a href="/signin" rel="">
                    <SignupButton name="Try now" type="primary"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthContainer>
            <Footer />
      </div>
    </>
  );
}
