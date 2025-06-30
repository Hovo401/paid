import type { userDB } from '../../../Types/api.types';

function Inbox({
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
        <h1 className="text_c_0 text-2xl font-bold">
          Inbox ({userDB?.inbox?.length ?? 0})
        </h1>
      </div>

      <div className="w-full flex justify-end content-center flex-wrap mb-5 mt-5 ">
        <div>
          <button
            onClick={() => setCategoriesSitebarOpen(!CategoriesSitebarOpen)}
            className={` w-[120px] py-1 cursor-pointer bg_c_2 rounded-lg outline-none select-none md:hidden  font-bold ${
              CategoriesSitebarOpen ? 'underline' : ''
            }`}
          >
            Filters
          </button>
        </div>
      </div>

      <div className="w-full ">
        <div className=" w-full flex   flex-wrap flex-row justify-center gap-6">
          <div className=" flex-1 bg_c_1 t_c_1000 rounded-3xl p-5 min-w-[320px]  w-[80%] max-w-[600px] ">
            <div className="relative flex items-center">
              <input
                type="search"
                placeholder="Search"
                className="pl-10 pr-2 py-1.5 h-[30px] bg_c_3 t_c_1000 rounded-ful text_c_0 w-48 rounded-2xl  text-sm placeholder-[#9CA3AF] focus:outline-none"
                aria-label="Search"
              />
              <button
                type="submit"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer p-0"
                aria-label="Submit search"
              >
                <img src="search.svg" alt="Search icon" className="w-4 h-4" />
              </button>
            </div>

            <div className=" border-b border-gray-300 mt-2.5 ">
              {userDB &&
                userDB.inbox &&
                userDB.inbox
                  .slice()
                  .reverse()
                  .map((item) => {
                    return (
                      <>
                        <div className="  t_c_1000 border-t py-2.5 border-gray-300   ">
                          <p>
                            Name: {item.in.name} id: {item.in.id}
                          </p>
                          <p>Email: {item.in.email}</p>
                          <p>Subject: {item.subject}</p>
                          <p>Message: {item.message}</p>
                        </div>
                      </>
                    );
                  })}
            </div>
          </div>
          <div className="flex-1 bg_c_1 t_c_1000 rounded-3xl min-w-[320px] w-[80%] p-2.5 max-w-[600px]">
            item2
          </div>
        </div>
      </div>
    </>
  );
}
export default Inbox;
