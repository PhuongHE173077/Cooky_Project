import { Colors } from "@/src/services/Colors";
import { LinearGradient } from "expo-linear-gradient";
import React, { useMemo } from "react";
import {
  ImageSourcePropType,
  type ImageStyle,
  type StyleProp,
  StyleSheet,
  Text,
  View,
  type ViewProps,
} from "react-native";
import type { AnimatedProps } from "react-native-reanimated";
import Animated from "react-native-reanimated";


interface Props extends AnimatedProps<ViewProps> {
  style?: StyleProp<ImageStyle>;
  index?: number;
  rounded?: boolean;
  source?: ImageSourcePropType;
  data: any
}
export const SlideItem: React.FC<Props> = (props) => {
  const { style, data, index = 0, rounded = true, testID, ...animatedViewProps } = props;

  const source = useMemo(
    () => props.source || data[index % data.length].image_url,
    [index, props.source]
  );

  return (
    <Animated.View testID={testID} style={{ position: 'relative' }} {...animatedViewProps}>
      <Animated.Image
        style={[style, styles.container, rounded && { borderRadius: 25 }]}
        source={source}
        resizeMode="cover"
      />
      <LinearGradient colors={["transparent", "rgba(0,0,0,0.8)"]} style={styles.background}>
        <View style={styles.content}>
          <Text
            style={styles.textTitle}
          >{data[index]?.title}</Text>
          <Text
            style={styles.subText}
          >{data[index]?.subText}</Text>
        </View>
      </LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  textTitle: {
    fontFamily: 'outfit-bold',
    fontSize: 20,
    width: '100%',
    textAlign: 'center',
    color: Colors.WHITE
  },
  background: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: '100%',
    height: 200,
    borderRadius: 25,
    padding: 10
  },
  content: {
    position: 'absolute',
    top: 80,
    color: Colors.WHITE,
    width: '100%'
  },
  subText: {
    fontFamily: 'outfit',
    fontSize: 17,
    width: '100%',
    textAlign: 'center',
    color: Colors.WHITE,
    marginTop: 5
  }
});
