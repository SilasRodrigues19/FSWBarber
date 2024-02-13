"use client";

import SideMenu from "@/app/_components/side-menu";
import { Button } from "@/app/_components/ui/button";
import { Separator } from "@/app/_components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/app/_components/ui/sheet";
import { Barbershop } from "@prisma/client";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface BarbershopInfoProps {
  barbershop: Barbershop;
}

const BarbershopInfo = ({ barbershop }: BarbershopInfoProps) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => setIsSheetOpen(false);

  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div>
      <div className="h-[250px] w-full relative">
        <div className="w-full flex justify-between items-center">
          <Button
            onClick={handleBackClick}
            size="icon"
            variant="outline"
            className="z-10 m-4"
          >
            <ChevronLeftIcon />
          </Button>

          <Sheet onOpenChange={setIsSheetOpen} open={isSheetOpen}>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="z-10 m-4">
                <MenuIcon />
              </Button>
            </SheetTrigger>

            <SheetContent>
              <SideMenu closeSheet={closeSheet} />
            </SheetContent>
          </Sheet>
        </div>

        <Image
          className="object-cover opacity-75"
          src={barbershop.imageUrl}
          alt={barbershop.name}
          fill
        />
      </div>

      <div className="px-5 py-3">
        <h1 className="text-xl font-bold">{barbershop.name}</h1>
        <div className="flex items-center gap-1 mt-2">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop.address}</p>
        </div>

        <div className="flex items-center gap-1 mt-2">
          <StarIcon className="text-primary" size={18} />
          <p className="text-sm">5,5 (2123 avaliações)</p>
        </div>

        <Separator className="bg-secondary my-5" />
      </div>
    </div>
  );
};

export default BarbershopInfo;
