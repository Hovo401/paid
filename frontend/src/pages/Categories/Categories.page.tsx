import { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer.component";
import Header from "../../components/header/Header.component";
import CategoriesCart from "./components/CategoriesCart.component";
import CategoriesSitebar from "./components/CategoriesSitebar.component";
import Person from "./components/Person.component";
import type { user } from "../../Types/user";

function Categories() {
  const [CategoriesSitebarOpen, setCategoriesSitebarOpen] = useState(false);

  const [userList, setUserList] = useState([
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
  ] as user[]);


  useEffect(() => {
    // Simulate fetching user data from an API
    const fetchUsers = async () => {
      // Here you would typically make an API call to fetch users
      // For this example, we are using a static user list
      setUserList([
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
        }
      ]);
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Header mode="sitebar" />

      <div className="max-w-full min-h-[1100px]  flex-grow flex  relative">
        <div
          className={`fixed top-[52px] inset-0 h-[200%]   transform duration-1000   md:hidden 
              ${
                CategoriesSitebarOpen
                  ? "bg-[rgba(0,0,0,.6)]"
                  : "bg-[rgba(0,0,0,0)] hidden "
              }  `}
          onClick={() => setCategoriesSitebarOpen(false)}
        />
        <div>
          <aside
            className={`absolute md:static w-[200px] pb-5  flex-none pl-[30px] pt-2 text_c_0 bg_c_1 transition-transform duration-300 mb-8 rounded-br-2xl z-20
            ${
              CategoriesSitebarOpen
                ? "translate-x-0"
                : "-translate-x-full md:translate-x-0"
            }
          `}
            onClick={(e) => e.stopPropagation()}
          >
            <CategoriesSitebar />
          </aside>
        </div>
        <main
          style={{ width: `calc(100% - 220px)` }}
          className="mx-[10px] flex-1/2 text_c_0 pl-3"
        >
          <div className="mt-20 flex  justify-between content-center">
            <h1 className="text_c_0 text-2xl font-bold">Categories</h1>
          </div>

          <div className="flex overflow-x-auto my-4 select-none  scrollbar-hide snap-x snap-mandatory">
            <CategoriesCart text="Sport" url="sport.png" />
            <CategoriesCart text="Sport" url="sport.png" />
            <CategoriesCart text="Sport" url="sport.png" />
            <CategoriesCart text="Sport" url="sport.png" />
            <CategoriesCart text="Sport" url="sport.png" />
            <CategoriesCart text="Sport" url="sport.png" />
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

          <div className="w-full flex flex-wrap mb-5 justify-center lg:justify-normal ">
            {
              userList.map((user) => (
                <Person
                  id={user.id ?? 0}
                  name={user.name ?? ""}
                  firstName={user.firstName ?? ""}
                  age={user.age}
                  rating={user.rating}
                  pricePerOneMessage={user.pricePerOneMessage}
                  hor={user.hor}
                  key={user.id ?? 0}
                  AvatarURL={user.AvatarURL}
                />
              ))
            }
            
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
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Categories;
