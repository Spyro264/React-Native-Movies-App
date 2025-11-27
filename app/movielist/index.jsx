import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

const MovieLists = ({ title, data, image }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headingcontainer}>
        <Text style={styles.text}>{title}</Text>
        <TouchableOpacity style={styles.touchableopacity}>
          <Text style={[styles.text, { color: "#fed250", fontWeight: 400 }]}>
            See all
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          gap: 15,
          marginTop: 10,
        }}
      >
        {data?.map((item, index) => {
          return (
            <TouchableOpacity key={index}>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image
                  source={{
                    uri: image,
                  }}
                  style={{
                    width: width * 0.48,
                    height: height * 0.32,
                    borderRadius: 20,
                  }}
                />
                <Text
                  style={[
                    styles.text,
                    { color: "white", width: "auto", fontWeight: 500 },
                  ]}
                >
                  Avnengers
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MovieLists;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: 800,
  },
  headingcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
