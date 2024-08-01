import Header from "../components/Header/Header.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";

function HomeLayout({ children }) {
  return (
    <>
      <Header />
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 p-8  lg:ml-72 bg-slate-50 shadow-md top-16 overflow-auto">
          {children}
        </main>
      </div>
    </>
  );
}

export default HomeLayout;
