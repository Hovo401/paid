import Footer from "../../components/footer/Footer.component";
import Header from "../../components/header/Header.component";

function Categories() {
  return (
    <>
      <Header mode="sitebar" />

      <div className="w-[100%] flex-grow min-h-[500px]">
        <aside className="w-[200px] bg_c_1 h-[500px] absolute top-[0px] left-0 z-2 rounded-r-2xl">
          <p className="text-text_c_0-light dark:text-text_c_0-dark text-center text-2xl pt-3 font-bold">
            Paid Email
          </p>
          <div className="flex flex-col  justify-center mt-5">
            <div></div>
          </div>
        </aside>
        <main className="ml-[210px] bg-amber-400">
          <h1 className="text-center text-2xl mt-5 font-bold text-text_c_0-light dark:text-text_c_0-dark">
            Categories
          </h1>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Categories;
