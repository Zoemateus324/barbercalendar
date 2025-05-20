import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import BannerBarber from '../../public/banner-01.png'
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import BarberShopItem from "@/components/Barbershopitem";
import { db } from "@/lib/prisma";

export default async function Home () {
  const barbershops = await db.barbershop.findMany({})
 


  return (
    <div >
      <Header />
      <div className="p-5">

        <h2 className="text-xl font-bold">Olá, Zoé</h2>
        <p>Terça-feira, 20 de maio</p>
        {/* Banner */}
        <div className="flex items-center gap-2 mt-6">

          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <div className="relative mt-6 w-full h-[150px] rounded-xl">
          <Image
            src={BannerBarber}
            alt="banner barber"
            fill className="object-cover"
          />
        </div>
        {/* Card Esquerda */}
        <h2 className="font-bold uppercase mb-3 mt-6 text-xs text-gray-500 ">AGENDAMENTOS</h2>
        <Card className="">
          <CardContent className="flex justify-between p-2
        ">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit ">Confirmado</Badge>
              <h3 className="">Corte de Cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://cdn-icons-png.flaticon.com/512/219/219983.png" />
                </Avatar>
                <p className="text-sm">Barbearia Full Stack</p>
              </div>
            </div>

            {/* Card Direita */}
            <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
              <p className="text-sm">Maio</p>
              <p className="text-2xl">20</p>
              <p className="text-sm">10:17</p>
            </div>
          </CardContent>
        </Card>
        
        {/* Recomendações */}
        <h2 className="font-bold uppercase mb-3 mt-6 text-xs text-gray-500">Recomendados</h2>
      
      <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">

      {barbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} {...barbershop} />
          ))}
      </div>
      
      
      </div>
    </div>
  );
}
