import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { moderateScale, scale, verticalScale } from "../../utility/helper";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* PROFILE HEADER */}
        <View style={styles.profileSection}>
          <View style={styles.avatarWrapper}>
            <Image
              source={require("../../../assets/images/doctor1.png")}
              style={styles.avatar}
            />

            {/* EDIT ICON */}
            <TouchableOpacity style={styles.editIcon}>
              <MaterialIcons name="edit" size={16} color="#fff" />
            </TouchableOpacity>
          </View>

          <Text style={styles.name}>Elena Rodriguez</Text>
          <Text style={styles.id}>Patient ID: #SAN-99201-ER</Text>

          {/* BUTTONS */}
          <View style={styles.btnRow}>
            <TouchableOpacity style={styles.primaryBtn}>
              <Text style={styles.primaryText}>View Digital ID</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.secondaryBtn}>
              <Text style={styles.secondaryText}>Share Records</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* HEALTH CARDS */}
        <View style={styles.card}>
          <View style={styles.cardRow}>
            <View>
              <Text style={styles.cardLabel}>Blood Type</Text>
              <Text style={styles.cardValueBlue}>A+</Text>
            </View>

            <View style={styles.iconBgRed}>
              <MaterialIcons name="opacity" size={20} color="#DC2626" />
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardRow}>
            <View>
              <Text style={styles.cardLabel}>Heart Rate</Text>
              <Text style={styles.cardValue}>72 bpm</Text>
            </View>

            <View style={styles.iconBgBlue}>
              <MaterialIcons name="favorite-border" size={20} color="#2563EB" />
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardRow}>
            <View>
              <Text style={styles.cardLabel}>Weight</Text>
              <Text style={styles.cardValue}>64 kg</Text>
            </View>

            <View style={styles.iconBgBlue}>
              <MaterialIcons name="monitor-weight" size={20} color="#2563EB" />
            </View>
          </View>
        </View>

        {/* ACCOUNT SETTINGS */}
        <Text style={styles.sectionTitle}>Account Settings</Text>

        <View style={styles.settingsCard}>
          {[
            { label: "Personal Information", icon: "person-outline" },
            { label: "Medical History", icon: "assignment" },
            { label: "Insurance", icon: "verified-user" },
            { label: "App Settings", icon: "settings" },
          ].map((item, i) => (
            <TouchableOpacity key={i} style={styles.settingRow}>
              <View style={styles.settingLeft}>
                <View style={styles.settingIconBox}>
                  <MaterialIcons name={item.icon} size={20} color="#2563EB" />
                </View>

                <Text style={styles.settingText}>{item.label}</Text>
              </View>

              <MaterialIcons name="chevron-right" size={20} color="#999" />
            </TouchableOpacity>
          ))}
        </View>

        {/* FOOTER */}
        <TouchableOpacity style={styles.support}>
          <MaterialIcons name="help-outline" size={18} color="#555" />
          <Text style={styles.supportText}>Support & Feedback</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logout}>
          <MaterialIcons name="logout" size={18} color="#DC2626" />
          <Text style={styles.logoutText}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6F8",
  },

  profileSection: {
    alignItems: "center",
    marginTop: verticalScale(90),
  },

  avatarWrapper: {
    position: "relative",
  },

  avatar: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(50),
    borderWidth: 3,
    borderColor: "#2563EB",
  },

  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#2563EB",
    padding: scale(6),
    borderRadius: moderateScale(20),
  },

  name: {
    fontSize: moderateScale(22),
    fontWeight: "700",
    marginTop: verticalScale(10),
  },

  id: {
    color: "#666",
    marginTop: verticalScale(4),
  },

  btnRow: {
    flexDirection: "row",
    marginTop: verticalScale(15),
  },

  primaryBtn: {
    backgroundColor: "#2563EB",
    padding: scale(12),
    borderRadius: moderateScale(12),
    marginRight: scale(10),
  },

  primaryText: {
    color: "#fff",
    fontWeight: "600",
  },

  secondaryBtn: {
    backgroundColor: "#E5E7EB",
    padding: scale(12),
    borderRadius: moderateScale(12),
  },

  secondaryText: {
    color: "#333",
  },

  card: {
    backgroundColor: "#fff",
    margin: scale(16),
    padding: scale(16),
    borderRadius: moderateScale(16),
    elevation: 3,
  },

  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardLabel: {
    color: "#666",
  },

  cardValue: {
    fontSize: moderateScale(18),
    fontWeight: "700",
  },

  cardValueBlue: {
    fontSize: moderateScale(20),
    fontWeight: "700",
    color: "#2563EB",
  },

  iconBgRed: {
    backgroundColor: "#FEE2E2",
    padding: scale(10),
    borderRadius: moderateScale(12),
  },

  iconBgBlue: {
    backgroundColor: "#EAF1FF",
    padding: scale(10),
    borderRadius: moderateScale(12),
  },

  sectionTitle: {
    fontSize: moderateScale(18),
    fontWeight: "700",
    marginHorizontal: scale(16),
    marginTop: verticalScale(10),
  },

  settingsCard: {
    backgroundColor: "#fff",
    margin: scale(16),
    borderRadius: moderateScale(16),
    paddingVertical: verticalScale(10),
  },

  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(14),
  },

  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  settingIconBox: {
    backgroundColor: "#EAF1FF",
    padding: scale(8),
    borderRadius: moderateScale(10),
    marginRight: scale(10),
  },

  settingText: {
    fontWeight: "500",
  },

  support: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: scale(16),
    marginTop: verticalScale(10),
  },

  supportText: {
    marginLeft: scale(8),
    color: "#555",
  },

  logout: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: scale(16),
    marginTop: verticalScale(16),
    marginBottom: verticalScale(30),
  },

  logoutText: {
    marginLeft: scale(8),
    color: "#DC2626",
    fontWeight: "600",
  },
});
