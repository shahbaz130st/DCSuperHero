import React from "react";
import { View, StatusBar, LogBox } from "react-native";
import { styles } from "./App.style";
import Routing from "../navigations/Routing.stack";
import { Provider } from 'react-redux';
import configureStore from '../store/index';

const store = configureStore()

const App = () => {
    LogBox.ignoreAllLogs();
    return (
        <Provider store={store}>
            <View style={styles.mainView}>
                <StatusBar
                    translucent={true}
                    hidden={true}
                />
                <Routing />
            </View>
        </Provider>
    )
}
export default App;