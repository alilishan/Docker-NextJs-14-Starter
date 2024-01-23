import React, { FC } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import ThemesSwitcher from "@/components/ThemesSwitcher";

import OunchLogo from "@/assets/ounch-o.svg";

interface Props {
    className?: string;
}

const NavBar:FC<Props> = () => {
    return (
        <Navbar isBordered isBlurred maxWidth="full">
            <NavbarBrand>
                <OunchLogo className="w-8 h-8 mr-2" />
                <p className="font-bold text-inherit dark:text-white">Ounch</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                    Features
                    </Link>
                </NavbarItem>
                    <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                    Customers
                    </Link>
                </NavbarItem>
                    <NavbarItem>
                    <Link color="foreground" href="#">
                    Integrations
                    </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                    </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                    Sign Up
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <ThemesSwitcher />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};

export default NavBar;
