import { StyleSheet, Text, View ,FlatList} from "react-native";
import React from "react";
import GenerateFakeNews from "../data/fake-news";

import ListItem from "../components/ListItem";

const LatestNews = ({navigation}) => {
  const news = GenerateFakeNews(4);
  return (
    <View>
      <FlatList
        data={news}
        renderItem={(iter) => (
          <ListItem {...iter.item} navigation={navigation}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default LatestNews;

const styles = StyleSheet.create({});
