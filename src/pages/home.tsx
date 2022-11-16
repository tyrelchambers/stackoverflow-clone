import { Divider, Title } from "@mantine/core";
import { Link } from "@tanstack/react-location";
import React from "react";
import Header from "../layouts/Header";
export default function Home() {
  return (
    <section className="max-w-screen-2xl ml-auto mr-auto ">
      <Header />

      <section className="h-[400px] flex items-center justify-center bg-gray-800 rounded-3xl shadow-2xl border-rose-400 border-8 mt-20 mb-20">
        <div className="flex flex-col max-w-2xl items-center">
          <Title className="text-5xl text-gray-100 text-center">
            Asking questions. Made easy.
          </Title>

          <p className="text-gray-400 leading-loose my-10 text-center text-xl">
            We're gunna guess you entered the second page of your Google search
            and StackOverflow was on fire. Welcome, we're glad you're here!{" "}
          </p>

          <div className="flex w-full gap-4">
            <Link
              to="/"
              className=" max-w-sm w-full p-4 rounded-full text-center border-2 border-gray-700 text-white font-normal block"
            >
              Login
            </Link>
            <Link
              to="/question/new"
              className=" max-w-sm w-full p-4 rounded-full text-center bg-rose-400 text-white font-normal shadow-lg  block"
            >
              Ask a question!
            </Link>
          </div>
        </div>
      </section>

      <Title order={2} className="text-center text-4xl text-gray-400 mb-20">
        Ask questions without feeling like a total failure.
      </Title>
    </section>
  );
}
