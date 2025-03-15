import { Colors } from "@/src/services/Colors";
import React from "react";
import { View, StyleSheet } from "react-native";
import Animated, { interpolate, useAnimatedStyle, Extrapolation } from "react-native-reanimated";

interface PaginationProps {
  data: string[] | number[];
  progress: Animated.SharedValue<number>;
  dotSize?: number;
  dotColor?: string;
}

const Pagination: React.FC<PaginationProps> = ({ data, progress, dotSize = 10, dotColor = Colors.PRIMARY }) => {
  return (
    <View style={styles.paginationContainer}>
      {data.map((_, index) => {
        const animatedStyle = useAnimatedStyle(() => {
          const scale = interpolate(
            progress.value,
            [index - 1, index, index + 1],
            [0.8, 1.2, 0.8],
            Extrapolation.CLAMP
          );

          const opacity = interpolate(
            progress.value,
            [index - 1, index, index + 1],
            [0.3, 1, 0.3],
            Extrapolation.CLAMP
          );

          return {
            transform: [{ scale }],
            opacity,
          };
        });

        return (
          <Animated.View
            key={index}
            style={[
              styles.dot,
              animatedStyle,
              { width: dotSize, height: dotSize, backgroundColor: dotColor },
            ]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    borderRadius: 50,
    marginHorizontal: 5,
  },
});

export default Pagination;
