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
