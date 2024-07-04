import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/TopNav";
import Navber from "@/components/Navber";
import Footer from "@/components/Footer";
// import CityCard from "@/components/CityCard";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
   <div>
   <TopNav/>
   <Navber/>

        {children}
        {/* <CityCard/> */}

  <Footer/>     
   </div>
      
      </body>
    </html>
  );
}
