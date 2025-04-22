import { formatDate } from "@/utils/format-date";
import { Text, Card } from "react-native-paper";

interface VaccineCardProps {
  name: string;
  date: string;
}

export const VaccineCard = ({ name, date }: VaccineCardProps) => {
  return (
    <Card style={{ marginBottom: 8 }}>
      <Card.Title title={name} />
      <Card.Content>
        <Text variant="bodyMedium">Date: {formatDate(date)}</Text>
      </Card.Content>
    </Card>
  );
};
