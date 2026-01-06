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
import DonateActions from "@/components/DonateActions";

const NAV = [
  { label: "Про підрозділ", href: "#about" },
  { label: "Збір", href: "#donate" },
  { label: "Контакти", href: "#contacts" },
  { label: "Звіти", href: "#reports" },
];

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
          <Column gap="m" style={{ flex: "1 1 360px" }}>
            <Button
              href="https://send.monobank.ua/jar/4g2vud36xP"
              size="l"
              variant="primary"
            >
              Monobank
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
          </Column>

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