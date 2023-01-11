import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { NativeBaseProvider } from "native-base";

//component
import Main from "./src/navigation/Main";
import STORE from "./src/redux/store";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "./src/resources";


const config = {
  dependencies: {
    "linear-gradient": LinearGradient,
  },
};
// const [appIsReady, setAppIsReady] = useState(false);
// useEffect(() => {
//   async function prepare() {
//     try {
//       // Pre-load fonts, make any API calls you need to do here
//       await Font.loadAsync(Entypo.font);
//       // Artificially delay for two seconds to simulate a slow loading
//       // experience. Please remove this if you copy and paste the code!
//       await new Promise(resolve => setTimeout(resolve, 2000));
//     } catch (e) {
//       console.warn(e);
//     } finally {
//       // Tell the application to render
//       setAppIsReady(true);
//     }
//   }

//   prepare();
// }, []);
// const onLayoutRootView = useCallback(async () => {
//   if (appIsReady) {

//     await SplashScreen.hideAsync();
//   }
// }, [appIsReady]);

// if (!appIsReady) {
//   return null;
// }
export default function App() {
  return (
    <SafeAreaView  style={styles.container}>
      <StatusBar backgroundColor={Colors.black} barStyle="light-content" />
      <Provider store={STORE}>
        <NativeBaseProvider config={config}>
          <Main />
        </NativeBaseProvider>
      </Provider>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  }
});
