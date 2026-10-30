import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export interface Product {
    id: number;
    categoryId: number;
    room: string;
    name: string;
    price: string;
    image: string;
}

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const [liked, setLiked] = useState<boolean>(false);

    return (
        <View style={styles.card}>
            <View style={styles.imageBox}>
                <Image
                    source={{ uri: product.image }}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.info}>
                <View>
                    <Text style={styles.room}>{product.room}</Text>
                    <Text style={styles.name}>{product.name}</Text>
                    <Text style={styles.price}>{product.price}</Text>
                </View>

                <Pressable style={styles.heart}
                    onPress={() => setLiked(!liked)}>
                    <Ionicons
                        name={liked ? "heart" : "heart-outline"}
                        size={16}
                        color={liked ? "#E53935" : "#1F1F1F"}
                    />
                </Pressable>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        borderRadius: 20,
        backgroundColor: "#F9F9F9",
        overflow: "hidden",
    },
    imageBox: {
        height: 150,
        padding: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    info: {
        backgroundColor: "#1F1F1F",
        padding: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    room: {
        color: "#BDBDBD",
        fontSize: 11,
    },
    name: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "600",
        marginTop: 2,
    },
    price: {
        color: "#C9895B",
        fontSize: 13,
        marginTop: 2,
    },
    heart: {
        width: 32,
        height: 32,
        borderRadius: 10,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
    },
});