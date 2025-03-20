import { UserButton } from "@clerk/nextjs";

const AdminHeader = () => {
  return (
    <header className="h-16 sticky top-0 bg-white shadow flex justify-between items-center px-6 border-b-2">
      <h1 className="text-lg font-semibold">Admin Panel</h1>

      <UserButton
        afterSwitchSessionUrl="/"
        appearance={{
          elements: {
            avatarBox: {
              width: "40px",
              height: "40px",
            },
          },
        }}
      />
    </header>
  );
};

export default AdminHeader;
