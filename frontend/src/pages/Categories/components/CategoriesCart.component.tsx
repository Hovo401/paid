function CategoriesCart({ text, url }: { text: string; url: string }) {
  return (
    <>
      <div className=" flex-none snap-start scroll-ml-2 cursor-pointer bg_c_2 t_c_1000 mr-3 w-[150px] my-2 h-[150px] w- rounded-[24px] shadow-md  flex flex-col  items-center  group">
        <div className=" w-[130px] h-[100px] mt-[10px] border-0 mb-[7px] rounded-[16px] overflow-hidden">
          <img
            src={url}
            alt=""
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <p>{text}</p>
      </div>
    </>
  );
}
export default CategoriesCart;
