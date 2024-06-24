import React from "react";
import Logo from "components/Logo/Logo";
import SocialsList1 from "components/SocialsList1/SocialsList1";
import { CustomLink } from "data/types";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];

}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "5",
    title: "Our Address",
    menus: [
      { href: "/", label: "33Crores Pooja Products Pvt Ltd ,403, 4th Floor, O-Hub IDCO Sez Infocity,Bhubaneswar 751024,Odisha , Bharat" },
      { href: "/", label: "Phone: (91)-9776-88888-7" },
      { href: "/", label: "Email: info@example.com" },
    ],
  },
  {
    id: "1",
    title: "Explore",
    menus: [
      { href: "/", label: "About Us" },
      { href: "/", label: "Our Story" },
      { href: "/", label: "Contact Us" },
      { href: "/", label: "Privacy & Policy" },
      
     
    ],
  },
  {
    id: "2",
    title: "Newsletter Sign Up",
    menus: [
      { href: "/", label: "Receive updates about our products & promotions." },
      {href: "/", label: "Newsletter Sign Up", isForm: true },
      
    ],
  },
  // {
  //   id: "4",
  //   title: "Community",
  //   menus: [
  //     { href: "/", label: "Discussion Forums" },
  //     { href: "/", label: "Code of Conduct" },
  //     { href: "/", label: "Community Resources" },
  //     { href: "/", label: "Contributing" },
  //     { href: "/", label: "Concurrent Mode" },
  //   ],
  // },
];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              {item.isForm ? (
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    className="w-full p-2 border border-neutral-300 rounded-md"
                    placeholder="Enter your email"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full p-2 bg-blue-500 text-white rounded-md"
                  >
                    Sign Up
                  </button>
                </form>
              ) : (
                <a
                  key={index}
                  className="text-neutral-6000  hover:text-black dark:hover:text-white"
                  href={item.href}
                  style={{
                    color: '#fff'}} >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

  return (
    <div className="nc-Footer relative py-16 lg:py-28 border-t border-neutral-200 dark:border-neutral-700"  style={{
      backgroundColor: '#f5984b'}}>
      <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-4 lg:gap-x-10 ">
        <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
          <div className="col-span-2 md:col-span-1">
            <Logo />
          </div>
          <div className="col-span-2 flex items-center md:col-span-3">
            <SocialsList1 className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start" />
          </div>
        </div>
        {widgetMenus.map(renderWidgetMenuItem)}
      </div>
    </div>
  );
};

export default Footer;
