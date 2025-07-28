import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@heroui/navbar";
import Dropdown from "./dropdown.jsx";
import {Link as ULink} from "@heroui/link"
import {Input} from "@heroui/input"
import Circle from './circle.jsx'
import Link from 'next/link'

export default (props) => {
  return (
    <>
    <Navbar className="fixed top-0 right-0">
        <NavbarContent justify="start">
            <NavbarBrand className="mr-4">{props.logo}
                <p className="hidden sm:block font-bold text-inherit">{props.brand}</p>
            </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-3">
        {
            props.links.map(r => <NavbarItem>
                <Link href={r.href} passHref><ULink>
                {r.text}
                </ULink></Link>
            </NavbarItem>)
        }
        </NavbarContent>
        <NavbarContent as="div" className="items-center" justify="end">
                <Input
                classNames={{
                }}
                placeholder="Type to search..."
                size="sm"
                startContent={<i className="bx bx-search bx-sm"></i>}
                type="search"
                />
        </NavbarContent>
        <Dropdown>
            <Circle isBordered as="button" className="transition-transform" color="secondary" name="Jason Hughes" size="sm" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
        </Dropdown>
    </Navbar>
    </>
  );
}