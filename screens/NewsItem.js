import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import Icon from "react-native-vector-icons/Fontisto";

const NewsItem = ({ navigation, route }) => {
  const { image, id, title, date, content, author } = route.params;
  useEffect(() => {
    navigation.setOptions({ headerTitle: title });
  });
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: image }} />
      <View style={styles.dateNAuthor}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: "auto",
          }}
        >
          <Icon size={15} name="person" />
          <Text style={{ marginLeft: 6 }}>{author}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "auto",
          }}
        >
          <Icon size={15} name="date" />
          <Text style={{ marginLeft: 6 }}>{date}</Text>
        </View>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </SafeAreaView>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  imageStyle: {
    width: "95%",
    height: 300,
    borderRadius: 10,
    marginVertical: 10,
  },
  dateNAuthor: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontWeight: 500,
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal:8,
  },
  content: {
    fontSize: 15,
    padding: 10,
  },
});
