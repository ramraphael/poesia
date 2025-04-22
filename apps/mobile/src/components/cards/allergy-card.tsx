import { titleCase } from "@/utils/title-case";
import { Card, Text } from "react-native-paper";

interface AllergyCardProps {
  name: string;
  severity: string;
  reactions: string[];
}

export const AllergyCard = ({
  name,
  severity,
  reactions,
}: AllergyCardProps) => {
  return (
    <Card style={{ marginBottom: 8 }}>
      <Card.Title title={name} subtitle={`Severity: ${titleCase(severity)}`} />
      <Card.Content>
        <Text variant="bodyMedium">
          Reactions: {titleCase(reactions.join(", "))}
        </Text>
      </Card.Content>
    </Card>
  );
};
