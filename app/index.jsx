import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MovieLists from "./movielist";
import TrendingMovies from "./trendingmovies";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([1, 2, 3, 4, 5]);
  const [upcomming, setUpcomming] = useState([1, 2, 3, 4, 5]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainBox}>
        <StatusBar style="light" />

        {/* {search bar and menu} */}
        <View style={styles.searchBarContainer}>
          <Pressable>
            <AntDesign name="menu" size={24} color="white" />
          </Pressable>
          <Pressable style={{ flexDirection: "row" }}>
            <Text style={[styles.logotxt, { color: "#fed250" }]}>M</Text>
            <Text style={styles.logotxt}>OVIES</Text>
          </Pressable>
          <Pressable>
            <EvilIcons name="search" size={35} color="white" />
          </Pressable>
        </View>

        {/* {scroll view} */}
        <View style={styles.scrollviewContainer}>
          <ScrollView>
            {/* {Trending Movies} */}
            <TrendingMovies data={trendingMovies} />

            {/* {MovieList} */}
            <MovieLists
              title={"Upcomming"}
              data={upcomming}
              image={
                "https://i.pinimg.com/564x/64/1e/cc/641ecce68cef01143b98e7ee6031eb76.jpg"
              }
            />

            {/* {TopMovieList} */}
            <MovieLists
              title={"Top Movies"}
              data={upcomming}
              image={
                "https://i.pinimg.com/474x/88/56/aa/8856aa2798114c60d543b674d1794d47.jpg"
              }
            />

            {/* {Drama} */}
            <MovieLists
              title={"Drama"}
              data={upcomming}
              image={
                "https://cdnb.artstation.com/p/assets/images/images/016/584/107/large/tyler-wetta-captain-marvel-poster2lowres.jpg?1552685170"
              }
            />

            {/* {Action} */}
            <MovieLists
              title={"Action"}
              data={upcomming}
              image={
                "https://i.pinimg.com/474x/69/2b/03/692b0316e13803007c7b53523797f4c2.jpg"
              }
            />

            {/* {kannada} */}
            <MovieLists
              title={"Kannada"}
              data={upcomming}
              image={
                "https://i.pinimg.com/474x/37/9b/33/379b337fcb2e67607b7f614b6b1863b3.jpg"
              }
            />

            {/* {Bollywood} */}
            <MovieLists
              title={"Bollywood"}
              data={upcomming}
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTer1pPQsBn12KZGHmjm73bFpmnblimpYx2Sw&s"
              }
            />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
    padding: Platform.OS === "ios" ? 0 : 10,
  },
  mainBox: {
    flex: 1,
  },
  heading: {
    color: "white",
    fontSize: 14,
    fontWeight: 600,
  },
  searchBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logotxt: {
    fontSize: 22,
    fontWeight: 800,
    color: "white",
  },
  scrollviewContainer: {
    marginTop: 35,
    flex: 1,
  },
});
