import { BsFillBellFill } from "react-icons/bs";
import { FaCog } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import profilePic from "@/assets/default-avatar.jpg";
import { parseCookies } from "nookies";
import { useState, useEffect } from "react";

export default function HeaderComp({ title }: any) {
  const [userName, setUserName] = useState("");
  const { user_name } = parseCookies();
  useEffect(() => {
    setUserName(user_name);
  }, [user_name]);
  return (
    <header className="layoutHeader">
      <h1 className="layoutHeader_title ">{title}</h1>
      <div className="layoutHeader-nav">
        <Link href="#" passHref className="notification-badge">
          <BsFillBellFill className="layoutHeader-nav_icon" aria-hidden="true" />
        </Link>
        <Link href="#">
          <FaCog className="layoutHeader-nav_icon" aria-hidden="true" />
        </Link>
        <section className="layoutHeader-profile">
          <a href="#" className="layoutHeader-profile_link">
            <h2 className="layoutHeader-profile_link_name ">{userName}</h2>
            <Image
              className="layoutHeader-profile_link_photo"
              src={profilePic}
              alt="Foto de perfil"
              width={40}
              height={40}
            />
          </a>
        </section>
      </div>
    </header>
  );
}
