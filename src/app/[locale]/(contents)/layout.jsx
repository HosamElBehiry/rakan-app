import { Header } from "@/components/layout/header";

const ContentLayout = ({ children }) => {
  return (
    <main className="min-h-screen bg-light-dark relative">
      <Header />
      {children}
    </main>
  );
};

export default ContentLayout;
