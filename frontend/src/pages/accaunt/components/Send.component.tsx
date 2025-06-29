import type { userDB } from '../../../Types/api.types';

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
        <h1 className="text_c_0 text-2xl font-bold">
          Send ({userDB?.send?.length ?? 0})
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
        <div className=" w-full flex p-2.5  flex-wrap flex-row justify-center gap-6">
          <div className=" flex-1 bg_c_1 t_c_1000 rounded-3xl p-2.5 min-w-[320px]  w-[80%] max-w-[600px] ">
            <div>
              {userDB &&
                userDB.send &&
                userDB.send
                  .slice()
                  .reverse()
                  .map((item) => {
                    return (
                      <>
                        <div className="  p-2.5 rounded-2xl my-1.5">
                          <p>
                            Name: {item.in.name} id: {item.in.id}
                          </p>
                          <p>Email: {item.in.email}</p>
                          <p>Subject: {item.subject}</p>
                          <p>Message: {item.message}</p>
                        </div>
                        <hr className="text-gray-300" />
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
export default Send;
