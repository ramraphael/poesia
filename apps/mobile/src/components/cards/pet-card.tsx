import { Button, Card, Text } from "react-native-paper";

interface PetCardPrps {
  petName: string;
  animalType: string;
  dogBreed?: string;
  dateOfBrth: string;
  imageSrc?: string;
  onPress?: () => void;
}

export const PetCard = ({
  petName,
  animalType,
  dogBreed,
  dateOfBrth,
  imageSrc,
  onPress,
}: PetCardPrps) => {
  return (
    <Card>
      <Card.Title
        title={<Text variant="titleLarge">{"Name: " + petName}</Text>}
      />
      <Card.Content>
        <Text variant="bodyMedium">{animalType}</Text>
        {dogBreed && <Text variant="bodyMedium">{dogBreed}</Text>}
        <Text variant="bodyMedium">{dateOfBrth}</Text>
      </Card.Content>

      {imageSrc && <Card.Cover source={{ uri: imageSrc }} />}

      <Card.Actions>
        <Button onPress={onPress}>Details</Button>
      </Card.Actions>
    </Card>
  );
};
