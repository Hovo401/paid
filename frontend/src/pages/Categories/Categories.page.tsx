import { useState, useEffect } from 'react';
import Footer from '../../components/footer/Footer.component';
import Header from '../../components/header/Header.component';
import CategoriesCart from './components/CategoriesCart.component';
import CategoriesSitebar from './components/CategoriesSitebar.component';
import Person from './components/Person.component';
import type { userDB } from '../../Types/api.types';
import api from '../../api/api';

function Categories() {
  const [CategoriesSitebarOpen, setCategoriesSitebarOpen] = useState(false);

  const [userList, setUserList] = useState([] as userDB[]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await api.get<userDB[]>(`/users`);
      setUserList(users.data);
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
                  ? 'bg-[rgba(0,0,0,.6)]'
                  : 'bg-[rgba(0,0,0,0)] hidden '
              }  `}
          onClick={() => setCategoriesSitebarOpen(false)}
        />
        <div>
          <aside
            className={`absolute md:static w-[200px] pb-5  flex-none pl-[30px] pt-2 text_c_0 bg_c_1 transition-transform duration-300 mb-8 rounded-br-2xl z-20
            ${
              CategoriesSitebarOpen
                ? 'translate-x-0'
                : '-translate-x-full md:translate-x-0'
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
                  CategoriesSitebarOpen ? 'underline' : ''
                }`}
              >
                Filters
              </button>
            </div>
          </div>

          <div className="w-full flex flex-wrap mb-5 justify-center lg:justify-normal ">
            {userList.map((user) => (
              <Person
                id={user.id ?? 0}
                name={user.name ?? ''}
                firstName={user.firstName ?? ''}
                age={user.age}
                rating={user.rating}
                pricePerOneMessage={user.pricePerOneMessage}
                hor={user.hor}
                key={user.id ?? 0}
                avatarURL={user.avatarURL}
              />
            ))}
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
