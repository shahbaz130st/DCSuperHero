import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./ListOfSuperHeros.style";
import { useSelector, useDispatch } from "react-redux";
import { getHeroList } from "../../store/actions/HeroList";
import SuperheroCard from "../../components/SuperheroCard";
import SearchInputField from "../../components/SearchInputField";
import { images } from "../../assets/images";
import { colors } from "../../themes/colors";
import { FlatListItemSeparator } from "../../components/FlatListItemSeparator";

const ListOfSuperHeros = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getHeroList())
    }, [])
    const listOfHeros = useSelector(state => state.HeroList.heroList)
    const [name, setName] = useState("")
    const [listOfHeroesTemp, setListOfHeroesTemp] = useState(listOfHeros)
    useEffect(() => {
        setListOfHeroesTemp(listOfHeros)
    }, [listOfHeros])
    return (
        <View style={styles.mainView}>
            <Text style={styles.heading1Style}>{"List of Super Heros"}</Text>
            <SearchInputField
                imageSource={images.searchIcon}
                placeholderTextColor={colors.placeholderColor}
                placeholder={"Search by name"}
                onChangeText={(text) => {
                    setName(text)
                    if (text.length > 0) {
                        let interestsDataTemp = [...listOfHeros]
                        interestsDataTemp = interestsDataTemp.filter((item) => (
                            item?.name.toLowerCase().indexOf(text.toLowerCase()) == 0
                        ))
                        setListOfHeroesTemp([...interestsDataTemp])
                    }
                    else {
                        dispatch(getHeroList())
                    }

                }}
                keyboardType={"email-address"}
                value={name} />
            {
                listOfHeroesTemp.length > 0 ?
                    <FlatList
                        numColumns={1}
                        data={listOfHeroesTemp}
                        ItemSeparatorComponent={({ item, index }) => {
                            return (<FlatListItemSeparator />)
                        }
                        }
                        extraData={{ list: listOfHeroesTemp }}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => {
                            return item.id
                        }}
                        style={{ flex: 1, width: "100%" }}
                        renderItem={({ item, index }) => {
                            return (
                                <SuperheroCard
                                    superhero={item}
                                    onPress={() => { props.navigation.navigate("DetailOfSuperHero", { item: item }) }} />
                            )
                        }}
                    /> :
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{"No Record Found"}</Text>
                    </View>
            }
        </View>
    )
}
export default ListOfSuperHeros;