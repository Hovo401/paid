import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, NavLink } from 'react-router-dom';
import Footer from '../../components/footer/Footer.component';
import Header from '../../components/header/Header.component';
import AccauntComponent from './components/Accaunt.component';
import Indbox from './components/Inbox.component';
import Send from './components/Send.component';
import Draf from './components/Draf.component';
import Finance from './components/Finance.component';
import Settings from './components/Settings.component';
import api from '../../api/api';
import type { userDB } from '../../Types/api.types';

function MainAccaunt() {
  const [CategoriesSitebarOpen, setCategoriesSitebarOpen] = useState(false);
  const [userDB, setUserDB] = useState<null | userDB>(null);

  useEffect(() => {
    const fetch = async () => {
      const res = await api.get('/auth/profile');
      res.data.inbox = JSON.parse(res.data.inbox);
      res.data.draft = JSON.parse(res.data.draft);
      res.data.send = JSON.parse(res.data.send);
      const data: userDB = res.data;
      console.log(res.data);
      setUserDB(data);
    };
    fetch();
  }, []);

  return (
    <>
      <Header mode="sitebar" />
      <div className="flex-grow">
        <div className="max-w-full mb-8 flex relative">
          <div
            className={`fixed top-[52px] inset-0 h-[200%] transform duration-1000 md:hidden 
              ${
                CategoriesSitebarOpen
                  ? 'bg-[rgba(0,0,0,.6)]'
                  : 'bg-[rgba(0,0,0,0)] hidden'
              }`}
            onClick={() => setCategoriesSitebarOpen(false)}
          />
          <aside
            className={`absolute md:static w-[200px] pb-5 min-h-full flex-none pl-[30px] pt-2 text_c_0 bg_c_1 transition duration-300 rounded-br-3xl z-20
              ${
                CategoriesSitebarOpen
                  ? 'translate-x-0'
                  : '-translate-x-full md:translate-x-0'
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mt-15 select-none text-[#A3AED0]">
              <NavLink
                to="/accaunt"
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 my-4 cursor-pointer hover:underline ${
                    isActive ? 'text-[#11047A] dark:text-[#552FFF]' : ''
                  }`
                }
                onClick={() => setCategoriesSitebarOpen(false)}
              >
                <img
                  src="static/personIcon.svg"
                  className="w-[18px] h-[18px]"
                  alt="Иконка аккаунта"
                />
                <p>Accaunt</p>
              </NavLink>
              <NavLink
                to="/accaunt/inbox"
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 my-4 cursor-pointer hover:underline ${
                    isActive ? 'text-[#11047A] dark:text-[#552FFF]' : ''
                  }`
                }
                onClick={() => setCategoriesSitebarOpen(false)}
              >
                <img
                  src="static/inbox.svg"
                  className="w-[18px] h-[18px]"
                  alt="Иконка входящих"
                />
                <p>Inbox</p>
              </NavLink>
              <NavLink
                to="/accaunt/send"
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 my-4 cursor-pointer hover:underline ${
                    isActive ? 'text-[#11047A] dark:text-[#552FFF]' : ''
                  }`
                }
                onClick={() => setCategoriesSitebarOpen(false)}
              >
                <img
                  src="static/send.svg"
                  className="w-[18px] h-[18px]"
                  alt="Иконка отправленных"
                />
                <p>Send</p>
              </NavLink>
              <NavLink
                to="/accaunt/draft"
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 my-4 cursor-pointer hover:underline ${
                    isActive ? 'text-[#11047A] dark:text-[#552FFF]' : ''
                  }`
                }
                onClick={() => setCategoriesSitebarOpen(false)}
              >
                <img
                  src="static/draft.svg"
                  className="w-[18px] h-[18px]"
                  alt="Иконка черновиков"
                />
                <p>Draft</p>
              </NavLink>
              <NavLink
                to="/accaunt/finance"
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 my-4 cursor-pointer hover:underline ${
                    isActive ? 'text-[#11047A] dark:text-[#552FFF]' : ''
                  }`
                }
                onClick={() => setCategoriesSitebarOpen(false)}
              >
                <img
                  src="static/finance.svg"
                  className="w-[18px] h-[18px]"
                  alt="Иконка финансов"
                />
                <p>Finance</p>
              </NavLink>
              <NavLink
                to="/accaunt/settings"
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 my-4 cursor-pointer hover:underline ${
                    isActive ? 'text-[#11047A] dark:text-[#552FFF]' : ''
                  }`
                }
                onClick={() => setCategoriesSitebarOpen(false)}
              >
                <img
                  src="static/personIcon.svg"
                  className="w-[18px] h-[18px]"
                  alt="Иконка настроек"
                />
                <p>Settings</p>
              </NavLink>
            </div>
          </aside>
          <main
            style={{ width: `calc(100% - 220px)` }}
            className="mx-[10px] flex-1/2 text_c_0 pl-3"
          >
            <Routes>
              <Route
                index
                element={
                  <AccauntComponent
                    CategoriesSitebarOpen={CategoriesSitebarOpen}
                    setCategoriesSitebarOpen={setCategoriesSitebarOpen}
                    userDB={userDB}
                  />
                }
              />
              <Route
                path="inbox"
                element={
                  <Indbox
                    CategoriesSitebarOpen={CategoriesSitebarOpen}
                    setCategoriesSitebarOpen={setCategoriesSitebarOpen}
                    userDB={userDB}
                  />
                }
              />
              <Route
                path="send"
                element={
                  <Send
                    CategoriesSitebarOpen={CategoriesSitebarOpen}
                    setCategoriesSitebarOpen={setCategoriesSitebarOpen}
                    userDB={userDB}
                  />
                }
              />
              <Route
                path="draft"
                element={
                  <Draf
                    CategoriesSitebarOpen={CategoriesSitebarOpen}
                    setCategoriesSitebarOpen={setCategoriesSitebarOpen}
                  />
                }
              />
              <Route
                path="finance"
                element={
                  <Finance
                    CategoriesSitebarOpen={CategoriesSitebarOpen}
                    setCategoriesSitebarOpen={setCategoriesSitebarOpen}
                  />
                }
              />
              <Route
                path="settings"
                element={
                  <Settings
                    CategoriesSitebarOpen={CategoriesSitebarOpen}
                    setCategoriesSitebarOpen={setCategoriesSitebarOpen}
                  />
                }
              />
              <Route path="*" element={<Navigate to="/accaunt" replace />} />
            </Routes>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MainAccaunt;
