import { View, Text, StyleSheet } from 'react-native';
import React, { useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const categories = [
    {
        name: "Tiny homes",
        icon: "home"
    },
    {
        name: "Cabins",
        icon: "house-siding"
    },
    {
        name: "Trending",
        icon: "local-fire-department"
    },
    {
        name: "Play",
        icon: "videogame-asset"
    },
    {
        name: "City",
        icon: "apartment"
    },
    {
        name: "Beachfront",
        icon: "beach-access"
    },
    {
        name: "Countryside",
        icon: "nature-people"
    },
]

const ExploreHeader = () => {
    const itemRef = useRef<Array<TouchableOpacity | null>>([]);
    const [activeCategoryIndex, selectCategoryIndex] = useState(0);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={styles.container}>
                <View style={styles.actionRow}>
                    <Link href={"/(modals)/booking"} asChild>
                        <TouchableOpacity style={styles.searchBtn}>
                            <Ionicons name="search" size={24} />
                            <View>
                                <Text style={{ fontFamily: "mon-sb" }}>Where to?</Text>
                                <Text style={{ fontFamily: "mon", color: Colors.grey }}>Anywhere • Any week</Text>
                            </View>
                        </TouchableOpacity>
                    </Link>

                    <TouchableOpacity style={styles.filterBtn}>
                        <Ionicons name="options-outline" size={24} />
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scrollViewContainer}
                >
                    {categories.map((item, index) => (
                        <TouchableOpacity
                            onPress={() => selectCategoryIndex(index)}
                            key={index}
                            ref={(el) => itemRef.current[index] = el}
                            style={activeCategoryIndex === index ? styles.categoriesBtnActive : styles.categoriesBtn}
                        >
                            <MaterialIcons size={24} name={item.icon as any}
                                color={activeCategoryIndex === index ? "#000" : Colors.grey}
                            />
                            <Text style={activeCategoryIndex === index ? styles.categoryTextActive : styles.categoryText}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        height: 130
    },
    actionRow: {
        height: 80,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        paddingBottom: 16,
        gap: 10,
    },
    searchBtn: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: "#c2c2c2",
        borderWidth: StyleSheet.hairlineWidth,
        flex: 1,
        gap: 10,
        padding: 14,
        borderRadius: 30,
        backgroundColor: "#fff",

        elevation: 2,
        shadowColor: "#000",
        shadowOpacity: 0.12,
        shadowRadius: 8,
        shadowOffset: {
            width: 1,
            height: 1,
        }
    },
    filterBtn: {
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.grey,
        borderRadius: 24
    },
    scrollViewContainer: {
        alignItems: "center",
        gap: 20,
        paddingHorizontal: 16
    },
    categoriesBtn: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 8,
    },
    categoriesBtnActive: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 8,
        borderBottomColor: "#000",
        borderBottomWidth: 2,
    },
    categoryText: {
        fontSize: 14,
        fontFamily: 'mon-sb',
        color: Colors.grey,
    },
    categoryTextActive: {
        fontSize: 14,
        fontFamily: 'mon-sb',
        color: '#000',
    },
})

export default ExploreHeader