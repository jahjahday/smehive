import { LeftSidebar, Profile, RightSidebar } from "./components";
// import { Navbar } from "./components/navbar/navbar";
import { Naving } from "./components/nav/naving";
import "./globals.css";
// import { Inter } from "next/font/google";
import { Archivo } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
      <body className={archivo.className}>
        <div className="flex">
          <div className="ml-[3em]">
            <Naving />
          </div>
          <main className="flex">
            <LeftSidebar />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
