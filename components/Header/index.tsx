'use client';

import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu, NavbarMenuItem
} from "@nextui-org/react";
import { TonConnectButton } from '@tonconnect/ui-react';
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "How it works",
    "Telegram",
    "Twitter.X",
  ];

return (
  <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full">
    <NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
        <Link href="/">
          <Image
            src="/header-logo.svg"
            width={198}
            height={40}
            alt="header logo"
          />
        </Link>
      </NavbarBrand>
    </NavbarContent>

    <NavbarContent className="hidden sm:flex gap-8">
      <NavbarItem>
        <Link color="foreground" href="#">
          How it works
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          Telegram
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          Twitter.X
        </Link>
      </NavbarItem>
    </NavbarContent>
    <NavbarContent justify="end">
      <NavbarItem>
        <TonConnectButton />
      </NavbarItem>
    </NavbarContent>

    <NavbarMenu>
      {menuItems.map((item, index) => (
        <NavbarMenuItem key={`${item}-${index}`}>
          <Link
            color={
              index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
            }
            className="w-full"
            href="#"
            size="lg"
          >
            {item}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  </Navbar>
)
};

export default Header;
