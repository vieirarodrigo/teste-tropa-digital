import { Metadata } from "next";
import StyledComponentsRegistry from "./lib/styled-components-registry";

export const metadata: Metadata = {
  title: "Teste Tropa Digital",
  description: "Teste para vaga de dev frontend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}