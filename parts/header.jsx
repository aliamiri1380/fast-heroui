'use client'

import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@heroui/navbar";
import { Link } from "@heroui/link"
import Icon from "./icon";

export default function App({ buttons, links = [], mobileItems = [], brand }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // const mobileItems = [
  //   "Profile",
  //   "Dashboard",
  //   "Activity",
  //   "Analytics",
  //   "System",
  //   "Deployments",
  //   "My Settings",
  //   "Team Settings",
  //   "Help & Feedback",
  //   "Log Out",
  // ];

  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname); // Runs only on the client
  }, []);
  return (
    <Navbar dir="ltr" className="bg-[#f9f9f9] dark:bg-[#111] !bg-opacity-70" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent dir="rtl" justify="end">
        {buttons ? <NavbarItem>
          {buttons}
        </NavbarItem> : ''}
      </NavbarContent>
      <NavbarContent dir="rtl" className="hidden sm:flex gap-4" justify="center">
        {
          links.map((r, i) => <NavbarItem key={i} isActive={r.active}><Link className="" color={decodeURI(pathname) == r.link ? 'primary' : "foreground"} href={r.link}><Icon className="pl-1 top-0 ">{r.icon}</Icon> {r.text}</Link></NavbarItem>)
        }
      </NavbarContent>
      <NavbarContent dir="rtl">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="flex items-center gap-4">
          <img src="https://ups.nomreyar.com/nexna-nobg.png" width={40} />
          {brand ? <Link href="/" className="font-bold text-inherit">{brand}</Link> : ''}
        </NavbarBrand>
      </NavbarContent>
      <NavbarMenu className="bg-opacity-70 bg-slate-900 text-center">
        {mobileItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                decodeURI(pathname) == item.link ? 'primary' : "foreground"
              }
              className="w-full py-2 "
              size="lg"
              href={item.link}
            >
              <div>
                {item.icon ? <Icon className="pl-2 ">{item.icon}</Icon> : ''}{item.text}
              </div>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
