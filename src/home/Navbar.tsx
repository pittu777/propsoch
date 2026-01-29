"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Logo from "./../../src/app/favicon.ico";

function ListItem({ href, title, children }: any) {
  return (
    <li>
      <Link href={href} className="block p-2 hover:bg-gray-100 rounded">
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-gray-500">{children}</div>
      </Link>
    </li>
  );
}

export default function NavBar() {
  return (
    <header className="w-full fixed top-6 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

       
        <div className="flex items-center gap-2">
          <Image src={Logo} alt="logo" width={32} height={32} />
          <span className="font-bold text-lg">Propsoch</span>
        </div>

        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList>
            {["Products", "Solutions", "Pricing", "Services"].map((item) => (
              <NavigationMenuItem key={item}>
                <NavigationMenuTrigger>{item}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-80 p-4 space-y-2">
                    <ListItem href="#" title="Option 1">Details</ListItem>
                    <ListItem href="#" title="Option 2">More</ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/docs">Docs</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

       
        <div className="hidden lg:flex items-center gap-3">
          <Input placeholder="Search" className="w-50" />
          <Button>Get Started</Button>
        </div>

        
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6" />
            </SheetTrigger>

            <SheetContent side="right" className="space-y-6">
                 <SheetTitle className="text-xl font-bold px-3 py-2">
    Menu
  </SheetTitle>
  <SheetDescription className="text-gray-500 px-3">
   
  </SheetDescription>
              <nav className="flex flex-col gap-4 text-lg font-medium text-center">
                <Link href="#">Products</Link>
                <Link href="#">Solutions</Link>
                <Link href="#">Pricing</Link>
                <Link href="#">Services</Link>
                <Link href="#">Docs</Link>
              </nav>

              <Input placeholder="Search" />
              <Button className="w-full">Get Started</Button>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}
