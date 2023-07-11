import { LeftSidebar } from "../components";
// import { Navbar } from "./components/navbar/navbar";
import { Naving } from "../components/nav/naving";
import "./globals.css";
import { Archivo, Inter } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-Archivo",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-Inter",
});

export const metadata = {
  title: "smehive",
  description: "smehive",
  keywords: ["smehive"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${inter.variable}`}>
        <div className="flex max-md:block max-sm:mr-12">
          <div className="ml-[2em] max-[412px]:ml-[-4em]">
            <LeftSidebar />
          </div>
          <main className="w-[88%] mx-auto max-lg:w-full max-lg:ml-14">
            <Naving />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
