import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { Image, Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import { IconButton, Searchbar } from 'react-native-paper';
import CategoryList, { Category } from "../components/CategoryList";
import DiscountCard from "../components/DiscountCard";
import { Product } from "../components/ProductCard";

const CategoriesItem: Category[] = [
  {
    id: 1,
    title: "All"
  },
  {
    id: 2,
    title: "Chair",
    icon: "https://freesvg.org/img/OrnateChair.png"
  },
  {
    id: 3,
    title: "Table",
    icon: "https://freesvg.org/img/Chair.png"
  },
  {
    id: 4,
    title: "Lighting",
    icon: "https://freesvg.org/img/1574786961Bar_Stool.png"
  },
];

const ProductsItem: Product[] = [
  {
    id: 1,
    categoryId: 2,
    room: "Office",
    name: "Mondy chair",
    price: "$180.00",
    image: "https://freesvg.org/img/OrnateChair.png",
  },
  {
    id: 2,
    categoryId: 3,
    room: "Living Room",
    name: "Sofa Footstool",
    price: "$320.00",
    image: "https://freesvg.org/img/Chair.png",
  },
  {
    id: 3,
    categoryId: 4,
    room: "Bar",
    name: "Bar Stool",
    price: "$95.00",
    image: "https://freesvg.org/img/1574786961Bar_Stool.png",
  },
];

export default function TabLayout() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <View
      style={[
        styles.container,
        { paddingTop: StatusBar.currentHeight },
      ]}
    >
      <View style={styles.header}>
        <View style={styles.barBotton}>
          <View style={[styles.barBottonElement,
          styles.up,
          { backgroundColor: "#6F3A25" }]}></View>

          <View style={[styles.barBottonElement,
          styles.down,
          { backgroundColor: "#e0e0e0" }]}></View>

          <View style={[styles.barBottonElement,
          styles.down,
          { backgroundColor: "#6F3A25" }
          ]}></View>

          <View style={[styles.barBottonElement,
          styles.up,
          { backgroundColor: "#e0e0e0" }
          ]}></View>
        </View>

        <View>
          <Image style={styles.avatar}
            source={require("../../assets/images/persons.png")} />
        </View>
      </View>

      <View style={styles.title}>
        <Text style={styles.titleText}>
          Find unique furniture
        </Text>
        <Text style={styles.titleText}>
          for your home
        </Text>
      </View>

      <View style={styles.searchContent}>

        <View style={styles.searchBox}>
          <Searchbar
            style={styles.searchBar}
            placeholder="Search furniture..."
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
        </View>

        <View style={styles.filter}>
          <IconButton
            icon={() => (
              <Ionicons
                name="options"
                size={24}
                color="white"
              />
            )}
          />
        </View>
      </View>
      <View>
        <DiscountCard />
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Items</Text>

        <Pressable
          style={styles.viewAll}
          onPress={() => { }}>
          <Text style={styles.viewAllText}>View all</Text>
          <AntDesign
            name="right"
            size={12}
            color="#6B6B6B" />
        </Pressable>
      </View>

      <View style={{ flex: 1 }}>
        <CategoryList categories={CategoriesItem} products={ProductsItem} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  header: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  barBotton: {
    width: 60,
    height: 60,
    margin: 0,
    borderRadius: 10,
    backgroundColor: "#F9F9F9",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "space-between",
    padding: 16,
  },
  barBottonElement: {
    width: 12,
    height: 12,
  },
  up: {
    borderRadius: 8,
  },
  down: {
    borderRadius: 4,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 20,
  },

  title: {
    marginTop: 20,
  },

  titleText: {
    fontSize: 26,
    lineHeight: 30,
    fontWeight: "600",
  },

  searchContent: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  filter: {
    width: 56,
    height: 56,
    flexShrink: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#965236",
    borderRadius: 20,
  },

  searchBox: {
    flex: 1,
    minWidth: 0,
  },

  searchBar: {
    width: "100%",
    height: 56,
    borderRadius: 10,
    backgroundColor: "#F9F9F9"
  },
  sectionHeader: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1F1F1F",
  },

  viewAll: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  viewAllText: {
    fontSize: 13,
    color: "#6B6B6B",
  },
});