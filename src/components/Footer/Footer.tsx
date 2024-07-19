import React from "react";
import Logo from "components/Logo/Logo";
import SocialsList1 from "components/SocialsList1/SocialsList1";
import { CustomLink } from "data/types";
import footerImage from 'images/footer.png';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];

}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "5",
    title: "Company",
    menus: [
      { href: "/", label: "About Us" },
      { href: "/", label: "Our Story" },
      { href: "/", label: "What is 33 Crores" },
      { href: "/", label: "Contact" },
    ],
  },
  {
    id: "1",
    title: "Shopping",
    menus: [
      { href: "/", label: "Privacy & Data" },
      { href: "/", label: "Terms & Conditions" },
      { href: "/", label: "Cancellation & Returns" },
      { href: "/", label: "Business Enrollment" },
      { href: "/", label: "Religious Service Provider" },
     
    ],
  },
  {
    id: "2",
    title: "Follow Us",
    menus: [
      { href: "/",  icon: <FaFacebook /> },
      { href: "/",  icon: <FaInstagram /> },
      
    ] as CustomLink[],
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
        <h2 className="font-semibold" style={{ color: '#fff' }}>
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
                  style={{ color: '#fff'}}>
                      {item.icon}
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
      backgroundImage: `url(${footerImage})`,
  height: '431px',
  // backgroundRepeat: 'no-repeat', // Uncomment if needed
  // backgroundSize: 'cover',       // Uncomment if needed
  backgroundPosition: 'top left',
  width: '100%'}}>
      <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-4 lg:gap-x-10 ">
        <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
          <div className="col-span-2 md:col-span-1">
             <h5 className="font-semibold text-sm" style={{ color: '#fff' }}>Our Address</h5>
          </div>
          <div className="col-span-2 flex items-center md:col-span-3 ">
              <p style={{ color: '#fff', lineHeight: '28px' }} className="text-neutral-6000   text-sm">
          33Crores Pooja Products Pvt Ltd ,<br />
          403, 4th Floor, O-Hub<br />
          IDCO Sez Infocity,<br />
          Bhubaneswar 751024,<br />
          Odisha , Bharat<br />
          <br />
        </p>
            {/* <SocialsList1 className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start" /> */}
          </div>
        </div>
        {widgetMenus.map(renderWidgetMenuItem)}
      </div>
    </div>
  );
};

export default Footer;
