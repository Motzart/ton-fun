'use client';
import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu, NavbarMenuItem
} from "@nextui-org/react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "How it works",
    "Support",
    "Twitter",
    "Telegram",
  ];

return (
  <Navbar onMenuOpenChange={setIsMenuOpen}>
    <NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
        <Link href="/">
          <p className="font-bold text-inherit">TON FUN</p>
        </Link>
      </NavbarBrand>
    </NavbarContent>

    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
        <Link color="foreground" href="#">
          -How it works-
        </Link>
      </NavbarItem>
      <NavbarItem >
        <Link color="foreground" href="#" >
          -Support-
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          -Twitter-
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          -Telegram-
        </Link>
      </NavbarItem>
    </NavbarContent>
    <NavbarContent justify="end">
      <NavbarItem>
        <Button as={Link} color="primary" href="#" variant="flat">
          [Connect Wallet]
        </Button>
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
