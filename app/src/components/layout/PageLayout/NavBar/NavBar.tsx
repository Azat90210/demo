import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react'
import { LogoIcon } from '../../../../assets/icons/LogoIcon'


export const Header: React.FC = () => {
  return (
    <Navbar className='w-full justify-between'>
      <NavbarBrand>
        <LogoIcon width={50} height={50} />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
						Главная
          </Link>
        </NavbarItem>
				<NavbarItem>
          <Link color="foreground" href="#">
						Продукты
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
						Для бизнеса
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
						Блог
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
				<NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
