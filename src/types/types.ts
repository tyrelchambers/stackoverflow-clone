import { Comment, User, Profile } from "@api/prisma/types";

export interface ProfileType extends User {
  profile?: Profile;
}

export interface CommentType extends Comment {
  user?: User;
}

export enum VOTE {
  UP = "UP",
  DOWN = "DOWN",
}
