import { useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import ProductCard, { Product } from "./ProductCard";

export interface Category {
    id: number;
    title: string;
    icon?: string;
}

interface CategoryListProps {
    categories: Category[];
    products: Product[];
}

export default function CategoryList({ categories, products }: CategoryListProps) {
    const [selectedId, setSelectedId] = useState<number>(1);

    const handleSelect = (id: number) => {
        if (id === selectedId) {
            return;
        }
        setSelectedId(id);
    };

    const filtered = selectedId === 1 ? products : products.
        filter((p) => p.categoryId === selectedId);

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={categories}
                horizontal
                keyExtractor={(item) => item.id.toString()}
                style={styles.chipsList}
                contentContainerStyle={styles.list}
                renderItem={({ item }) => {
                    const active = item.id === selectedId;
                    return (
                        <Pressable
                            style={[styles.chip, active && styles.chipActive]}
                            onPress={() => handleSelect(item.id)}
                        >
                            {item.icon && (
                                <Image
                                    source={{ uri: item.icon }}
                                    style={styles.icon}
                                    tintColor={active ? "#FFFFFF" : "#1F1F1F"}
                                />
                            )}
                            <Text style={[styles.text, active && styles.textActive]}>
                                {item.title}
                            </Text>
                        </Pressable>
                    );
                }}
            />

            <FlatList
                data={filtered}
                numColumns={2}
                keyExtractor={(item) => item.id.toString()}
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.products}
                renderItem={({ item }) => <ProductCard product={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    wrapper: {
        flex: 1,
    },
    chipsList: {
        flexGrow: 0, // düymələrin siyahısı bütün hündürlüyü tutmasın
    },
    list: {
        gap: 10,
        paddingVertical: 4,
        paddingTop: 20,
    },
    chip: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        paddingHorizontal: 22,
        height: 44,
        borderRadius: 14,
        backgroundColor: "#F9F9F9",
    },
    chipActive: {
        backgroundColor: "#965236",
    },
    icon: {
        width: 18,
        height: 18,
    },
    text: {
        fontSize: 14,
        fontWeight: "500",
        color: "#1F1F1F",
    },
    textActive: {
        color: "#FFFFFF",
    },
    row: {
        gap: 12,
    },
    products: {
        gap: 12,
        paddingTop: 16,
        paddingBottom: 100,
    },
}
);