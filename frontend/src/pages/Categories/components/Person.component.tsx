import { NavLink } from 'react-router-dom';
import type { userCart } from '../../../Types/user';

function Person({
  id,
  name,
  firstName,
  avatarURL,
  rating,
  pricePerOneMessage,
  hor,
  profession,
}: userCart) {
  return (
    <NavLink to={`/UserPage?id=${id}`}>
      <div className=" px-2.5 w-[160px] mr-2.5 md:w-[180px]  md:mr-4 my-2 h-[250px] text-[14px] flex-none snap-start cursor-pointer scroll-ml-2 bg_c_2 t_c_1000   rounded-[24px] shadow-md  flex flex-col  items-center  group">
        <div className=" w-fill h-[140px] mt-[10px] border-0 mb-[7px] rounded-[16px] overflow-hidden">
          <img
            src={avatarURL}
            alt=""
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="w-full flex justify-between ">
          <p>
            {name} {firstName}
          </p>
          <p>{hor} hr</p>
        </div>
        <div className="w-full text-gray-400">
          <p>{profession}</p>
        </div>
        <div className="w-full flex justify-between mt-1.5 content-center">
          <p className="content-center">{rating}</p>
          <p className="text-amber-400 text-[18px] select-none"> ★★★★★</p>
          <p className="content-center">$ {pricePerOneMessage}</p>
        </div>
      </div>
    </NavLink>
  );
}
export default Person;
