import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import GenerateFakeNews from "../data/fake-news";
import ListItem from "../components/ListItem";

const AllNews = ({ navigation }) => {
  const news = GenerateFakeNews(50);
  return (
    <SafeAreaView>
      <FlatList
        data={news}
        renderItem={(iter) => (
          <ListItem {...iter.item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default AllNews;

const styles = StyleSheet.create({});
