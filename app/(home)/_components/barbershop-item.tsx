"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";

import { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface barbershopItemProps {
  barbershop: Barbershop;
}

export const BarbershopItem = ({ barbershop }: barbershopItemProps) => {
  const router = useRouter();

  const handleBooking = () => {
    router.push(`/barbershops/${barbershop.id}`);
  };

  return (
    <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
      <CardContent className="p-1">
        <div className="px-1 py-0 relative">
          <div className="absolute top-2 left-2 z-30">
            <Badge
              variant="secondary"
              className="opacity-90 flex gap-2 items-center justify-center"
            >
              <StarIcon size={12} className="fill-primary text-primary" />
              <span className="text-xs">5,0</span>
            </Badge>
          </div>

          <Image
            height={0}
            width={0}
            sizes="100vw"
            className="h-[159px] rounded-2xl w-full object-cover"
            src={barbershop.imageUrl}
            alt={barbershop.name}
          />
        </div>

        <div className="px-2 pb-3">
          <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.name}
          </h2>
          <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.address}
          </p>
          <Button
            className="w-full mt-3"
            variant="secondary"
            onClick={handleBooking}
          >
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
