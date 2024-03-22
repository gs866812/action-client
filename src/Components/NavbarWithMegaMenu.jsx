import React from "react";
import '../App.css';
import logo from '../assets/Clipping-Path-Action.png';
import {  Navbar,  Collapse,  Typography,  Button,  IconButton,  List,  ListItem,  Menu,  MenuHandler,  MenuList,  MenuItem,} from "@material-tailwind/react";
import {  ChevronDownIcon,  Bars3Icon,  XMarkIcon,} from "@heroicons/react/24/outline";
import {  Bars4Icon,  GlobeAmericasIcon,  NewspaperIcon,  PhoneIcon,  RectangleGroupIcon,  SquaresPlusIcon,  SunIcon,  TagIcon,  UserGroupIcon,} from "@heroicons/react/24/solid";
import {Link, NavLink } from "react-router-dom";

 
const navListMenuItems = [
  {title: "Products",  description: "Find the perfect solution for your needs.", icon: SquaresPlusIcon, link: 'products' },
  {title: "About Us", description: "Meet and learn about our dedication", icon: UserGroupIcon, link: 'about-us'},
  {title: "Blog", description: "Find the perfect solution for your needs.", icon: Bars4Icon, },
  {title: "Services", description: "Learn how we can help you achieve your goals.", icon: SunIcon, },
  {title: "Support", description: "Reach out to us for assistance or inquiries",icon: GlobeAmericasIcon, },
  {title: "Contact", description: "Find the perfect solution for your needs.", icon: PhoneIcon, },
  {title: "News", description: "Read insightful articles, tips, and expert opinions.", icon: NewspaperIcon, },
  {title: "Products", description: "Find the perfect solution for your needs.", icon: RectangleGroupIcon,},
  {title: "Special Offers", description: "Explore limited-time deals and bundles", icon: TagIcon,},
];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description, link }, key) => (
      <a href={link} key={key}>
        <MenuItem className="flex items-center gap-3"> {/*single hover menu*/}
          <div className="flex items-center justify-center p-2">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-[#FF5722] w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ),
  );
 
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
        <Typography as="div" variant="small" className="font-medium">
          <ListItem 
              className="flex items-center gap-2 py-2 pr-4 font-medium"
                selected={isMenuOpen || isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              >
                <NavLink to='services' className='font-normal'>Services</NavLink>
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`hidden h-3 w-3 transition-transform lg:block ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`block h-3 w-3 transition-transform lg:hidden ${
                    isMobileMenuOpen ? "rotate-180" : ""
                  }`}
                />
          </ListItem>
        </Typography>
        </MenuHandler>
        <MenuList className="hidden lg:block"> {/*dropdown menu container*/}
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
 
function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <ListItem className="flex items-center gap-2 py-2 pr-4">
        <NavLink to='/'>Home</NavLink>
      </ListItem>
      <NavListMenu />
      <ListItem className="flex items-center gap-2 py-2 pr-4">
        <NavLink to='/portfolio'>Portfolio</NavLink>
      </ListItem>
      <ListItem className="flex items-center gap-2 py-2 pr-4">
        <NavLink to='/pricing'>Price</NavLink>
      </ListItem>
    </List>
  );
}
 
export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  return (
    <Navbar className="mx-auto px-4 py-2 rounded-none max-w-[none]"> 
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
        <Link to='/'>
          <img src={logo} className="w-[80%] cursor-pointer" alt="CLipping path action" />
        </Link>
        <div className="flex items-center gap-5">
          <div className="hidden lg:block right-border">
            <NavList />
          </div>
          
          <div className="hidden gap-2 lg:flex flex-1">
            <Button className="bg-[#FF5722] rounded-md poppins">
              <NavLink to='free-trial'>FREE TRIAL</NavLink>
            </Button>
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
      </div>

      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
            FREE TRIAL
          </Button>
          <Button variant="gradient" size="sm" fullWidth>
            Sign In
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}