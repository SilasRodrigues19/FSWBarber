"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useState } from "react";
import SideMenu from "./side-menu";

export const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <Card className="rounded-none">
      <CardContent className="p-5 flex justify-between flex-row items-center">
        <Image src="/logo.png" alt="FSW Barber" height={22} width={120} />
        <Sheet onOpenChange={setIsSheetOpen} open={isSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <MenuIcon size={16} />
            </Button>
          </SheetTrigger>

          <SheetContent>
            <SideMenu closeSheet={closeSheet} />
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
};
