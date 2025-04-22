import { Card, Text } from "react-native-paper";

interface LabCardProps {
  name: string;
  dosage: string;
  instructions: string;
}

export const LabCard = ({ name, dosage, instructions }: LabCardProps) => {
  return (
    <Card style={{ marginBottom: 8 }}>
      <Card.Title title={name} />
      <Card.Content>
        <Text variant="bodyMedium">Dosage: {dosage}</Text>
        <Text variant="bodyMedium">Instructions: {instructions}</Text>
      </Card.Content>
    </Card>
  );
};
