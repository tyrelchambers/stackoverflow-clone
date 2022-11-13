export interface User {
  uuid: String;
  email: String;
  password: String;
  createdAt: Date;
  updatedAt: Date;

  profile?: Profile;
  profileId?: String;
}

export interface Profile {
  uuid: String;
  username: String;
  firstName?: String;
  lastName?: String;
  avatar?: String;

  User: User;
}
