import type { Metadata } from "next";
import { Column, Row, Heading, Text, Button, Schema } from "@once-ui-system/core";
import { baseURL } from "@/resources";
import DonateActions from "@/components/DonateActions";

const NAV = [
  { label: "Про підрозділ", href: "#about" },
  { label: "Збір", href: "#donate" },
  { label: "Контакти", href: "#contacts" },
  { label: "Звіти", href: "#reports" },
];

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Собаки Шукаки — підрозділ безпілотних систем",
    description:
      "Підрозділ безпілотних систем. Аеророзвідка та FPV. Збір на ремонт дронів і авто.",
    metadataBase: new URL("https://shukaki-magic.vercel.app"),
    openGraph: {
      type: "website",
      locale: "uk_UA",
      siteName: "Собаки Шукаки",
    },
    twitter: {
      card: "summary_large_image",
    },
    icons: {
      icon: "/icon.png",
      shortcut: "/favicon.ico",
    },
  };
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
        <Row gap="24" wrap>
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
          «Собаки-шукаки» — очі неба і клин справедливості
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
<Column gap="m" style={{ flex: "1 1 360px", minWidth: 0 }}>
  <Button
    href="https://send.monobank.ua/jar/4g2vud36xP"
    size="l"
    variant="primary"
  >
    Monobank
  </Button>

  <div className="monobank-wrapper">
    <iframe
      className="monobank-iframe"
      src="https://send.monobank.ua/widget.html?jar=4CcgXWgoRV9G54VqCtuCz3s23em3i7uS&sendId=4g2vud36xP&type=qrp&colorScheme=black"
      title="Monobank QR"
      loading="lazy"
    />
  </div>
</Column>

<style jsx>{`
  .monobank-wrapper {
    width: 100%;
    max-width: 360px;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
    aspect-ratio: 1 / 1;
    min-height: 240px;
  }
  .monobank-iframe {
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
  }
  @media (min-width: 720px) {
    .monobank-wrapper {
      aspect-ratio: auto;
      height: 360px;
    }
  }
`}</style>


          {/* CRYPTO + SHARE (client) */}
          <DonateActions />
        </Row>
      </Column>

      {/* CONTACTS */}
      <Column id="contacts" maxWidth="m" paddingY="xl" gap="l">
        <Heading variant="display-strong-s">Контакти</Heading>

        <Row gap="16" wrap>
          <Button href="https://t.me/sobaki_shukaki?direct">Telegram</Button>
          <Button href="https://www.instagram.com/shukaki_sobaki/">
            Instagram
          </Button>
          <Button href="http://www.facebook.com/sobaki.shukaki">
            Facebook
          </Button>
          <Button href="https://www.tiktok.com/@sobaki_shukaki">
            TikTok
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