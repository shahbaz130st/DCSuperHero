import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { images } from "../../assets/images";
import { colors } from "../../themes/colors";
import { style } from "./DetailOfSuperHero.style";

const DetailOfSuperHero = (props) => {
    const item = props?.route?.params?.item
    return (
        <View style={style.mainView}>
            <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 25 }}>
                <TouchableOpacity style={{ paddingVertical: 30 }} onPress={() => { props.navigation.goBack() }}>
                    <Image style={{ height: 10, width: 30, resizeMode: "contain", tintColor: colors.blackTextColor }} source={images.leftArrow} />
                </TouchableOpacity>
                <Text style={style.heading1Style}>{"Detail of Super Hero"}</Text>

            </View>
            <View style={style.containerStyle} >
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
            </View>
        </View>
    )
}
export default DetailOfSuperHero;