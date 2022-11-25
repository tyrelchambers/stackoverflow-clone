import { Avatar } from "@mantine/core";
import React from "react";

const SubReply = ({ reply, parentComment }) => {
  return (
    <div className="flex w-11/12 gap-4 rounded-lg border-[1px] border-gray-200  p-3 dark:border-gray-700 ">
      <header>
        <Avatar radius="xl" />
      </header>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-gray-400">
          {reply.user.profile.username}{" "}
          <span className="italic">
            replying to {parentComment.user.profile.username}
          </span>
        </p>
        <p className="whitespace-pre">{reply.body}</p>
      </div>
    </div>
  );
};

export default SubReply;
