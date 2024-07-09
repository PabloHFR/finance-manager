import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { QueryProvider } from "@/providers/queryProvider";

import "./globals.css";

import { ptBR } from "@clerk/localizations";
import { SheetProvider } from "@/providers/SheetProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gerenciador de Finanças",
  description: "Gerencie suas finanças!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="pt-BR">
        <body className={inter.className}>
          {/* QueryProvider is a 'use client' component,but, since what's inside it is passed as children, the components don't inherit this and are not made into client components */}
          <QueryProvider>
            <SheetProvider />
            {children}
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
