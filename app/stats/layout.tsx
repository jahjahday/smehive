import { Archivo } from "next/font/google";
import Navbar from "./navbar/Navbar";

const archivo = Archivo({
  subsets: ["latin"],
});

export const metadata = {
  title: "smehive",
  description: "smehive",
  keywords: ["smehive"],
};

export default function StatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className={archivo.className}>
        <div className="">
          {/* <Navbar /> */}
        </div>
        <main>{children}</main>
      </div>
    </section>
  );
}
