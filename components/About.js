import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function About() {
    return (
        <ScrollView>
            <View style={styles.main}>
                <Text style={styles.headings}>About Us: Transforming YouTube Hiring</Text>
                <Text style={styles.content}>Hey there, We're Abhinandan and Tabish, two college students with a shared vision of simplifying the YouTube hiring process and enhancing community engagement on the platform.</Text>

                <Text style={styles.headings}>The Spark</Text>
                <Text style={styles.content}>We kicked off this journey fueled by the realization that while YouTube's community is buzzing with creativity, navigating the hiring landscape can be a bit murky. Recognizing this gap, we set out to create a platform that not only streamlines hiring but also amplifies the sense of community among content creators.</Text>

                <Text style={styles.headings}>The Mission</Text>
                <Text style={styles.content}>Our mission is straightforward - make YouTube hiring a breeze and supercharge the community experience. We're not just here to connect creators with job opportunities; we're here to foster a tight-knit community where collaboration thrives.</Text>

                <Text style={styles.content}>Say hello to Moyaai, our brainchild designed to simplify hiring and elevate the YouTube community. Whether you're a seasoned creator or just getting started, we believe everyone should have an effortlessly smooth platform to connect, collaborate, and flourish.
                </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    headings: {
        color: "#8850aa",
        fontSize: 25,
        fontWeight: "900",
        textAlign: "center"
    },
    content: {
        textAlign: "justify",
        padding: 20,
        width: "85%"
    }
})