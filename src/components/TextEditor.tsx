import React, { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useRefStore } from "../stores/useRefStore";
import { useSentiment } from "../hooks/useSentiment";
import {
  useDebouncedState,
  useDebouncedValue,
  useInterval,
  useTimeout,
} from "@mantine/hooks";

const TextEditor = ({ analyze }) => {
  const [value, setValue] = useDebouncedState("", 1000);

  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    editorProps: {
      attributes: {
        class: "h-full p-3",
      },
    },
    onUpdate({ editor }) {
      // The content has changed
      console.log(editor.getText());

      setValue(editor.getText());
    },
  });
  const { setCommentEditor } = useRefStore();

  useEffect(() => {
    setCommentEditor(editor);
  }, [editor]);

  useEffect(() => {
    if (value.length > 10) {
      analyze.mutate(value);
    }
  }, [value]);

  return (
    <EditorContent
      editor={editor}
      placeholder="Leave a comment"
      className="h-full"
    />
  );
};

export default TextEditor;
