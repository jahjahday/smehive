import { Button } from "../button";
import { CmsNav } from "./CmsNav";

export const CmsContactUs = () => {
  return (
    <div className="mt-8">
      <CmsNav title="Contact Us" />
      <section className="mx-auto w-[88%] mt-8 bg-[url('/img/herobg.png')] pl-20 p-12 bg-cover bg-center">
        <div className="border-b h-[4em] mb-8">
          <h1 className="text-[#fff] font-[700] leading-[35px] tracking-[-1.004px] font-Achivo text-[1.6rem]">
            Contact Us
          </h1>
          <p className="text-[#e7e7e7] font-[Euclid Circular A] text-[.813rem] font-[400] leading-[130%] tracking-[0.125px]">
            Let's start a conversation
          </p>
        </div>
        <main className="flex">
          <div className="flex-1">
            <h1 className="text-[#fff] font Archivo font-[700] text-[2.5rem] leading-[94px] tracking-[-1.807px]">
              Ask how we can <span className="text-[#fee2cb]"> help you</span>
            </h1>
            <Button title="Chat with Us" />
          </div>
          <div className="flex-1">
            <div className="flex gap-10">
              <div className="w-[29%]">
                <h3 className="text-[#e1e1e1] font-Archivo text-[1.12rem] font-[700] leading-[94%] tracking-[-.791px]">
                  See our platform in action
                </h3>
                <p className="text-[#bbb6b6d9] font-[Euclid Circular A] ">
                  Request a personalised demo of SMEHive partner marketing
                  platform.
                </p>
              </div>
              <div className="w-[32%]">
                <h3 className="text-[#e1e1e1] font-Archivo text-[1.12rem] font-[700] leading-[94%] tracking-[-.791px]">
                  Master performance tracking
                </h3>
                <p className="text-[#bbb6b6d9] font-[Euclid Circular A] ">
                  From SMEHive to industry and insights, learn how to grow your
                  business through performance-based partnerships.
                </p>
              </div>
            </div>
            <div className="w-[37%]">
              <h3 className="text-[#e1e1e1] font-Archivo text-[1.12rem] font-[700] leading-[94%] tracking-[-.791px]">
                Explore SMEHive
              </h3>
              <p className="text-[#bbb6b6d9] font-[Euclid Circular A] text-[0.7rem] font-[400] leading-[14.447px]">
                Search open positions, read about company culture and values,
                and explore our charitable initiatives.
              </p>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};
