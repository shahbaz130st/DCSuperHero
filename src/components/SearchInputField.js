import React from "react";
import { View, TextInput, TouchableOpacity, Image } from "react-native";
import commonStyles from "../themes/commonStyles";
import { colors } from "../themes/colors";
import { phoneScreen } from "../themes/phoneScreen";
import _ from "lodash";
const SearchInputField = (props) => {
    return (
        <View style={[commonStyles.inputContainerStyle, { marginTop: 10, paddingHorizontal: 10 }]} >
            <TextInput
                style={!_.isNil(props.imageSource) ? commonStyles.passwordInputinnerStyle : commonStyles.inputInnerStyle}
                onChangeText={props.onChangeText}
                value={props.value}
                placeholder={props.placeholder}
                placeholderTextColor={props.placeholderTextColor}
            />
            {!_.isNil(props.imageSource) &&
                <TouchableOpacity style={{
                    width: "15%", height: "100%", alignItems: "flex-end", justifyContent: "center", backgroundColor: colors.whiteColor, borderTopRightRadius: phoneScreen.height * 1 / 100, borderBottomRightRadius: phoneScreen.height * 1 / 100
                }} onPress={props.onPress}>
                    <Image style={{ width: "70%", height: "70%", resizeMode: "contain" }} source={props.imageSource} />
                </TouchableOpacity>
            }
        </View>
    )
}
export default SearchInputField;