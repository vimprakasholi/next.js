import UsersTable from "./_components/Table";

const UserManagement = () => {
  return (
    <div className="px-4 mx-auto max-w-screen">
      <h2 className="text-gray-800 dark:text-white mb-5 text-2xl font-semibold">
        User Management
      </h2>
      <UsersTable />
    </div>
  );
};

export default UserManagement;
