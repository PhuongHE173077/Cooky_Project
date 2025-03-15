import * as React from "react";
import { View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { window } from "../../constants/sizes";
import { renderItem } from "./render-item";
import Pagination from "./Pagination";

const defaultDataWith6Colors = ["#B0604D", "#899F9C", "#B3C680", "#5C6265", "#F5D399", "#F1F1F1"];

function CarouselRN({ data = [] }: any) {
  const progress = useSharedValue<number>(0);

  return (
    <View id="carousel-component" dataSet={{ kind: "basic-layouts", name: "parallax" }}>
      <Carousel
        autoPlay
        autoPlayInterval={4000}
        data={defaultDataWith6Colors}
        height={200}
        loop={true}
        pagingEnabled={true}
        snapEnabled={true}
        width={window.width}
        style={{ width: window.width }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        onProgressChange={progress}
        renderItem={renderItem({ rounded: true, data })}
      />
      <Pagination data={defaultDataWith6Colors} progress={progress} />
    </View>
  );
}

export default CarouselRN;
