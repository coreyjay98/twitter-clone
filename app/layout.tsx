import { UserProvider } from "@/src/api/Context/UserContext";
import "./globals.css";
import Navbar from "@/src/components/_molecules/Navbar/Navbar";
import Sidebar from "@/src/components/_molecules/Sidebar/Sidebar";
import ExploreBar from "@/src/components/_molecules/ExploreBar/ExploreBar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <Navbar />
          <main className="flex bg-black min-h-screen max-w-screen mx-auto ">
            <Sidebar />
            {children}
            <ExploreBar />
          </main>
        </UserProvider>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
