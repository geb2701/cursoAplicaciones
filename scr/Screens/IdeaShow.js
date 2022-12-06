import { FlatList } from "react-native";
import React from "react";
import IdeaItem from "../components/IdeaItem";
import { Idea } from "../Data/Idea";

const IdeaShow = ({ navigation, route }) => {
  const idea = Idea.filter(
    (idea) => idea.category === route.params.categoryID
  );

  const handleSelectedCategory = (item) => {
    navigation.navigate("Details", {
      productID: item.id,
      name: item.name,
    });
  };

  const renderIdeaItem = ({ item }) => (
    <IdeaItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <FlatList
      data={idea}
      keyExtractor={(item) => item.id}
      renderItem={renderIdeaItem}
    />
  );
};

export default IdeaShow;