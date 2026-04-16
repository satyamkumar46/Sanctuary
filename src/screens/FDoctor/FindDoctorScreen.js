import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { moderateScale, scale, verticalScale } from "../../utility/helper";

const doctors = [
  {
    id: 1,
    name: "Dr. Elena Rodriguez",
    specialty: "Senior Cardiologist",
    experience: "12 Years",
    rating: "4.9",
    image: require("../../../assets/images/doctor1.png"),
    location: "Mary’s Medical Plaza • 1.2 mi",
    next: "Tomorrow, 09:30 AM",
  },
  {
    id: 2,
    name: "Dr. Julian Vance",
    specialty: "Neurologist",
    experience: "8 Years",
    rating: "4.8",
    image: require("../../../assets/images/doctor2.png"),
    location: "Lakeside Specialty Ctr • 3.5 mi",
    next: "Oct 14, 02:00 PM",
  },
  {
    id: 3,
    name: "Dr. Sarah khalil",
    specialty: "Dermotologist",
    experience: "13 Years",
    rating: "5.0",
    image: require("../../../assets/images/doctor3.png"),
    location: "Lakeside Specialty Ctr • 3.5 mi",
    next: "Oct 15, 02:00 PM",
  },
];

const FindSpecialistScreen = () => {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={require("../../../assets/images/doctor1.png")}
            style={styles.avatar}
          />
          <Text style={styles.logo}>Sanctuary</Text>
        </View>

        <MaterialIcons name="notifications-none" size={24} color="#2563EB" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* TITLE */}
        <Text style={styles.title}>Find your specialist</Text>
        <Text style={styles.subtitle}>
          Curated medical excellence within your reach.
        </Text>

        {/* SEARCH */}
        <View style={styles.searchBox}>
          <MaterialIcons name="search" size={20} color="#2563EB" />
          <TextInput
            placeholder="Search by name, clinic..."
            style={styles.input}
          />
        </View>

        {/* FILTER BUTTONS */}
        <View style={styles.filterRow}>
          <TouchableOpacity style={styles.filterBtn}>
            <Text>⚙ Filters</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.searchBtn}>
            <Text style={styles.searchText}>Search</Text>
          </TouchableOpacity>
        </View>

        {/* FILTER CHIPS */}
        <View style={styles.chips}>
          <Text style={styles.chip}>Specialty: All</Text>
          <Text style={styles.chip}>Rating: 4.5+</Text>
          <Text style={styles.chip}>Distance: &lt; 5 miles</Text>
          <Text style={styles.chip}>Available Today</Text>
        </View>

        {/* DOCTOR LIST */}
        {doctors.map((doc) => (
          <View key={doc.id} style={styles.card}>
            <Image
              source={
                typeof doc.image === "string" ? { uri: doc.image } : doc.image
              }
              style={styles.docImage}
            />

            {/* RATING */}
            <View style={styles.rating}>
              <Text style={styles.ratingText}>⭐ {doc.rating}</Text>
            </View>

            <View style={styles.cardContent}>
              <View style={styles.rowBetween}>
                <Text style={styles.docName}>{doc.name}</Text>
                <Text style={styles.exp}>Experience {doc.experience}</Text>
              </View>

              <Text style={styles.specialty}>{doc.specialty}</Text>
              <Text style={styles.location}>📍 {doc.location}</Text>

              <View style={styles.rowBetween}>
                <Text style={styles.next}>Next Available: {doc.next}</Text>

                <TouchableOpacity style={styles.bookBtn}>
                  <Text style={styles.bookText}>Book</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        {/* SPECIALTY */}
        <Text style={styles.sectionTitle}>Browse by Specialty</Text>

        <View style={styles.specialContainer}>
          {/* BIG CARD */}
          <View style={styles.bigCard}>
            <View style={styles.iconBox}>
              <MaterialIcons name="favorite-border" size={22} color="#fff" />
            </View>

            <Text style={styles.bigTitle}>Cardiology</Text>
            <Text style={styles.bigSub}>24 Specialists nearby</Text>
          </View>

          {/* GRID */}
          <View style={styles.grid}>
            {[
              { name: "Mental Health", icon: "psychology" },
              { name: "Pediatrics", icon: "child-care" },
              { name: "Eye Care", icon: "visibility" },
              { name: "Dentistry", icon: "medical-services" },
            ].map((item, i) => (
              <View key={i} style={styles.smallCard}>
                <View style={styles.smallIconBox}>
                  <MaterialIcons name={item.icon} size={20} color="#2563EB" />
                </View>

                <Text style={styles.smallText}>{item.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FindSpecialistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6F8",
  },

  header: {
    marginTop: verticalScale(50),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(20),
    paddingBottom: verticalScale(10),

    backgroundColor: "#fff",
    elevation: 4,
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: moderateScale(36),
    height: moderateScale(36),
    borderRadius: moderateScale(18),
    marginRight: scale(8),
  },

  logo: {
    color: "#2563EB",
    fontWeight: "600",
    fontSize: scale(20),
  },

  title: {
    fontSize: moderateScale(24),
    fontWeight: "700",
    margin: scale(16),
  },

  subtitle: {
    marginHorizontal: scale(16),
    color: "#666",
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    margin: scale(16),
    backgroundColor: "#fff",
    padding: scale(10),
    borderRadius: moderateScale(12),
  },

  input: {
    marginLeft: scale(8),
    flex: 1,
  },

  filterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: scale(16),
  },

  filterBtn: {
    backgroundColor: "#eee",
    padding: scale(12),
    borderRadius: moderateScale(12),
    width: "48%",
    alignItems: "center",
  },

  searchBtn: {
    backgroundColor: "#2563EB",
    padding: scale(12),
    borderRadius: moderateScale(12),
    width: "48%",
    alignItems: "center",
  },

  searchText: {
    color: "#fff",
    fontWeight: "600",
  },

  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: scale(16),
  },

  chip: {
    backgroundColor: "#EAF1FF",
    padding: scale(6),
    borderRadius: moderateScale(10),
    marginRight: scale(6),
    marginBottom: scale(6),
    fontSize: moderateScale(12),
  },

  card: {
    backgroundColor: "#fff",
    margin: scale(16),
    borderRadius: moderateScale(16),
    overflow: "hidden",
    elevation: 4,
  },

  docImage: {
    width: "100%",
    height: verticalScale(400),
  },

  rating: {
    position: "absolute",
    top: scale(10),
    right: scale(10),
    backgroundColor: "#fff",
    padding: scale(5),
    borderRadius: 10,
  },

  ratingText: {
    fontSize: moderateScale(12),
  },

  cardContent: {
    padding: scale(12),
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  docName: {
    fontWeight: "700",
  },

  exp: {
    fontSize: moderateScale(10),
    color: "#666",
  },

  specialty: {
    color: "#2563EB",
    marginVertical: verticalScale(4),
  },

  location: {
    color: "#666",
    fontSize: moderateScale(12),
  },

  next: {
    fontSize: moderateScale(12),
    color: "#888",
  },

  bookBtn: {
    backgroundColor: "#2563EB",
    paddingHorizontal: scale(12),
    paddingVertical: scale(6),
    borderRadius: moderateScale(8),
  },

  bookText: {
    color: "#fff",
  },

  sectionTitle: {
    fontWeight: "700",
    margin: scale(16),
    fontSize: moderateScale(16),
  },

  specialGrid: {
    marginHorizontal: scale(16),
  },

  bigCard: {
    backgroundColor: "#2563EB",
    borderRadius: moderateScale(24),
    padding: scale(20),
    marginBottom: verticalScale(16),
    marginHorizontal: scale(20),
  },

  iconBox: {
    width: moderateScale(44),
    height: moderateScale(44),
    borderRadius: moderateScale(14),
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: verticalScale(10),
  },

  bigTitle: {
    color: "#fff",
    fontSize: moderateScale(20),
    fontWeight: "700",
  },

  bigSub: {
    color: "#E0E7FF",
    marginTop: verticalScale(4),
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  smallCard: {
    width: "48%",
    backgroundColor: "#F3F4F6",
    borderRadius: moderateScale(20),
    padding: scale(16),
    alignItems: "center",
    marginBottom: verticalScale(12),
  },

  smallIconBox: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(12),
    backgroundColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: verticalScale(8),
  },

  smallText: {
    fontWeight: "600",
    fontSize: moderateScale(14),
  },
});
