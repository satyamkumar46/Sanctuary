import { EvilIcons, Feather, MaterialIcons } from "@expo/vector-icons";
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

const specialties = [
  { name: "General", icon: "medical-services" },
  { name: "Dental", icon: "healing" },
  { name: "Eye Care", icon: "visibility" },
  { name: "Heart", icon: "favorite" },
  { name: "Brain", icon: "psychology" },
  { name: "Mental", icon: "self-improvement" },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      {/* HEADER */}
      <View style={styles.topHeader}>
        <View style={styles.leftTopHeaderContainer}>
          <Image
            source={require("../../../assets/images/face.jpg")}
            style={styles.profileImage}
          />
          <Text style={styles.leftHeaderText}>Sanctuary</Text>
        </View>

        <MaterialIcons
          name="notifications-none"
          color="#2563EB"
          size={moderateScale(26)}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* GREETING */}
        <Text style={styles.greeting}>GOOD MORNING, SATYAM</Text>

        {/* TITLE */}
        <Text style={styles.title}>
          Your health is <Text style={styles.highlight}>our sanctuary.</Text>
        </Text>

        {/* DESCRIPTION */}
        <Text style={styles.desc}>
          Find the specialized care you deserve. Book consultations with
          world-class practitioners in minutes.
        </Text>

        {/* SEARCH */}
        <View style={styles.searchBox}>
          <MaterialIcons name="search" size={moderateScale(20)} color="#999" />

          <TextInput
            placeholder="Search doctors, specialties..."
            placeholderTextColor="#999"
            style={styles.input}
          />

          <TouchableOpacity style={styles.searchBtn}>
            <Text style={styles.searchText}>Search</Text>
          </TouchableOpacity>
        </View>

        {/* SPECIALITIES */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>Specialties</Text>
            <Text style={styles.sectionSub}>
              Tailored care across all medical disciplines
            </Text>
          </View>
        </View>

        {/* GRID */}
        <View style={styles.grid}>
          {specialties.map((item, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.iconCircle}>
                <MaterialIcons
                  name={item.icon}
                  size={moderateScale(22)}
                  color="#2563EB"
                />
              </View>

              <Text style={styles.cardText}>{item.name}</Text>
            </View>
          ))}
        </View>

        {/* APPOINTMENTS */}
        <Text style={styles.sectionTitle}>Upcoming Appointments</Text>

        {[1, 2].map((_, i) => (
          <View key={i} style={styles.appointmentCard}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
              }}
              style={styles.doctorImg}
            />

            <Text style={styles.docName}>
              {i === 0 ? "Dr. Aris Thorne" : "Dr. Sarah Jenkins"}
            </Text>

            <Text style={styles.docSpec}>
              {i === 0 ? "Dental Examination" : "Eye Screening"}
            </Text>

            <View style={styles.row}>
              <View style={styles.metaContainer}>
                <EvilIcons name="calendar" color="#2563EB" size={24} />
                <Text style={styles.meta}>Oct 24, 2026</Text>
              </View>

              <View style={styles.metaContainer}>
                <Feather name="clock" color="#2563EB" size={20} />
                <Text style={styles.meta}> 10:30 AM</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.detailsBtn}>
              <Text>Details</Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* CTA */}
        <View style={styles.cta}>
          <Text style={styles.ctaTitle}>Need to see a specialist?</Text>

          <Text style={styles.ctaDesc}>
            Instant booking for virtual or in-person consultations.
          </Text>

          <TouchableOpacity
            style={styles.ctaBtn}
            onPress={() => navigation.navigate("APPOINMENT")}
          >
            <Text style={styles.ctaBtnText}>Book Appointment</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#F5F6F8",
  },

  topHeader: {
    marginTop: verticalScale(55),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(18),
    backgroundColor: "#fff",

    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  leftTopHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  profileImage: {
    height: moderateScale(42),
    width: moderateScale(42),
    borderRadius: moderateScale(20),
  },

  leftHeaderText: {
    fontSize: moderateScale(25),
    fontWeight: "600",
    color: "#2563EB",
    marginLeft: scale(10),
  },

  greeting: {
    marginTop: verticalScale(10),
    marginHorizontal: scale(16),
    fontSize: moderateScale(12),
    color: "#2563EB",
    fontWeight: "600",
  },

  title: {
    fontSize: moderateScale(26),
    fontWeight: "bold",
    marginHorizontal: scale(16),
    marginTop: verticalScale(6),
  },

  highlight: {
    color: "#2563EB",
  },

  desc: {
    marginHorizontal: scale(16),
    marginTop: verticalScale(10),
    color: "#666",
    lineHeight: moderateScale(20),
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    margin: scale(16),
    backgroundColor: "#fff",
    borderRadius: moderateScale(12),
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(6),

    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },

  input: {
    flex: 1,
    marginLeft: scale(8),
  },

  searchBtn: {
    backgroundColor: "#2563EB",
    paddingHorizontal: scale(14),
    paddingVertical: verticalScale(6),
    borderRadius: moderateScale(10),
  },

  searchText: {
    color: "#fff",
    fontWeight: "600",
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: scale(16),
    marginTop: verticalScale(10),
  },

  sectionTitle: {
    fontSize: moderateScale(18),
    fontWeight: "700",
    marginHorizontal: scale(16),
    marginTop: verticalScale(10),
  },

  sectionSub: {
    fontSize: moderateScale(12),
    color: "#777",
  },

  viewAll: {
    color: "#2563EB",
    fontWeight: "600",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: scale(16),
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: moderateScale(16),
    padding: scale(14),
    marginBottom: verticalScale(12),
    alignItems: "center",

    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },

  iconCircle: {
    width: moderateScale(44),
    height: moderateScale(44),
    borderRadius: moderateScale(22),
    backgroundColor: "#EAF1FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: verticalScale(8),
  },

  cardText: {
    fontWeight: "600",
  },

  appointmentCard: {
    backgroundColor: "#fff",
    margin: scale(16),
    borderRadius: moderateScale(16),
    padding: scale(16),
    alignItems: "center",

    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
  },

  doctorImg: {
    width: moderateScale(60),
    height: moderateScale(60),
    marginBottom: verticalScale(10),
  },

  docName: {
    fontWeight: "700",
    fontSize: moderateScale(16),
  },

  docSpec: {
    color: "#666",
    marginBottom: verticalScale(10),
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  metaContainer: {
    backgroundColor: "#F2F4F6",
    borderRadius: moderateScale(10),
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(6),
    flexDirection: "row",
    alignItems: "center",
  },

  meta: {
    color: "#2563EB",
    fontSize: moderateScale(12),
  },

  detailsBtn: {
    marginTop: verticalScale(10),
    backgroundColor: "#eee",
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(6),
    borderRadius: moderateScale(10),
  },

  cta: {
    margin: scale(16),
    backgroundColor: "#2563EB",
    borderRadius: moderateScale(20),
    padding: scale(20),

    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },

  ctaTitle: {
    color: "#fff",
    fontSize: moderateScale(20),
    fontWeight: "700",
  },

  ctaDesc: {
    color: "#E0E7FF",
    marginVertical: verticalScale(10),
  },

  ctaBtn: {
    backgroundColor: "#fff",
    padding: scale(12),
    borderRadius: moderateScale(12),
    alignItems: "center",
  },

  ctaBtnText: {
    color: "#2563EB",
    fontWeight: "700",
  },
});
