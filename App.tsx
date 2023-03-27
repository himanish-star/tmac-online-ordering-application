import * as React from "react";
import { WebView } from "react-native-webview";
import { StyleSheet, StatusBar, StatusBarProps, View, SafeAreaView, Text } from "react-native";
import { displayTexts } from "./DisplayStrings";

const tmacWebsite = "https://tmaccafe.petpooja.com/";
const primaryAppTheme = "#fec632";

const CustomStatusBar = (statusBarProps: { backgroundColor: string } | StatusBarProps) => {
  const { backgroundColor, ...props } = statusBarProps;
  return (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        <View style={styles.headerText}>
          <Text style={styles.address}>{displayTexts.ADDRESS}</Text>
        </View>
      </SafeAreaView>
    </View>
  )
};

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.mainView}>
        <CustomStatusBar backgroundColor={primaryAppTheme} barStyle={"dark-content"} />
        <View style={styles.webViewWrapper}>
          <WebView 
            style={styles.webViewContainer}
            source={{ uri: tmacWebsite }} 
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  webViewWrapper: {
    backgroundColor: 'red',
    flex: 1,
  },
  webViewContainer: {
    flex: 1
  },
  statusBar: {
  },
  address: {
    fontSize: 25,
  },
  headerText: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
  }
});
