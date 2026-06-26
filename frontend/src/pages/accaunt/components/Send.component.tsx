import type { userDB } from '../../../Types/api.types';
import MassageComponent from '../../../components/massage/MassageComponent';
import MessageListComponent from '../../../components/massage/messageListComponent';
import { useState, type Dispatch, type SetStateAction } from 'react';

function Send({
  setCategoriesSitebarOpen,
  CategoriesSitebarOpen,
  userDB,
}: {
  userDB: userDB | null;
  setCategoriesSitebarOpen: Dispatch<SetStateAction<boolean>>;
  CategoriesSitebarOpen: boolean;
}) {
  const [openMassageID, setOpenMassageID] = useState(-1);
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
        <div className=" w-full flex   flex-wrap flex-row justify-center gap-6">
          <div className=" flex-1 bg_c_1 t_c_1000 rounded-3xl p-5 min-w-[320px]  w-[80%]  ">
            {openMassageID === -1 ? (
              <MessageListComponent
                setOpenMassageID={setOpenMassageID}
                emails={userDB?.send ?? []}
              />
            ) : (
              <MassageComponent
                emails={userDB?.send ?? []}
                setOpenMassageID={setOpenMassageID}
                openMassageID={openMassageID}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Send;
