import withAuth from "@/components/with-auth";

const ProtectedExamplePage = () => {
  return <div>This is protected page. User should be authenticated.</div>;
};

export default withAuth(ProtectedExamplePage);
