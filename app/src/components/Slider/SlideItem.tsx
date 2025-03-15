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

const PURPLE_IMAGES = [
  { _id: 1, image_url: 'https://soliloquywp.com/wp-content/uploads/2013/05/action-backlit-beach-1046896.jpg', title: 'Black Friday', subText: ' Sale to 50 % and have many vochers' },
  { _id: 2, image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoHX4_cEgpm26cHWKMn6t__E_ruzVLr0x-vyl2OV3dmZLQjTjD3szpHqbPIgw01tlOQUc&usqp=CAU', title: 'Anh 2', subText: 'Black Friday sale 30 % and have many vochers' },
  { _id: 3, image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIUhMo1wDAmoHQXQRo1O5_i6LndoOQmJx6p1IcTfFpY4EAHGuNEFZNf-77sdZi4YqOTjo&usqp=CAU', title: 'Anh 3', subText: 'Black Friday sale 30 % and have many vochers' },
  { _id: 1, image_url: 'https://soliloquywp.com/wp-content/uploads/2013/05/action-backlit-beach-1046896.jpg', title: 'Black Friday', subText: ' Sale to 50 % and have many vochers' },
  { _id: 5, image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoHX4_cEgpm26cHWKMn6t__E_ruzVLr0x-vyl2OV3dmZLQjTjD3szpHqbPIgw01tlOQUc&usqp=CAU', title: 'Anh 2', subText: 'Black Friday sale 30 % and have many vochers' },
  { _id: 1, image_url: 'https://soliloquywp.com/wp-content/uploads/2013/05/action-backlit-beach-1046896.jpg', title: 'Black Friday', subText: ' Sale to 50 % and have many vochers' },

]

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
