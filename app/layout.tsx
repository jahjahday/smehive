import { LeftSidebar, Profile, RightSidebar } from "../components";
// import { Navbar } from "./components/navbar/navbar";
import { Naving } from "../components/nav/naving";
import "./globals.css";
// import { Inter } from "next/font/google";
import { Archivo, Inter } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-Archivo"
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-Inter"
})

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
        <div className="flex max-md:block max-md:ml-4">
          <div className="ml-[3em]">
            <LeftSidebar />
          </div>
          <main className="w-[80%] mx-auto max-lg:w-full max-lg:ml-14">
            <Naving />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
