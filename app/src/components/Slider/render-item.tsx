import { ImageStyle, StyleProp } from "react-native";
import { CarouselRenderItem } from "react-native-reanimated-carousel";
import { SlideItem } from "./SlideItem";

interface Options {
  rounded?: boolean;
  style?: StyleProp<ImageStyle>;
}

export const renderItem =
  ({ rounded = false, style, data = [] }: Options = {}): CarouselRenderItem<any> =>
    ({ index }: { index: number }) => (
      <SlideItem key={index} index={index} rounded={rounded} style={style} data={data} />
    );
