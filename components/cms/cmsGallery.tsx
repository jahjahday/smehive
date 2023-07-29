export const CmsGallery = () => {
  return (
    <div className="grid grid-cols-4 my-[3em] gap-2 w-[85%] mx-auto">
      <span className="bg-[url('/img/herobg.png')] p-8 text-[#fff] bg-cover bg-center row-span-3 h-[23em] rounded-3xl ">
        <h3 className=" text-[1.5rem] text-[#e5f7f8] font-[600] leading-[24px] font-Archivo tracking-[-0.905px]">
          Finance
        </h3>
        <p className="text-[#e8e8e8e0] mt-40 font-[Euclid Circular A] text-[0.85rem] font-[400] leading-[15.7px]">
          SMEs benefit from credit to invest, expand, and grow. Training
          programs improve financial skills. Advisory support offers guidance on
          debt, risk, and taxes.
        </p>
      </span>
      <div className="bg-[url('/img/herobg.png')] bg-cover bg-center col-span-2 h-[12em] rounded-2xl "></div>
      <div className="bg-[url('/img/herobg.png')] bg-cover bg-center h-[23em] row-span-3 rounded-2xl "></div>
      <div className="bg-[url('/img/herobg.png')] bg-cover bg-center h-[10.5em] rounded-2xl"></div>
      <div className="bg-[url('/img/herobg.png')] bg-cover bg-center h-[10.5em] rounded-2xl "></div>
    </div>
  );
};
