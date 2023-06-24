import { LeftSidebar, RightSidebar } from "./components";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
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
      <body className={inter.className}>
        <main className="flex justify-between p-[3em]">
          <LeftSidebar />
          {children}
          <RightSidebar />
        </main>
      </body>
    </html>
  );
}
