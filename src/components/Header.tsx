import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import logoBarber from '../../public/logo.png'
const Header = () => {
    return ( 
        <Card>
            <CardContent>
                <Image
                src={logoBarber}
                alt="Logo Barber"
                />
            </CardContent>
        </Card>
     );
}
 
export default Header;