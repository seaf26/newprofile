'use client';
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { useTranslations } from "next-intl";
import { generateKeys } from "@/utils/generateKeys";

import Image from "next/image";

export default function Home() {
  const t = useTranslations("HomePage");
 return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">{t("Heading")}</Heading>
      <Paragraph className="max-w-xl mt-4">
        {t("paragraph")}{" "}
        <Highlight>{t("Highlight")}</Highlight> {t("Paragraph3")}
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
       {t("Paragraph4")}{" "}
        <Highlight>{t("Highlight2")}</Highlight> {t("Paragraph5")}
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        {t("Heading2")}
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
  
  // const keys = generateKeys(content);
  // console.log("keys: ", JSON.stringify(keys, null, 2)); // Properly log the keys


}
