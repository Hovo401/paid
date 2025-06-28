import type { userDB } from '../../../Types/api.types';

function AccauntComponent({
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
        <h1 className="text_c_0 text-2xl font-bold">Accaunt</h1>
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
              CategoriesSitebarOpen ? 'underline' : ''
            }`}
          >
            Filters
          </button>
        </div>
      </div>
      <h2>id: {userDB?.id}</h2>

      <div className=" mx-auto ">
        <div className="w-[270px]  mr-2  rounded-3xl p-2.5 bg_c_1 mb-5">
          <div className="min-h-[180px]">
            <img
              src={userDB?.avatarURL}
              className="w-full h-full object-cover rounded-2xl"
              alt=""
            />
          </div>
          <div>
            <p className="text-[20px]">
              {userDB?.name} {userDB?.firstName}
            </p>
            <p className="text-gray-400"> {userDB?.profession}</p>
            <p>{userDB?.location}</p>
            <p>Email: {userDB?.email}</p>
            <p>hor : {userDB?.hor}</p>
            <p>rating : {userDB?.rating}</p>
            <p>age : {userDB?.age}</p>
          </div>
        </div>
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
export default AccauntComponent;
