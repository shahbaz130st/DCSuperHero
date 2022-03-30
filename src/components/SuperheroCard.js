import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { colors } from "../themes/colors";
const SuperheroCard = (props) => {
    const item = props.superhero
    return (
        <TouchableOpacity style={style.containerStyle} onPress={props.onPress} >
            <Image style={style.imageStyle} source={{ uri: item.imgUrl }} />
            <View style={style.viewStyle}>
                <View style={style.rowViewStyle}>
                    <Text style={style.headingText} >
                        {item.name}
                    </Text>
                    <Text style={style.headingText} >
                        {item.comic}
                    </Text>
                </View>

                <Text style={style.bodyText} >
                    {item.alterEgo}
                </Text>
                <Text style={style.bodyText} >
                    {item.description}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
export default SuperheroCard;
const style = StyleSheet.create({
    containerStyle: {
        height: 400,
        paddingVertical: 30
    },
    imageStyle: {
        height: 180,
        width: "100%",
        resizeMode: "cover"
    },
    rowViewStyle: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
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
        padding: 5
    }
})