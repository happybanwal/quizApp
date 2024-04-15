import { View, Text } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/Common";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CommonButton from "../components/button/CommonButton";

const Home = () => {
  type homeScreenProps = NativeStackNavigationProp<RootStackParamList, "Home">;

  const navigation = useNavigation<homeScreenProps>();

  const handleNavigation = () => {
    navigation.navigate("QuizScreen2");
  };

  return (
    <SafeAreaView className={"justify-center items-center flex-1 bg-[#131830]"}>
      <StatusBar style="light" backgroundColor="#131830" />
     
      <CommonButton text="Start" onPress={handleNavigation} />
    </SafeAreaView>
  );
};

export default Home;
