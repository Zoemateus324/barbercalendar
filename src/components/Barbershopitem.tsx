
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

type Barbershop = {
    name: string;
    address: string;
    imageUrl: string;
    // Add other properties as needed
};

const BaberShopItem = (barbershop: Barbershop) => {
    return ( 
        <div>

        <Card className="min-w-[167px] roudended-2xl">
            <CardContent className="p-0">
                
                {/* Imagem */}
                <div className="relative h-[159px] w-[159px]">
                    <Image fill className="object-conver roudend-2xl" src={barbershop.imageUrl} alt={barbershop.name}/>
                    {/* TExt */}
                </div>
                    <div className="px-2 py-3">
                        <h3 className="font-semibold truncate">{barbershop.name}</h3>
                        <p className="text-sm text-gray-400 truncate">{barbershop.address}</p>
                        <Button variant="secondary" className="mt-3 w-full">Reservar</Button>
                    </div>
            </CardContent>
        </Card>
        </div>
     );
}
 
export default BaberShopItem;