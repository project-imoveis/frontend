import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import HeaderComp from "./header";
import Sidebar from "./sidebar";

export function Layout({ children, title, user }: any) {
  return (
    <div className="layout-container">
      <Sidebar />
      <main className="layout-main">
        <HeaderComp title={title} user={user} />

        <section>{children}</section>
      </main>
      <h1 className="layout-mobile">
        Dashboard ainda não disponível em dispositivos mobile. <br />
        {":("}
      </h1>
    </div>
  );
}
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const { token, user_name } = parseCookies(ctx);
  if (!token && ctx) {
    return {
      redirect: {
        destination: "/dash",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
