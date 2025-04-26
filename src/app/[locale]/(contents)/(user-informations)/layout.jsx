import { UserProfileSidebar } from "@/components/user/user-profile-sidebar";

const UserInformationsLayout = ({ children }) => {
  return (
    <section className="mt-16 container mx-auto pb-24 flex gap-20">
      <UserProfileSidebar />
      {children}
    </section>
  );
};

export default UserInformationsLayout;
