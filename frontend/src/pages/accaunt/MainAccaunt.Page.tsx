import { useEffect, useState } from 'react';
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

type accauntPages =
  | 'Accaunt'
  | 'Inbox'
  | 'Send'
  | 'Draft'
  | 'Finance'
  | 'Settings';

function MainAccaunt() {
  const [CategoriesSitebarOpen, setCategoriesSitebarOpen] = useState(false);
  const [activePage, setActivePage] = useState('Accaunt' as accauntPages);
  const [userDB, setUserDB] = useState(null as null | userDB);

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
        <aside
          className={`absolute md:static w-[200px] pb-5 min-h-full  flex-none pl-[30px] pt-2 text_c_0 bg_c_1 transition-transform duration-300 mb-8 rounded-br-2xl z-20
            ${
              CategoriesSitebarOpen
                ? 'translate-x-0'
                : '-translate-x-full md:translate-x-0'
            }
          `}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mt-15 select-none">
            <div
              onClick={() => setActivePage('Accaunt')}
              className="flex items-center gap-3 my-4 cursor-pointer hover:underline"
            >
              <img src="personIcon.svg" className="w-[18px] h-[18px]" alt="" />
              <p>Accaunt</p>
            </div>
            <div
              onClick={() => setActivePage('Inbox')}
              className="flex items-center gap-3 my-4 cursor-pointer hover:underline"
            >
              <img src="inbox.svg" className="w-[18px] h-[18px]" alt="" />
              <p>Inbox</p>
            </div>
            <div
              onClick={() => setActivePage('Send')}
              className="flex items-center gap-3 my-4 cursor-pointer hover:underline"
            >
              <img src="send.svg" className="w-[18px] h-[18px]" alt="" />
              <p>Send</p>
            </div>
            <div
              onClick={() => setActivePage('Draft')}
              className="flex items-center gap-3 my-4 cursor-pointer hover:underline"
            >
              <img src="draft.svg" className="w-[18px] h-[18px]" alt="" />
              <p>Draft</p>
            </div>
            <div
              onClick={() => setActivePage('Finance')}
              className="flex items-center gap-3 my-4 cursor-pointer hover:underline"
            >
              <img src="finance.svg" className="w-[18px] h-[18px]" alt="" />
              <p>Finance</p>
            </div>
            <div
              onClick={() => setActivePage('Settings')}
              className="flex items-center gap-3 my-4 cursor-pointer hover:underline"
            >
              <img src="personIcon.svg" className="w-[18px] h-[18px]" alt="" />
              <p>Settings</p>
            </div>
          </div>
        </aside>
        <main
          style={{ width: `calc(100% - 220px)` }}
          className="mx-[10px] flex-1/2 text_c_0 pl-3"
        >
          {activePage === 'Accaunt' ? (
            <AccauntComponent
              CategoriesSitebarOpen={CategoriesSitebarOpen}
              setCategoriesSitebarOpen={setCategoriesSitebarOpen}
              userDB={userDB}
            />
          ) : '' + activePage === 'Inbox' ? (
            <Indbox
              CategoriesSitebarOpen={CategoriesSitebarOpen}
              setCategoriesSitebarOpen={setCategoriesSitebarOpen}
              userDB={userDB}
            />
          ) : '' + activePage === 'Send' ? (
            <Send
              CategoriesSitebarOpen={CategoriesSitebarOpen}
              setCategoriesSitebarOpen={setCategoriesSitebarOpen}
              userDB={userDB}
            />
          ) : '' + activePage === 'Draft' ? (
            <Draf
              CategoriesSitebarOpen={CategoriesSitebarOpen}
              setCategoriesSitebarOpen={setCategoriesSitebarOpen}
            />
          ) : '' + activePage === 'Finance' ? (
            <Finance
              CategoriesSitebarOpen={CategoriesSitebarOpen}
              setCategoriesSitebarOpen={setCategoriesSitebarOpen}
            />
          ) : '' + activePage === 'Settings' ? (
            <Settings
              CategoriesSitebarOpen={CategoriesSitebarOpen}
              setCategoriesSitebarOpen={setCategoriesSitebarOpen}
            />
          ) : (
            ''
          )}
        </main>
      </div>

      <Footer />
    </>
  );
}

export default MainAccaunt;
