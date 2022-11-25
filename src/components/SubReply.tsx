import { faTrash } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "@mantine/core";
import React from "react";
import { useComment } from "../hooks/useComment";
import { useUser } from "../hooks/useUser";

const SubReply = ({ reply, parentComment }) => {
  const { deleteComment } = useComment();
  const { currentUser } = useUser();

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
        <div className="flex items-center">
          {currentUser?.uuid === reply?.user.uuid && (
            <button
              onClick={() =>
                deleteComment.mutate({
                  commentId: reply.uuid,
                })
              }
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubReply;
