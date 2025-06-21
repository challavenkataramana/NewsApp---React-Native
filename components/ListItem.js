import { StyleSheet, Text } from "react-native";
import { Card, MD3Colors } from "react-native-paper";
import { AppScreens } from "../utils/constants";
const ListItem = ({ id, title, content, image, date, author, navigation }) => {
  const onPressNews = () => {
    navigation.navigate(AppScreens.NewsItem, {
      id,
      title,
      content,
      author,
      date,
      image,
    });
  };
  return (
    <Card onPress={onPressNews} style={styles.container}>
      <Card.Cover source={{ uri: image }} />
      <Card.Title style={styles.date} title={date} />
      <Card.Title style={styles.title} title={title} />
      <Card.Content>
        <Text style={styles.content} variant="bodyMedium">
          {content}
        </Text>
      </Card.Content>
    </Card>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
  },
  title: {},
  date: {
    color: MD3Colors.tertiary100,
  },
  content: {
    marginBottom: 10,
  },
});
