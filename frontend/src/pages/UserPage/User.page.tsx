import Footer from "../../components/footer/Footer.component";
import Header from "../../components/header/Header.component";
import { useSearchParams } from "react-router-dom";

const userList = [
  {
    id: 1,
    name: "Ruben",
    firstName: "Titanyan",
    age: 24,
    Bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    AvatarURL: "pers1.png",
    rating: 4.5,
    pricePerOneMessage: 19.99,
    location: "Yerevan, Armenia",
    profession: "Actor",
    hor: 1,
  },
  {
    id: 2,
    name: "Anna",
    firstName: "Petrosyan",
    age: 22,
    Bio: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    AvatarURL: "pers2.png",
    rating: 4.7,
    pricePerOneMessage: 15.99,
    location: "Yerevan, Armenia",
    profession: "Singer",
    hor: 2,
  },
  {
    id: 3,
    name: "Aram",
    firstName: "Sargsyan",
    age: 30,
    Bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    AvatarURL: "pers1.png",
    rating: 4.8,
    pricePerOneMessage: 25.99,
    location: "Yerevan, Armenia",
    profession: "Director",
    hor: 3,
  },
  {
    id: 4,
    name: "Lilit",
    firstName: "Grigoryan",
    age: 28,
    Bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    AvatarURL: "pers2.png",
    rating: 4.6,
    pricePerOneMessage: 18.99,
    location: "Yerevan, Armenia",
    profession: "Model",
    hor: 1,
  },
  {
    id: 5,
    name: "Ania",
    firstName: "Grigoryan",
    age: 28,
    Bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    AvatarURL: "pers2.png",
    rating: 4.6,
    pricePerOneMessage: 18.99,
    location: "Yerevan, Armenia",
    profession: "Model",
    hor: 1,
  },
];

function UserPage() {
  const [searchParams] = useSearchParams();
  const id = +(searchParams.get("id") ?? -1);
  const user = userList.filter((e) => e.id === id)[0];

  return (
    <>
      <Header />

      <main className="mx-[10px]  flex-grow  text_c_0 pt-8 pl-3 mb-10">
        <div className="text-[16px]">
          <span>Home</span>
          <span className="mx-1">&gt;</span>
          <span className="font-bold">Sport</span>
          <span className="mx-1">&gt;</span>
          <span className="font-bold">
            {user.name} {user.firstName} id={id}
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-center  mt-3">
          <div className=" mx-auto ">
            <div className="w-[270px]  mr-2  rounded-3xl p-2.5 bg_c_1 mb-5">
              <div>
                <img
                  src={user.AvatarURL}
                  className="w-full h-full object-cover rounded-2xl"
                  alt=""
                />
              </div>
              <div>
                <p className="text-[20px]">
                  {user.name} {user.firstName}
                </p>
                <p className="text-gray-400"> {user.profession}</p>
                <p>{user.location}</p>
                <p>hor : {user.hor}</p>
                <p>rating : {user.rating}</p>
                <p>age : {user.age}</p>
                <button className="main_color text-white cursor-pointer h-8 w-full mt-4 rounded-2xl">
                  Message ${user.pricePerOneMessage}
                </button>
              </div>
            </div>
          </div>
          <div className=" md:w-[50%] m-auto   ">
            <div className="bg_c_1 p-5 rounded-3xl mb-5">
              <p className="font-bold text-[20px]">Bio</p>
              <p className="mt-3">{user.Bio}</p>
            </div>

            <div className="bg_c_1 p-5 rounded-3xl mb-5">
              <p className="font-bold text-[20px]">How It Works</p>
              <div className="flex flex-wrap justify-center md:justify-between text-[12px] ">
                <div className=" p-8 w-[200px]  rounded-2xl ">
                  <img
                    className="w-[60px] m-auto pb-5"
                    src="Group.svg"
                    alt=""
                  />
                  <h3 className="text-center text-3xl mb-3">Registration</h3>
                  <p className="text-gray-400">
                    Register to set up your terms, i.e. fee, reply time,
                    visability, charity organization (optional) etc. and get a
                    link.
                  </p>
                </div>
                <div className=" p-8 w-[200px] rounded-2xl ">
                  <img
                    className="w-[60px] m-auto pb-5"
                    src="Group2.svg"
                    alt=""
                  />
                  <h3 className="text-center text-3xl mb-3">Announce</h3>
                  <p className="text-gray-400">
                    Register to set up your terms, i.e. fee, reply time,
                    visability, charity organization (optional) etc. and get a
                    link.
                  </p>
                </div>
                <div className=" p-8 w-[200px]  rounded-2xl">
                  <img
                    className="w-[60px] m-auto pb-5"
                    src="Group3.svg"
                    alt=""
                  />
                  <h3 className="text-center text-3xl mb-3">Message</h3>
                  <p className="text-gray-400">
                    Register to set up your terms, i.e. fee, reply time,
                    visability, charity organization (optional) etc. and get a
                    link.
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-[500px] m-auto">
              <div>
                <p className="text-center">FAQ</p>
              </div>
              <div>
                <div className="bg_c_1 t_c_1000 flex justify-between  p-2.5 px-5 rounded-2xl my-3">
                  <p>What’s up</p>
                  <img src="barIcon.svg" alt="" />
                </div>
                <div className="bg_c_1 t_c_1000 flex justify-between  p-2.5 px-5 rounded-2xl my-3">
                  <p>What’s up</p>
                  <img src="barIcon.svg" alt="" />
                </div>
                <div className="bg_c_1 t_c_1000 flex justify-between  p-2.5 px-5 rounded-2xl my-3">
                  <p>What’s up</p>
                  <img src="barIcon.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default UserPage;
