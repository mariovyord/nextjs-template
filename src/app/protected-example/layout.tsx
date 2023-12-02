import withAuth from "@/components/with-auth";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default withAuth(ProtectedLayout);
