"use client";

import { Column, Row, Text, Button } from "@once-ui-system/core";

const USDT_TRC20 = "TCJjyNGFQf6fz8Rg4yBBNBPxCtodDkrj6w";

export default function DonateActions() {
  return (
    <Column gap="m" style={{ flex: "1 1 360px" }}>
      <Button size="l" variant="secondary">
        USDT TRC20
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
          {USDT_TRC20}
        </div>

        <Row gap="12" style={{ marginTop: 12 }}>
          <Button
            size="m"
            variant="secondary"
            onClick={() => {
              navigator.clipboard.writeText(USDT_TRC20);
              alert("Адресу скопійовано");
            }}
          >
            Скопіювати
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
        Поширити
      </Button>
    </Column>
  );
}