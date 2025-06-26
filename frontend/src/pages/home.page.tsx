import Header from "../components/header/Header.component";
import Footer from "../components/footer/Footer.component";

function Home() {
  return (
    <>
      <Header />

      <main className="w-[100%] flex-grow ">
        <div className=" flex flex-col justify-center md:justify-normal md:flex-row m-auto my-[30px] py-[16px] px-[8px] w-[90%]  rounded-[16px] bg_c_1">
          <div className=" text-text_c_0-light dark:text-text_c_0-dark order-2 md:order-none flex-1/2 p-10 md:pt-30 md:pb-50 flex flex-col justify-between">
            <h2 className="text-[30px] font-bold mb-2">
              Lorem Ipsum is simply dummy text of the{" "}
            </h2>
            <p className="max-w-90 mb-5">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and{" "}
            </p>
            <button className="main_color max-w-[150px]  text-white rounded-full px-4 py-2">
              LABEL
            </button>
          </div>
          <div className="flex flex-1/2 order-1 lg:order-none items-center justify-center lg:w-[50%] ">
            <img
              src="Messages-amico.svg"
              className="w-[100%] max-w-[550px] min-w-[300px] "
              alt=""
            />
          </div>
        </div>
        <div>
          <h2 className="text-text_c_0-light dark:text-text_c_0-dark text-[30px] font-bold text-center">
            How It Works
          </h2>
        </div>
        <div className="w-[100%] flex justify-center gap-15 mt-10 mb-20 flex-wrap text-white  ">
          <div className="bg-[#1E3A8A] p-8 w-[300px] h-[300px] rounded-2xl bg-gradient-to-br from-[#868CFF] to-[#4318FF]">
            <img className="w-[60px] m-auto pb-5" src="Group.svg" alt="" />
            <h3 className="text-center text-3xl mb-3">Registration</h3>
            <p>
              Register to set up your terms, i.e. fee, reply time, visability,
              charity organization (optional) etc. and get a link.
            </p>
          </div>
          <div className="bg-[#1E3A8A] p-8 w-[300px] h-[300px] rounded-2xl bg-gradient-to-br from-[#868CFF] to-[#4318FF]">
            <img className="w-[60px] m-auto pb-5" src="Group2.svg" alt="" />
            <h3 className="text-center text-3xl mb-3">Announce</h3>
            <p>
              Register to set up your terms, i.e. fee, reply time, visability,
              charity organization (optional) etc. and get a link.
            </p>
          </div>
          <div className="bg-[#1E3A8A] p-8 w-[300px] h-[300px] rounded-2xl bg-gradient-to-br from-[#868CFF] to-[#4318FF]">
            <img className="w-[60px] m-auto pb-5" src="Group3.svg" alt="" />
            <h3 className="text-center text-3xl mb-3">Message</h3>
            <p>
              Register to set up your terms, i.e. fee, reply time, visability,
              charity organization (optional) etc. and get a link.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Home;
