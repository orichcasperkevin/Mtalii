import Image from "next/image";
import ProfileIcon from "./components/profile_icon";
import Search from "./components/search";
export default function Home() {
  return (
    <main className="px-4 py-2 ">
      <div className="container mt-2 mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="ZZ logo"            
            width={30}
            height={30}
            priority
          />
          <h1 className="text-lg font-bold ml-2">Mtalii</h1>
        </div>
        
        {/* Navigation */}
        <nav className="space-x-4">
          <a className="text-gray-700 font-bold hover:text-gray-900" href="#">Destinations</a>
          <span>&#183;</span>
          <a className="text-gray-700 hover:text-gray-900" href="#">Activities</a>  
        </nav>

        {/* Profile Icon */}
        <ProfileIcon/>
      </div>

      {/* Search */}
      <div className="flex flex-row justify-center">        
        <Search/> 
      </div>
      <hr></hr>
    </main>

  );
}
