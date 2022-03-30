import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const style = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "white",
        paddingVertical: 50
    },
    heading1Style: {
        paddingHorizontal: 30,
        fontSize: 30,
        fontWeight: "bold"
    },
    rowViewStyle: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    containerStyle: {
        height: 500
    },
    imageStyle: {
        height: 400,
        width: "100%",
        resizeMode: "cover"
    },
    headingText: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        color: colors.primaryColor
    },
    bodyText: {
        fontSize: 12,
        fontWeight: "bold",
        color: colors.primaryColor
    },
    viewStyle: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center",
        borderColor: colors.greyColor,
        borderWidth: 1,
        padding: 25
    }
})