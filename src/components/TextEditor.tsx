import { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useRefStore } from "../stores/useRefStore";
import { useDebouncedState } from "@mantine/hooks";
import Placeholder from "@tiptap/extension-placeholder";

const TextEditor = ({ analyze, placeholder = "Leave a comment" }) => {
  const [value, setValue] = useDebouncedState("", 1000);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder,
      }),
    ],
    content: "",
    editorProps: {
      attributes: {
        class: "h-full p-3",
      },
    },
    onUpdate({ editor }) {
      // The content has changed

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

  return <EditorContent editor={editor} className="h-full" />;
};

export default TextEditor;
