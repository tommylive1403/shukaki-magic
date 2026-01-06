"use client";

import {
  Column,
  Row,
  Heading,
  Text,
  Button,
  Meta,
  Schema,
} from "@once-ui-system/core";
import { baseURL } from "@/resources";

const NAV = [
  { label: "Про підрозділ", href: "#about" },
  { label: "Збір", href: "#donate" },
  { label: "Контакти", href: "#contacts" },
  { label: "Звіти", href: "#reports" },
];

// ---------- Small inline icons (no dependencies) ----------
function I({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span
      aria-hidden="true"
      style={{ display: "inline-flex", width: 18, height: 18 }}
    >
      {children}
    </span>
  );
}

const IconBank = () => (
  <I>
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <path
        d="M3 10h18M5 10V20m4-10V20m6-10V20m4-10V20M4 20h16M12 4l9 6H3l9-6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </I>
);

const IconQr = () => (
  <I>
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <path
        d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 10v-6h6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 14h4v4h-4v-4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  </I>
);

const IconWallet = () => (
  <I>
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <path
        d="M4 7h14a2 2 0 0 1 2 2v1H14a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h6v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M4 7V6a2 2 0 0 1 2-2h12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M18 13h0.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  </I>
);

const IconCopy = () => (
  <I>
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <path
        d="M9 9h10v10H9V9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  </I>
);

const IconShare = () => (
  <I>
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <path
        d="M16 6l-8 6 8 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 6a2 2 0 1 0 0.001 0ZM8 12a2 2 0 1 0 0.001 0ZM16 18a2 2 0 1 0 0.001 0Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  </I>
);

const IconTelegram = () => (
  <I>
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <path
        d="M21 5 3.5 12.2c-.8.3-.8 1.4.1 1.6l4.8 1.4 1.8 5.3c.3.8 1.4.9 1.8.2l2.6-3.8 4.6 3.3c.6.4 1.5.1 1.7-.6L23 6.2c.2-1-.8-1.8-2-1.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8.4 15.2 20.6 6.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  </I>
);

const IconInstagram = () => (
  <I>
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <path
        d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M17.5 6.5h0.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  </I>
);

const IconFacebook = () => (
  <I>
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <path
        d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v3H7v3h3v6h3v-6h3l1-3h-4V9c0-.6.4-1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  </I>
);

const IconTikTok = () => (
  <I>
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <path
        d="M14 3v11.5a4.5 4.5 0 1 1-3.5-4.4V7.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 6c1.3 2.2 3.2 3.3 5 3.6V6.2c-1.7-.2-3.4-1.2-5-3.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </I>
);

// ---------------------------------------------------------

export async function generateMetadata() {
  return Meta.generate({
    title: "Собаки Шукаки",
    description: "Підрозділ безпілотних систем",
    baseURL,
    path: "/",
  });
}

export default function Home() {
  return (
    <Column>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title="Собаки Шукаки"
        description="Підрозділ безпілотних систем"
        path="/"
      />

      {/* NAV */}
      <Row
        position="sticky"
        top="0"
        zIndex={10}
        padding="16"
        background="neutral-strong"
        borderBottom="neutral-medium"
        horizontal="between"
      >
        <Text weight="strong">Собаки Шукаки</Text>
        <Row gap="24">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>
              <Text onBackground="neutral-weak">{n.label}</Text>
            </a>
          ))}
        </Row>
      </Row>

      {/* ABOUT */}
      <Column id="about" maxWidth="m" paddingY="xl" gap="l">
        <Heading variant="display-strong-xl">
          Підрозділ безпілотних систем
        </Heading>

        <Text variant="body-default-l">
          Основою нашої сили є поєднання людської відваги, технічної майстерності
          та глибокої відданості Україні. У підрозділі аеророзвідки ми щодня
          доводимо: сучасна війна — це не лише про зброю, а про розум, швидкість
          рішень та точність дій.
        </Text>

        <Text variant="body-default-l">
          Ми віримо в силу технологій, але насамперед — у силу людей, які ними
          керують. Кожен наш боєць — це не просто оператор дрона, а аналітик,
          розвідник, стратег.
        </Text>

        <Text weight="strong" onBackground="brand-strong">
          «Собаки-Шукаки» — очі неба і клин справедливості
        </Text>
      </Column>

      {/* DONATE */}
      <Column id="donate" maxWidth="m" paddingY="xl" gap="l">
        <Heading variant="display-strong-s">Збір</Heading>

        <Text>
          Збір на поточні витрати підрозділу: ремонт дронів і авто.
        </Text>

        <Row gap="24" wrap>
          {/* MONOBANK */}
          <Column gap="m" style={{ flex: "1 1 360px" }}>
            <Button
              href="https://send.monobank.ua/jar/4g2vud36xP"
              size="l"
              variant="primary"
            >
              <Row gap="8" vertical="center">
                <IconBank />
                <span>Monobank</span>
              </Row>
            </Button>

            <div
              style={{
                width: "100%",
                maxWidth: 360,
                borderRadius: 12,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <iframe
                src="https://send.monobank.ua/widget.html?jar=4CcgXWgoRV9G54VqCtuCz3s23em3i7uS&sendId=4g2vud36xP&type=qrp&colorScheme=black"
                title="Monobank QR"
                style={{ width: "100%", height: 360, border: "none" }}
                loading="lazy"
              />
            </div>

            <Row gap="8" vertical="center">
              <IconQr />
              <Text size="s" onBackground="neutral-weak">
                QR-код Monobank
              </Text>
            </Row>
          </Column>

          {/* CRYPTO + SHARE */}
          <Column gap="m" style={{ flex: "1 1 360px" }}>
            <Button size="l" variant="secondary">
              <Row gap="8" vertical="center">
                <IconWallet />
                <span>USDT TRC20</span>
              </Row>
            </Button>

            <div
              style={{
                width: "100%",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.1)",
                padding: 16,
              }}
            >
              <Text size="s" onBackground="neutral-weak">
                Адреса
              </Text>

              <div
                style={{
                  marginTop: 8,
                  fontFamily:
                    "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                  fontSize: 14,
                  lineHeight: 1.4,
                  wordBreak: "break-all",
                }}
              >
                TCJjyNGFQf6fz8Rg4yBBNBPxCtodDkrj6w
              </div>

              <Row gap="12" style={{ marginTop: 12 }}>
                <Button
                  size="m"
                  variant="secondary"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      "TCJjyNGFQf6fz8Rg4yBBNBPxCtodDkrj6w"
                    );
                    alert("Адресу скопійовано");
                  }}
                >
                  <Row gap="8" vertical="center">
                    <IconCopy />
                    <span>Скопіювати</span>
                  </Row>
                </Button>
              </Row>
            </div>

            <Button
              size="l"
              variant="secondary"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("Посилання скопійовано");
              }}
            >
              <Row gap="8" vertical="center">
                <IconShare />
                <span>Поширити</span>
              </Row>
            </Button>
          </Column>
        </Row>
      </Column>

      {/* CONTACTS */}
      <Column id="contacts" maxWidth="m" paddingY="xl" gap="l">
        <Heading variant="display-strong-s">Контакти</Heading>

        <Row gap="16" wrap>
          <Button href="https://t.me/sobaki_shukaki?direct">
            <Row gap="8" vertical="center">
              <IconTelegram />
              <span>Telegram</span>
            </Row>
          </Button>

          <Button href="https://www.instagram.com/shukaki_sobaki/">
            <Row gap="8" vertical="center">
              <IconInstagram />
              <span>Instagram</span>
            </Row>
          </Button>

          <Button href="http://www.facebook.com/sobaki.shukaki">
            <Row gap="8" vertical="center">
              <IconFacebook />
              <span>Facebook</span>
            </Row>
          </Button>

          <Button href="https://www.tiktok.com/@sobaki_shukaki">
            <Row gap="8" vertical="center">
              <IconTikTok />
              <span>TikTok</span>
            </Row>
          </Button>
        </Row>
      </Column>

      {/* REPORTS */}
      <Column id="reports" maxWidth="m" paddingY="xl" gap="l">
        <Heading variant="display-strong-s">Звіти</Heading>
        <Text onBackground="neutral-weak">
          Звіти (Sheets / Drive) — в роботі
        </Text>
      </Column>
    </Column>
  );
}