import { Inter } from "next/font/google";
import Navbar from "./navbar/Navbar";

const inter = Inter({
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
      <div className={inter.className}>
        <div className="ml-[7em] mt-[7em]">
          <Navbar />
        </div>
        <main>{children}</main>
      </div>
    </section>
  );
}
