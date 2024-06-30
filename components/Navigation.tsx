"use client";

import { usePathname } from "next/navigation";
import { NavButton } from "./NavButton";

const routes = [
  {
    href: "/",
    label: "Visão Geral",
  },
  {
    href: "/transacoes",
    label: "Transações",
  },
  {
    href: "/contas",
    label: "Contas",
  },
  {
    href: "/categorias",
    label: "Categorias",
  },
  {
    href: "/configuracoes",
    label: "Configurações",
  },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
      {routes.map((route) => (
        <NavButton
          key={route.href}
          href={route.href}
          label={route.label}
          isActive={pathname === route.href}
        />
      ))}
    </nav>
  );
};
