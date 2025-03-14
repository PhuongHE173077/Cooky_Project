import { Redirect } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function Index() {
  const isAuthenticated = useSelector((state: any) => state.isAuthenticated);


  if (!isAuthenticated) {
    return <Redirect href={'/auth/Login'} />
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Redirect href={'/tabs/Home'} />
    </View>
  );
}
