import { Title } from "@mantine/core";
import { Link } from "@tanstack/react-location";
import React from "react";
import { useUser } from "../../hooks/useUser";
import DashHeader from "../../layouts/DashHeader";

const ProfileIndex = () => {
  const { currentUser } = useUser();

  if (!currentUser) return null;

  return (
    <main>
      <DashHeader />
      <div className="max-w-screen-xl ml-auto mr-auto">
        <section className="my-10">
          <div className="h-[250px] relative rounded-3xl overflow-hidden profile-banner">
            <img src="https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />

            <section className="absolute z-10 inset-10  flex items-center">
              <div className="flex flex-col flex-1 w-full ">
                <Title order={2} className="text-white">
                  Hey ask a question!
                </Title>
                <p className="mt-2 text-gray-300 max-w-xl">
                  I'm baby banjo offal deep v food truck fam thundercats,
                  actually whatever. Green juice yuccie church-key prism,
                  portland same cray. Austin bushwick vice meggings air plant
                  bicycle rights pour-over neutra sustainable.{" "}
                </p>
              </div>
              <Link to="/question/new" className="block mt-10 text-white">
                Ask a question
              </Link>
            </section>
          </div>
        </section>

        <section className="grid grid-cols-2">
          <div className="flex flex-col bg-zinc-50 dark:bg-zinc-800 rounded-3xl p-6">
            <Title order={2}>Recent questions</Title>

            <ul className="mt-6 ">
              {currentUser.questions.map((q) => (
                <li>
                  <Link to={`/question/${q.uuid}`}>{q.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProfileIndex;
