"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  CalendarIcon,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  UserIcon,
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const { data, status } = useSession();

  const handleSignOut = () => signOut();

  const handleSignIn = () => signIn("google");

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
            <SheetHeader>Menu</SheetHeader>
            <Separator className="my-5" />

            {status === "authenticated" ? (
              <div className="flex justify-between items-center px-5 py-6">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage
                      src={data?.user?.image ?? ""}
                      alt={data?.user?.name ?? "User image"}
                    />
                  </Avatar>

                  <h2 className="font-bold">{data?.user?.name}</h2>
                </div>

                <Button variant="secondary" size="icon">
                  <LogOutIcon onClick={handleSignOut} />
                </Button>
              </div>
            ) : (
              <div className="px-5 py-6 gap-3 flex flex-col">
                <div className="flex items-center gap-2">
                  <UserIcon size={32} />
                  <h2 className="font-bold">Olá, faça seu login!</h2>
                </div>
                <Button
                  variant="secondary"
                  onClick={handleSignIn}
                  className="w-full"
                >
                  <LogInIcon className="mr-2" size={18} />
                  Fazer Login
                </Button>
              </div>
            )}

            <div className="flex flex-col gap-3 px-5">
              <Button variant="outline" className="justify-start" asChild>
                <Link href="/" onClick={closeSheet}>
                  <HomeIcon className="mr-2" size={18} />
                  Início
                </Link>
              </Button>

              {status === "authenticated" && (
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/bookings">
                    <CalendarIcon className="mr-2" size={18} />
                    Agendamentos
                  </Link>
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
};
