import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import BannerBarber from '../../public/banner-01.png'
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

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
      <div className="flex">
         <Card className="mt-6">
        <CardContent className="flex
        ">
      <div className="flex flex-col gap-2 py-5 pl-5">
        <Badge>Confirmado</Badge>
        <h3 className="">Corte de Cabelo</h3>
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src="https://cdn-icons-png.flaticon.com/512/219/219983.png" />
          </Avatar>
          <p className="text-sm">Barbearia Full Stack</p>
        </div>
      </div>
        </CardContent>
       </Card>
      </div>
      </div>

    </div>
  );
}
