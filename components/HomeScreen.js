import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {

    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async () => {
        // try {
        //   const response = await fetch(`http://localhost:8181/add`, {
        //     method: "POST",
        //     body: JSON.stringify({ email })
        //   })
        //   if (!response.ok) {
        //     throw new Error("Something went wrong");
        //   }
        //   setEmail("");
        //   return;
        // } catch (error) {
        //   setError(error.message);
        //   console.log(error);
        // }
        setError(email);
        setEmail("");
    }

    return (
        <View style={styles.main}>
            <Text style={styles.text}>Create. <Text style={styles.innerText}>Collaborate.</Text> Succeed.</Text>
            <Text style={styles.subSlogan}>Join the Waitlist Now!</Text>
            <TextInput placeholder="Enter your email" style={styles.input} autoComplete="email" keyboardType="email-address" defaultValue={email} onChangeText={mail => setEmail(mail)} />
            <Button color={"#303035"} title="Join" onPress={handleSubmit} />
            {
                error && (
                    <Text>added {error.split("@")[0]} to waitlist</Text>
                )
            }
            <Button title="About" onPress={() => navigation.navigate("About")} color={"#8850aa"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 50,
        fontWeight: "900",
        textAlign: "center"
    },
    innerText: {
        color: "#8850aa",
    },
    subSlogan: {
        fontWeight: "500",
        fontSize: 20,
        textAlign: "center",
        marginVertical: 20
    },
    input: {
        width: 200,
        padding: 5,
        borderColor: "#21232b",
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10
    }
})