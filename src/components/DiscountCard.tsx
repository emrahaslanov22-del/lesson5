import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function DiscountCard() {
    return (
        <View style={styles.card}>
            <View style={styles.left}>
                <Text style={styles.upTo}>Up to</Text>
                <Text style={styles.discount}><Text style={styles.percent}>40%</Text> Discount!</Text>
                <Text style={styles.subtitle}>Limited-time furniture offers</Text>
                <Pressable
                    style={styles.button}
                    onPress={() => { }}
                >
                    <Text style={styles.buttonText}>Shop Now</Text>
                </Pressable>
            </View>

            <Image
                source={{ uri: "https://freesvg.org/img/Chair_1732716726.png" }}
                style={styles.image}
                resizeMode="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#1F1F1F",
        borderRadius: 20,
        height: 150,
        marginTop: 20,
        paddingLeft: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "hidden",
    },
    left: {
        flex: 1,
        justifyContent: "center",
    },
    upTo: {
        color: "#BDBDBD",
        fontSize: 12,
    },
    discount: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "600",
        marginTop: 2,
    },
    percent: {
        color: "#C9895B",
        fontWeight: "700",
    },
    subtitle: {
        color: "#E0E0E0",
        fontSize: 11,
        marginTop: 4,
    },
    button: {
        backgroundColor: "#FFFFFF",
        alignSelf: "flex-start",
        paddingHorizontal: 18,
        paddingVertical: 8,
        borderRadius: 10,
        marginTop: 12,
    },
    buttonText: {
        color: "#000000",
        fontWeight: "600",
        fontSize: 13,
    },
    pressed: {
        opacity: 0.7,
    },
    image: {
        width: 140,
        height: 120,
    },
});