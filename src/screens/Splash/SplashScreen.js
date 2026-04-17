import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  StatusBar,
  Easing,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { scale, verticalScale, moderateScale } from "../../utility/helper";

const SplashScreen = ({ navigation }) => {
  // Animation values
  const logoScale = useRef(new Animated.Value(0.3)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const titleTranslateY = useRef(new Animated.Value(20)).current;
  const subtitleOpacity = useRef(new Animated.Value(0)).current;
  const dotScale = useRef(new Animated.Value(0)).current;
  const dotOpacity = useRef(new Animated.Value(0)).current;
  const loaderWidth = useRef(new Animated.Value(0)).current;
  const loaderOpacity = useRef(new Animated.Value(0)).current;
  const footerOpacity = useRef(new Animated.Value(0)).current;
  const dotPulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Sequence of animations
    Animated.sequence([
      // 1. Logo appears with scale + fade
      Animated.parallel([
        Animated.spring(logoScale, {
          toValue: 1,
          friction: 6,
          tension: 40,
          useNativeDriver: true,
        }),
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
      ]),
      // 2. Blue dot appears
      Animated.parallel([
        Animated.spring(dotScale, {
          toValue: 1,
          friction: 5,
          tension: 50,
          useNativeDriver: true,
        }),
        Animated.timing(dotOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]),
      // 3. Title + subtitle fade in
      Animated.parallel([
        Animated.timing(titleOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(titleTranslateY, {
          toValue: 0,
          duration: 500,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(subtitleOpacity, {
          toValue: 1,
          duration: 600,
          delay: 200,
          useNativeDriver: true,
        }),
      ]),
      // 4. Loader + footer appear
      Animated.parallel([
        Animated.timing(loaderOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(loaderWidth, {
          toValue: 1,
          duration: 1200,
          easing: Easing.inOut(Easing.cubic),
          useNativeDriver: false,
        }),
        Animated.timing(footerOpacity, {
          toValue: 1,
          duration: 500,
          delay: 200,
          useNativeDriver: true,
        }),
      ]),
    ]).start();

    // Dot pulse animation (continuous)
    const pulseAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(dotPulse, {
          toValue: 1.3,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(dotPulse, {
          toValue: 1,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    );
    pulseAnimation.start();

    // Navigate to HomeStack after splash
    const timer = setTimeout(() => {
      navigation.replace("HomeStack");
    }, 3500);

    return () => {
      clearTimeout(timer);
      pulseAnimation.stop();
    };
  }, [navigation]);

  const loaderInterpolatedWidth = loaderWidth.interpolate({
    inputRange: [0, 1],
    outputRange: [0, scale(50)],
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#EFF6FF" />

      {/* Main content area */}
      <View style={styles.contentContainer}>
        {/* Logo container */}
        <View style={styles.logoSection}>
          <Animated.View
            style={[
              styles.logoWrapper,
              {
                transform: [{ scale: logoScale }],
                opacity: logoOpacity,
              },
            ]}
          >
            {/* White rounded icon container */}
            <View style={styles.iconContainer}>
              <View style={styles.shieldIcon}>
                <MaterialCommunityIcons
                  name="shield-cross"
                  size={moderateScale(38)}
                  color="#1A73E8"
                />
              </View>
            </View>

            {/* Blue dot */}
            <Animated.View
              style={[
                styles.blueDot,
                {
                  transform: [{ scale: Animated.multiply(dotScale, dotPulse) }],
                  opacity: dotOpacity,
                },
              ]}
            />
          </Animated.View>

          {/* Title */}
          <Animated.Text
            style={[
              styles.title,
              {
                opacity: titleOpacity,
                transform: [{ translateY: titleTranslateY }],
              },
            ]}
          >
            Sanctuary
          </Animated.Text>

          {/* Subtitle */}
          <Animated.Text
            style={[
              styles.subtitle,
              {
                opacity: subtitleOpacity,
              },
            ]}
          >
            YOUR PERSONAL CARE SPACE
          </Animated.Text>
        </View>
      </View>

      {/* Bottom section */}
      <View style={styles.bottomSection}>
        {/* Loading bar */}
        <Animated.View style={[styles.loaderTrack, { opacity: loaderOpacity }]}>
          <Animated.View
            style={[
              styles.loaderBar,
              {
                width: loaderInterpolatedWidth,
              },
            ]}
          />
        </Animated.View>

        {/* Secure Clinical Gateway */}
        <Animated.View
          style={[styles.footerContainer, { opacity: footerOpacity }]}
        >
          <MaterialCommunityIcons
            name="shield-check"
            size={moderateScale(18)}
            color="#1A73E8"
          />
          <Text style={styles.footerText}>SECURE CLINICAL GATEWAY</Text>
        </Animated.View>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF6FF",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoSection: {
    alignItems: "center",
  },
  logoWrapper: {
    position: "relative",
    marginBottom: verticalScale(24),
  },
  iconContainer: {
    width: scale(100),
    height: scale(100),
    borderRadius: scale(28),
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#A0C4FF",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 24,
    elevation: 12,
  },
  shieldIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
  blueDot: {
    position: "absolute",
    top: -scale(4),
    right: -scale(8),
    width: scale(18),
    height: scale(18),
    borderRadius: scale(9),
    backgroundColor: "#4DA3FF",
  },
  title: {
    fontSize: moderateScale(38),
    fontWeight: "700",
    color: "#1A73E8",
    letterSpacing: -0.5,
    marginBottom: verticalScale(6),
  },
  subtitle: {
    fontSize: moderateScale(12),
    fontWeight: "500",
    color: "#8BADC9",
    letterSpacing: moderateScale(3),
  },
  bottomSection: {
    alignItems: "center",
    paddingBottom: verticalScale(50),
  },
  loaderTrack: {
    width: scale(50),
    height: verticalScale(4),
    borderRadius: verticalScale(2),
    backgroundColor: "#D6E8FA",
    marginBottom: verticalScale(28),
    overflow: "hidden",
  },
  loaderBar: {
    height: "100%",
    borderRadius: verticalScale(2),
    backgroundColor: "#1A73E8",
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(6),
  },
  footerText: {
    fontSize: moderateScale(11),
    fontWeight: "600",
    color: "#8BADC9",
    letterSpacing: moderateScale(1.5),
  },
});