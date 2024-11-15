import { Outlet } from "react-router-dom";
import Header from "../Component/Header";
import LatestNews from "../Component/LatestNews";
import LeftNavbar from "../Component/mainLayoutComponent/LeftNavbar";
import RightNavBar from "../Component/mainLayoutComponent/RightNavBar";
import Navbar from "../Component/Navbar";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
      </header>

      <section className="w-11/12 mx-auto">
        <LatestNews></LatestNews>
      </section>

      <nav className="w-11/12 mx-auto p-4">
        <Navbar></Navbar>
      </nav>

      <main className="w-11/12 mx-auto pt-5 grid grid-cols-12">
        <aside className="left col-span-3">
            <LeftNavbar></LeftNavbar>
        </aside>

        <section className="col-span-6">
            <Outlet></Outlet>
        </section>

        <aside className="right col-span-3">
            <RightNavBar></RightNavBar>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
