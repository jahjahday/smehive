import Image from "next/image";
import exclude from "../../assets/svg/Exclude.svg";
import close from "../../assets/svg/close (4) 1.svg";

export const acceptedModal = () => {
  return (
    <div className="w-[536px] h-[378px] rounded-[16.373px] bg-[#fff]">
      <section>
        <div className="bg-[#37bb70] rounded-[20px]">
          <Image src={exclude} width={30} height={30} alt="" />
          <h3 className="text-[#fff] font-[600] text-[15px] leading-[28px]">
            Approved
          </h3>
        </div>
        <Image src={close} alt="" width={100} height={100} />
      </section>
      <main>
        <h2>New community </h2>
        <h1 className="text-[#103c4c] text-[36px] font-Archivo font-[600] leading-[44px] tracking-[-1.08px]">
          You have approved{" "}
          <span className="text-[#e3b794]"> Market Support Forum,</span> author
          will be notified about this.{" "}
        </h1>
      </main>
    </div>
  );
};

export const rejectedModal = () => {
  return (
    <div className="w-[834px] h-[707px] rounded-[30px] bg-[#fff]">
      <section>
        <div className="bg-[#37bb70] rounded-[20px]">
          <Image src={exclude} width={30} height={30} alt="" />
          <h3 className="text-[#fff] font-[600] text-[15px] leading-[28px]">
            Approved
          </h3>
        </div>
        <Image src={close} alt="" width={100} height={100} />
      </section>
      <section>
        <div>
          <p>Abimbola Fernandez</p>
          <p>abimbola.fernandez@example.com </p>
        </div>
        <p>20, Feb 2023 (8 days ago)</p>
      </section>
      <main>
        <p>
          Generally, you can visit the official website of the bank from whom
          you wish to apply for a personal loan and visit the ‘personal loan’
          section of. The bank will generally send you a reminder either by an
          SMS to your registered mobile number or via email to remind you of the
          last date by which you are supposed to pay your EMIs.mobile number or
          via email to remind you of the last date by which you are supposed to
          pay your EMIs.
        </p>
      </main>
    </div>
  );
};
