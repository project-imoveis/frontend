import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/router";
import Link from "next/link";

import { BsFillGridFill, BsCashStack, BsSun, BsMoonStars } from "react-icons/bs";
import { SlLogout } from "react-icons/sl";
import { AiOutlineProfile } from "react-icons/ai";
export default function Sidebar() {
  const { pathname } = useRouter();
  const { logout } = useAuth();
  const navigation = [
    {
      name: "Visão geral",
      href: "/dash",
      icon: BsFillGridFill,
    },
    {
      name: "Imóveis",
      href: "/dash/seus-imoveis",
      icon: AiOutlineProfile,
    },
  ];

  const isActive = (href: string) => pathname === href;
  return (
    <aside className="sideBar">
      <div className="logoWrapper"></div>
      <nav className="navbar">
        {navigation.map((item) => (
          <Link
            href={item.href}
            key={item.name}
            className={`navbar-item ${isActive(item.href) ? "navbar-item_active" : ""}`}
          >
            <item.icon className="navbar-item-icon" aria-hidden="true" />
            {item.name}
          </Link>
        ))}
      </nav>
      <footer className="sideBar-footer">
        <div>
          <label className="switch">
            <input className="switch-input" type="checkbox" />
            <span className="slider round">
              <span className="slider-light">
                <BsSun className="slider-light_icon" aria-hidden="true" />
                LIGHT
              </span>
              <span className="slider-dark">
                <BsMoonStars className="slider-dark_icon" aria-hidden="true" />
                DARK
              </span>
            </span>
          </label>
        </div>
        <button className="sideBar-footer_button" onClick={logout}>
          <SlLogout className="logoutIcon" aria-hidden="true" />
          <h3>Sair</h3>
        </button>
      </footer>
    </aside>
  );
}
