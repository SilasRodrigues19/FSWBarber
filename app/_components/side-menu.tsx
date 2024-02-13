"use client";

import React, { useState } from "react";
import { SheetHeader } from "./ui/sheet";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import {
  LogOutIcon,
  UserIcon,
  LogInIcon,
  HomeIcon,
  CalendarIcon,
} from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const SideMenu: React.FC<{ closeSheet: () => void }> = ({ closeSheet }) => {
  const { data, status } = useSession();

  const handleSignOut = () => signOut();

  const handleSignIn = () => signIn("google");

  return (
    <>
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
          <Button variant="secondary" onClick={handleSignIn} className="w-full">
            <LogInIcon className="mr-2" size={18} />
            Fazer Login
          </Button>
        </div>
      )}

      <div className="flex flex-col gap-3 px-5">
        <Button variant="outline" className="justify-start" asChild>
          <Link
            href="/"
            onClick={() => {
              closeSheet();
            }}
          >
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
    </>
  );
};

export default SideMenu;
