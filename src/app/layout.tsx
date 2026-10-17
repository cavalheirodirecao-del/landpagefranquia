import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Franquia Cavalheiro | Vista o próximo capítulo", description: "Abra uma unidade Cavalheiro na sua cidade." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body className="grain">{children}</body></html>; }
