import React, { useEffect } from "react";
import { FlatList } from "react-native";
import GridItem from "../components/GridItem";

import { useSelector, useDispatch, connect } from "react-redux";
import { filteredIdea, selectIdea } from "../store/actions/idea.action";

const CategoriesScreen = ({navigation}) => {
    const categories = useSelector((state) => state.categories.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filteredIdea(categories[0].id));
      }, []);

    const handleSelectedCategory = (item) => {
        dispatch(selectIdea(item.id));
        navigation.navigate("Details", {
          name: item.title,
        });
      };

    const renderGridItem = ({ item }) => (
        <GridItem item={item} onSelected={handleSelectedCategory} />
    );

    return (
        <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={renderGridItem}
            numColumns={2}
        />
    );
};

export default connect()(CategoriesScreen);

