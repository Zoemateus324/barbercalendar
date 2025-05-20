import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import BannerBarber from '../../public/banner-01.png'
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="p-5">

        <h2 className="text-xl font-bold">Olá, Zoé</h2>
        <p>Terça-feira, 20 de maio</p>

        <div className="flex items-center gap-2 mt-6">

        <Input placeholder="Faça sua busca..."/>
        <Button>
          <SearchIcon/>
        </Button>
        </div>
       <div className="relative mt-6 w-full h-[150px] rounded-xl">
         <Image 
        src={BannerBarber}
        alt="banner barber"
        fill className="object-cover"
        />
       </div>
      </div>

    </div>
  );
}
