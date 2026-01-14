import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "@/resources/custom.css";

import classNames from "classnames";
import { Column, Flex, Background, RevealFx } from "@once-ui-system/core";
import { Header, Footer, Providers, RouteGuard } from "@/components";
import { fonts, effects } from "@/resources";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="uk"
      suppressHydrationWarning
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable
      )}
    >
      <body>
        <Providers>
          <Column background="page" fillWidth style={{ minHeight: "100vh" }}>
            <RevealFx fill position="absolute">
              <Background {...effects} />
            </RevealFx>

            <Header />
            <RouteGuard>{children}</RouteGuard>
            <Footer />
          </Column>
        </Providers>
      </body>
    </html>
  );
}