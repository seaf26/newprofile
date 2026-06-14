import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { WorkHistory } from "@/components/WorkHistory";

export default function Home() {
  return (
    <Container >
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Professional Experience</Heading>
      <Paragraph className="max-w-xl mt-4">
        Full-stack experience across{" "}
        <Highlight>Laravel APIs, React/Next.js dashboards, ecommerce, delivery, and mobile app backends</Highlight>.
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}
