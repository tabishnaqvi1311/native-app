import { StyleSheet, Text, View } from "react-native";

export default function Navbar() {
    return(
        <View style={styles.Nav}>
            <Text style={styles.NavInner}>M</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Nav: {

    },
    NavInner: {
        fontSize: 30,
        color: "#8850aa",
        fontWeight: "900",
        padding: 25,
        textAlign: "center"
    }
})