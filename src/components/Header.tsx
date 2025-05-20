import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import logoBarber from '../../public/logo.png'
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
const Header = () => {
    return ( 
        <Card>
            <CardContent className="p-5 justify-between flex flex-items items-center">
                <Image
                src={logoBarber}
                alt="Logo Barber"
                height={18}
                width={120}
                />
                <Button size="icon" variant="outline">
                    <MenuIcon/>
                </Button>
            </CardContent>
        </Card>
     );
}
 
export default Header;