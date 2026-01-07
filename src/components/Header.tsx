"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, Line, Row, ToggleButton } from "@once-ui-system/core";

import { routes, display, person } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string;
};

const ONEPAGE_NAV = [
  { label: "Про підрозділ", href: "/#about", icon: "person" },
  { label: "Збір", href: "/#donate", icon: "coin" },
  { label: "Контакти", href: "/#contacts", icon: "email" },
  { label: "Звіти", href: "/#reports", icon: "book" },
];

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat(locale, options).format(now));
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade s={{ hide: true }} fillWidth position="fixed" height="80" zIndex={9} />
      <Fade hide s={{ hide: false }} fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />

      <Row
        fitHeight
        className={styles.position}
        position="sticky"
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
        s={{ position: "fixed" }}
      >
        {/* LEFT */}
        <Row paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          {display.location && <Row s={{ hide: true }}>{person.location}</Row>}
        </Row>

        {/* CENTER NAV */}
        <Row fillWidth horizontal="center">
          <Row
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Row gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
              {/* HOME */}
              {routes["/"] && (
                <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} label="Головна" />
              )}

              <Line background="neutral-alpha-medium" vert maxHeight="24" />

              {/* ONE-PAGE ANCHORS */}
              {ONEPAGE_NAV.map((item) => (
                <Row key={item.href}>
                  {/* Desktop: label visible */}
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon={item.icon}
                      href={item.href}
                      label={item.label}
                      selected={pathname === "/"}
                    />
                  </Row>

                  {/* Mobile: icon only visually, але label лишається для доступності */}
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon={item.icon}
                      href={item.href}
                      label={item.label}   // ✅ головне виправлення
                      selected={pathname === "/"}
                    />
                  </Row>
                </Row>
              ))}

              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  <ThemeToggle />
                </>
              )}
            </Row>
          </Row>
        </Row>

        {/* RIGHT */}
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex paddingRight="12" horizontal="end" vertical="center" textVariant="body-default-s" gap="20">
            <Flex s={{ hide: true }}>
              {display.time && <TimeDisplay timeZone={person.location} />}
            </Flex>
          </Flex>
        </Flex>
      </Row>
    </>
  );
};
