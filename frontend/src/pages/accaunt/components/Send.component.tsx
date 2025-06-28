import type { userDB } from "../../../Types/api.types";

function Send({
  setCategoriesSitebarOpen,
  CategoriesSitebarOpen,
  userDB,
}: {
  userDB: userDB | null;
  setCategoriesSitebarOpen: any;
  CategoriesSitebarOpen: any;
}) {
    return (
      <>
        <div className="mt-20 flex  justify-between content-center">
          <h1 className="text_c_0 text-2xl font-bold">Send</h1>
        </div>
  
        <div className="w-full flex justify-between content-center flex-wrap mb-5 mt-5 ">
          <div>
            <button
              type="submit"
              className="w-[120px] py-1 cursor-pointer bg_c_2 rounded-lg outline-none select-none   font-bold"
            >
              Send
            </button>
          </div>
          <div>
            <button
              onClick={() => setCategoriesSitebarOpen(!CategoriesSitebarOpen)}
              className={` w-[120px] py-1 cursor-pointer bg_c_2 rounded-lg outline-none select-none md:hidden  font-bold ${
                CategoriesSitebarOpen ? "underline" : ""
              }`}
            >
              Filters
            </button>
          </div>
        </div>


        <div>
        {userDB &&
          userDB.send &&
          userDB.send.map((item) => {
            return (
              <>
                <div className="bg_c_1 w-[50%] p-2.5 rounded-2xl my-2">
                  <p>
                    {item.in.name} {item.in.id}
                  </p>
                  <p>{item.in.email}</p>
                  <p>{item.subject}</p>
                  <p>{item.message}</p>
                </div>
              </>
            );
          })}
      </div>
  
        <div className="w-full flex  mb-5 mt-5 ">
          <div>
            <button
              type="submit"
              className=" py-1 px-2 cursor-pointer main_color text-white rounded-lg  outline-none select-none"
            >
              Send
            </button>
          </div>
          <div className="w-full flex justify-center ">
            <button
              type="submit"
              className="w-[150px] py-1 px-2 cursor-pointer  bg_c_2 rounded-lg  outline-none select-none"
            >
              More
            </button>
          </div>
        </div>
      </>
    );
  }
  export default Send;
  