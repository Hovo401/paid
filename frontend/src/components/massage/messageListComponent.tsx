import type { email } from '../../Types/api.types';

function MassageListComponent({
  emails,
  setOpenMassageID,
}: {
  emails: email[] ;
  setOpenMassageID: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <>
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
          <img src="static/search.svg" alt="Search icon" className="w-4 h-4" />
        </button>
      </div>

      <div className=" border-b border-gray-300 mt-2.5 ">
        {
          emails
            .slice()
            .reverse()
            .map((item, iRev, arr) => {
              const i = arr.length - 1 - iRev;
              return (
                <>
                  <div
                    onClick={() => {
                      setOpenMassageID(i);
                    }}
                    className=" hover:bg-[rgba(125,125,125,.2)] hover:cursor-pointer flex justify-between  border-t p-1 border-gray-300   "
                  >
                    <div className="flex-2 flex flex-col justify-between">
                      <div className="flex gap-2">
                        <input type="checkbox" />
                        <p>{item.in.name}</p>
                      </div>
                      <p>{item.subject}</p>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <p className="text-sm text-gray-500">Linkdin</p>
                    </div>
                    <div className="flex-1 flex flex-col justify-between items-end gap-1">
                      <p className="text-sm text-gray-500">09.Dec.2022 09:28</p>
                      <p className="text-[20px] font-bold">$ 5.99</p>
                    </div>
                  </div>
                </>
              );
            })}
      </div>
    </>
  );
}

export default MassageListComponent;
