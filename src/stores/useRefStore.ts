import create, { UseBoundStore, StoreApi } from "zustand";

import type { Editor } from "@tiptap/react";
interface RefStore {
  commentEditor: Editor | null;
  setCommentEditor: (editor: Editor) => void;
}

export const useRefStore = create<RefStore>((set) => ({
  commentEditor: null,
  setCommentEditor: (editor: any) =>
    set((state) => ({ commentEditor: editor })),
}));
