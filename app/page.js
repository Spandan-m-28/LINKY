"use client";
import Image from "next/image";
import { useState } from "react";
import { toast, Bounce, ToastContainer } from "react-toastify";
import Router from "next/router";
import Link from "next/link";

export default function Home() {
  const [url, seturl] = useState("");
  const [subdomain, setsubdomain] = useState("");
  const [newurl, setNewurl] = useState("");
  const [forwardUrl, setforwardUrl] = useState("")

  const handleurlChange = (e) => {
    seturl(e.target.value);
  };

  const handledomainChange = (e) => {
    setsubdomain(e.target.value);
  };

  const handleGenerate = async () => {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, subdomain }),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success("URL Generated Successfully");
      setNewurl(`${process.env.NEXT_PUBLIC_URI}/${data.subdomain}`);
      setforwardUrl(data.url);
      console.log(newurl);
    } else {
      toast.error("SubDomain already exists");
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <main className="grid grid-cols-1 md:grid-cols-2 min-h-[94vh]">
        <div className="hidden md:block mx-auto my-auto">
        <div className="sec flex justify-center items-center">
          <Image
            src="https://res.cloudinary.com/dmeicehn2/image/upload/v1738244599/dqlan2uf1moqnhijca1p.svg"
            width={600}
            height={600}
            alt="Img"
          />
        </div>
        </div>
        <div className="first flex justify-center items-center">
          <div className="flex flex-col w-[90%] md:w-1/2 h-2/5 justify-center items-center rounded-2xl shadow-lg bg-white p-10 gap-6 md:mr-40 mb-24 md:mb-40">
            <h5 className="cursor-pointer mb-2 text-4xl font-bold tracking-tight text-black">
              LINKY
            </h5>
            <input
              onChange={handleurlChange}
              className="h-11 rounded-lg border-gray-300 px-4 py-2 border-2 md:w-80 w-[97%]"
              type="text"
              placeholder="Enter your link"
            />
            <input
              onChange={handledomainChange}
              className="h-11 rounded-lg border-gray-300 px-4 py-2 border-2 md:w-80 w-[97%]"
              type="text"
              placeholder="Enter your sub domain"
            />
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={handleGenerate}
                className="relative overflow-hidden rounded-[20px] border-none bg-gradient-to-r from-[#0400ff] to-[#4ce3f7] bg-[length:100%_auto] px-6 py-2 text-[17px] text-white transition-all duration-300 hover:bg-[length:200%_auto] animate-pulse512"
              >
                Generate
              </button>
            </div>

            {newurl && <code>Your Link: <Link target="_blank" href={forwardUrl} >{newurl}</Link></code>}
          </div>
        </div>
      </main>
    </>
  );
}
