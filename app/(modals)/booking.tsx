import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { BlurView } from "expo-blur";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
} from "react-native-reanimated";
import { defaultStyles } from "@/constants/Styles";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { places } from "@/assets/data/places";

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const Page = () => {
  const [openCard, setOpenCard] = useState(0);
  const [selectedPlace, setSelectedPlace] = useState(0);

  const onClearAll = () => {
    setSelectedPlace(0);
    setOpenCard(0);
  };

  return (
    <BlurView intensity={70} style={styles.container}>
      {/* Where */}
      <View style={styles.card}>
        {openCard !== 0 && (
          <AnimatedTouchableOpacity
            onPress={() => setOpenCard(0)}
            style={styles.cardPreview}
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
          >
            <Text style={styles.previewText}>Where</Text>
            <Text style={styles.previewDate}>I'm flexible</Text>
          </AnimatedTouchableOpacity>
        )}

        {openCard === 0 && (
          <>
            <Animated.Text entering={FadeIn} style={styles.cardHeader}>
              Where to?
            </Animated.Text>
            <Animated.View style={styles.cardBody}>
              <View style={styles.cardSearchSection}>
                <Ionicons
                  style={styles.cardSearchIcon}
                  name="ios-search"
                  size={20}
                />
                <TextInput
                  style={styles.cardTextInput}
                  placeholder="Search destination"
                  placeholderTextColor={Colors.grey}
                ></TextInput>
              </View>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.cardScrollView}
              >
                {places.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => setSelectedPlace(index)}
                  >
                    <View
                      style={{ flexDirection: "column", alignItems: "center" }}
                    >
                      <Image
                        source={item.img}
                        style={
                          selectedPlace === index
                            ? styles.selectedCardPlace
                            : styles.cardPlace
                        }
                      />
                      <Text
                        style={[
                          { paddingTop: 6 },
                          selectedPlace === index
                            ? { fontFamily: "mon-sb" }
                            : { fontFamily: "mon" },
                        ]}
                      >
                        {item.title}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </Animated.View>
          </>
        )}
      </View>

      {/* When */}
      <View style={styles.card}>
        {openCard !== 1 && (
          <AnimatedTouchableOpacity
            onPress={() => setOpenCard(1)}
            style={styles.cardPreview}
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
          >
            <Text style={styles.previewText}>When</Text>
            <Text style={styles.previewDate}>Any week</Text>
          </AnimatedTouchableOpacity>
        )}

        {openCard === 1 && (
          <Animated.View>
            <Animated.Text entering={FadeIn} style={styles.cardHeader}>
              When's your trip?
            </Animated.Text>
          </Animated.View>
        )}
      </View>

      {/* Who  */}
      <View style={styles.card}>
        {openCard !== 2 && (
          <AnimatedTouchableOpacity
            onPress={() => setOpenCard(2)}
            style={styles.cardPreview}
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
          >
            <Text style={styles.previewText}>Who</Text>
            <Text style={styles.previewDate}>Add guests</Text>
          </AnimatedTouchableOpacity>
        )}

        {openCard === 2 && (
          <Animated.View>
            <Animated.Text entering={FadeIn} style={styles.cardHeader}>
              Who's coming?
            </Animated.Text>
          </Animated.View>
        )}
      </View>

      {/* Footer */}
      <Animated.View
        style={defaultStyles.footer}
        entering={SlideInDown.delay(200)}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            onPress={onClearAll}
            style={{ justifyContent: "center" }}
          >
            <Text style={styles.clearAllText}>Clear all</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.back()}
            style={[defaultStyles.btn, { paddingRight: 20, paddingLeft: 50 }]}
          >
            <Ionicons
              name="search-outline"
              size={24}
              color={"#fff"}
              style={defaultStyles.btnIcon}
            />
            <Text style={defaultStyles.btnText}>Search</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
  clearAllText: {
    fontSize: 18,
    fontFamily: "mon-sb",
    textDecorationLine: "underline",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    margin: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    gap: 20,
  },
  previewText: {
    fontFamily: "mon-sb",
    fontSize: 14,
    color: Colors.grey,
  },
  previewDate: {
    fontFamily: "mon-sb",
    fontSize: 14,
    color: Colors.dark,
  },
  cardPreview: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  cardHeader: {
    fontFamily: "mon-sb",
    fontSize: 24,
    padding: 20,
  },
  cardBody: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  cardSearchSection: {
    height: 50,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ABABAB",
    borderRadius: 8,
    backgroundColor: "#fff",
    alignItems: "center",
    marginBottom: 16,
  },
  cardTextInput: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  cardSearchIcon: {
    padding: 10,
  },
  cardScrollView: {
    gap: 25,
  },
  cardPlace: {
    width: 140,
    height: 140,
    borderRadius: 10,
  },
  selectedCardPlace: {
    width: 140,
    height: 140,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.grey,
  },
});

export default Page;
