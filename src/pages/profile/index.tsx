import React from "react";
import { useUser } from "../../hooks/useUser";
import DashHeader from "../../layouts/DashHeader";

const ProfileIndex = () => {
  const { currentUser } = useUser();

  if (!currentUser) return null;

  return (
    <main>
      <DashHeader />
    </main>
  );
};

export default ProfileIndex;
