import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

export const Header = () => {
  return (
    <Card className="rounded-none">
      <CardContent className="p-5 flex justify-between flex-row items-center">
        <Image src="/logo.png" alt="FSW Barber" height={22} width={120} />
        <Button variant="outline" size="icon" className="h-8 w-8">
          <MenuIcon size={16} />
        </Button>
      </CardContent>
    </Card>
  );
}