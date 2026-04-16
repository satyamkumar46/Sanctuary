import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
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

const AppointmentScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(6);
  const [selectedTime, setSelectedTime] = useState("02:00 PM");

  const dates = [2, 3, 4, 5, 6, 7, 8];

  const morningSlots = ["09:00 AM", "09:45 AM", "10:30 AM", "11:15 AM"];
  const afternoonSlots = ["02:00 PM", "02:45 PM", "03:30 PM", "04:15 PM"];

  const renderSlot = (item) => {
    const isSelected = selectedTime === item;

    return (
      <TouchableOpacity
        key={item}
        onPress={() => setSelectedTime(item)}
        style={[styles.slot, isSelected && styles.activeSlot]}
      >
        <Text style={[styles.slotText, isSelected && styles.activeSlotText]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={20} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Sanctuary</Text>

        <Image
          source={require("../../../assets/images/face.jpg")}
          style={styles.headerAvatar}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* TITLE */}
        <Text style={styles.title}>Finalize your visit</Text>
        <Text style={styles.subtitle}>
          Confirm your details below to secure your clinical consultation.
        </Text>

        {/* DATE CARD */}
        <View style={styles.card}>
          <View style={styles.rowBetween}>
            <Text style={styles.cardTitle}>Select Date</Text>
            <Text style={styles.month}>October 2023</Text>
          </View>

          <View style={styles.dateRow}>
            {dates.map((d) => {
              const isSelected = d === selectedDate;

              return (
                <TouchableOpacity
                  key={d}
                  onPress={() => setSelectedDate(d)}
                  style={[styles.dateItem, isSelected && styles.activeDate]}
                >
                  <Text
                    style={[
                      styles.dateText,
                      isSelected && styles.activeDateText,
                    ]}
                  >
                    {d}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* TIME CARD */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Available Times</Text>

          <Text style={styles.sectionLabel}>MORNING</Text>
          <View style={styles.slotContainer}>
            {morningSlots.map(renderSlot)}
          </View>

          <Text style={styles.sectionLabel}>AFTERNOON</Text>
          <View style={styles.slotContainer}>
            {afternoonSlots.map(renderSlot)}
          </View>
        </View>

        {/* NOTES */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Patient Notes (Optional)</Text>

          <TextInput
            placeholder="Describe symptoms..."
            placeholderTextColor="#aaa"
            multiline
            style={styles.textArea}
          />
        </View>

        {/* SUMMARY */}
        <View style={styles.summary}>
          <Text style={styles.cardTitle}>Appointment Summary</Text>

          <View style={styles.doctorRow}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
              }}
              style={styles.docImg}
            />

            <View>
              <Text style={styles.docName}>Dr. Julian Vance</Text>
              <Text style={styles.docSpec}>Senior Cardiologist</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Service</Text>
            <Text>General Heart Screening</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Date & Time</Text>
            <Text>
              Oct {selectedDate} • {selectedTime}
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Location</Text>
            <Text>Sanctuary Medical Center</Text>
          </View>

          <View style={styles.priceRow}>
            <Text>Consultation Fee</Text>
            <Text>$120</Text>
          </View>

          <View style={styles.priceRow}>
            <Text>Facility Tax</Text>
            <Text>$12</Text>
          </View>

          <View style={styles.totalRow}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalAmount}>$132</Text>
          </View>
        </View>

        {/* CTA */}
        <TouchableOpacity style={styles.cta}>
          <Text style={styles.ctaText}>Confirm Booking →</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default AppointmentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6F8",
  },

  header: {
    marginTop: verticalScale(55),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(20),
    paddingBottom: verticalScale(10),

    backgroundColor: "#fff",
    elevation: 4,
    shadowOpacity: 0.08,
  },

  headerTitle: {
    fontSize: moderateScale(16),
    fontWeight: "600",
    color: "#2563EB",
  },

  headerAvatar: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
  },

  title: {
    fontSize: moderateScale(26),
    fontWeight: "700",
    margin: scale(16),
  },

  subtitle: {
    marginHorizontal: scale(16),
    color: "#666",
  },

  card: {
    backgroundColor: "#fff",
    margin: scale(16),
    padding: scale(16),
    borderRadius: moderateScale(16),

    elevation: 3,
    shadowOpacity: 0.05,
  },

  cardTitle: {
    fontWeight: "700",
    fontSize: moderateScale(16),
    marginBottom: verticalScale(10),
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  month: {
    color: "#666",
  },

  dateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  dateItem: {
    padding: scale(10),
    borderRadius: moderateScale(10),
    backgroundColor: "#eee",
  },

  activeDate: {
    backgroundColor: "#2563EB",
  },

  dateText: {
    color: "#333",
  },

  activeDateText: {
    color: "#fff",
  },

  sectionLabel: {
    marginTop: verticalScale(10),
    color: "#888",
    fontSize: moderateScale(12),
  },

  slotContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: verticalScale(8),
  },

  slot: {
    width: "48%",
    padding: scale(10),
    backgroundColor: "#eee",
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(8),
    alignItems: "center",
  },

  activeSlot: {
    backgroundColor: "#2563EB",
  },

  slotText: {
    color: "#333",
  },

  activeSlotText: {
    color: "#fff",
    fontWeight: "600",
  },

  textArea: {
    height: verticalScale(80),
    backgroundColor: "#f0f0f0",
    borderRadius: moderateScale(10),
    padding: scale(10),
    textAlignVertical: "top",
  },

  summary: {
    backgroundColor: "#fff",
    margin: scale(16),
    padding: scale(16),
    borderRadius: moderateScale(16),
  },

  doctorRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(10),
  },

  docImg: {
    width: moderateScale(50),
    height: moderateScale(50),
    marginRight: scale(10),
  },

  docName: {
    fontWeight: "700",
  },

  docSpec: {
    color: "#666",
  },

  infoRow: {
    marginVertical: verticalScale(5),
  },

  label: {
    color: "#888",
    fontSize: moderateScale(12),
  },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: verticalScale(6),
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: verticalScale(10),
  },

  totalText: {
    fontWeight: "700",
  },

  totalAmount: {
    fontWeight: "700",
    color: "#2563EB",
  },

  cta: {
    margin: scale(16),
    backgroundColor: "#2563EB",
    padding: scale(16),
    borderRadius: moderateScale(14),
    alignItems: "center",
  },

  ctaText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: moderateScale(16),
  },
});
