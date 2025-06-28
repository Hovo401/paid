import { useState } from 'react';
import type { userDB } from '../../Types/api.types';
import api from '../../api/api';

function Message({
  setMessageOpen,
  user,
}: {
  setMessageOpen: any;
  user: userDB;
}) {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  return (
    <>
      <div className="w-full">
        <div
          className={`fixed  top-[52px] inset-0 h-[200%] w-full  transform duration-1000
              ${true ? 'bg-[rgba(0,0,0,.6)]' : 'bg-[rgba(0,0,0,0)] hidden '}  `}
          onClick={() => setMessageOpen(false)}
        ></div>
        <div className=" text_c_0 fixed rounded-2xl p-2.5 w-[95%] max-w-[500px] min-h-25 bg_c_1 t_c_1000 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="text-[20px]">Send a massage</p>
          <p className="">{user.name}</p>
          <p className="">{user.email}</p>
          <div className="my-3 ">
            <p>Topic</p>
            <input
              className="bg_c_2 mt-1 h-8 border-gray-300 border focus:outline-none focus:ring-2  t_c_1000 w-full rounded-[8px] p-3"
              placeholder="select"
              type="text"
            />
          </div>
          <div className="my-3 ">
            <p>Subject</p>
            <input
              className="bg_c_2 mt-1 h-8 border border-gray-300  t_c_1000 w-full rounded-[8px] p-3"
              placeholder="select"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="my-3 ">
            <p>Message</p>
            <textarea
              className="bg_c_2 mt-1  border min-h-[100px] max-h-[100px] border-gray-300  t_c_1000 w-full rounded-[8px] p-2"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            onClick={async () => {
              setMessageOpen(false);

              const res = await api.post('/message/send', {
                id: user.id,
                subject,
                message,
              });

              alert(res.status === 201 ? 'sended' : 'status: ' + res.status);
            }}
            className="w-full py-2 px-4 cursor-pointer main_color text-white rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send $ {user.pricePerOneMessage}
          </button>
        </div>
      </div>
    </>
  );
}

export default Message;
