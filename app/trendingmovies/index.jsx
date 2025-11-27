import { useRouter } from "expo-router";
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "react-native-snap-carousel";

const { width, height } = Dimensions.get("window");

const TrendingMovies = ({ data }) => {
  const router = useRouter();

  // handle Click Function
  const handleCLick = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Trending Movies</Text>
      <Carousel
        data={data}
        renderItem={({ item }) => (
          <MovieCard item={item} handleCLick={handleCLick} />
        )}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{ display: "flex", justifyContent: "center" }}
      />
    </View>
  );
};

export default TrendingMovies;

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: 800,
  },
});

const MovieCard = ({ item, handleCLick }) => {
  return (
    <TouchableOpacity style={[{ elevation: 3 }]} onPress={handleCLick}>
      <Image
        source={{
          uri: "https://cdnb.artstation.com/p/assets/images/images/016/584/107/large/tyler-wetta-captain-marvel-poster2lowres.jpg?1552685170",
        }}
        style={{
          width: width * 0.6,
          height: height * 0.4,
          borderRadius: Platform.OS === "ios" ? 5 : 10,
        }}
      />
    </TouchableOpacity>
  );
};
