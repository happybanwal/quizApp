import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types/Common";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { questions } from "../utils/json/Question";
import CommonButton from "../components/button/CommonButton";

const QuizScreen2 = () => {
  type homeScreenProps = NativeStackNavigationProp<RootStackParamList, "Home">;

  const navigation = useNavigation<homeScreenProps>();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleValidate = (option: string) => {
    let correctAns = questions[currentIndex].answer;
    console.log(option);

    setCurrentOptionSelected(option);
    setCorrectOption(correctAns);
    setIsOptionsDisabled(true);
  };

  const handleNext = () => {
    console.log("next");
  };

  return (
    <TouchableWithoutFeedback>
      <SafeAreaView className="flex-1 bg-[#131830] p-6   ">
        {/* top bar */}
        <View className=" flex-none border border-gray-500 p-2">
          <View className=" justify-center border border-gray-500 ">
            <MaterialCommunityIcons
              name="chevron-left-circle"
              size={30}
              color="white"
              onPress={() => {
                navigation.goBack();
              }}
            />
          </View>
        </View>
        {/* top bar */}

        {/* 2nd half */}
        <View className="  flex-1 border border-gray-500 p-2 justify-between">
          {/* header */}
          <View className="border border-gray-500 ">
            <Text className="text-white text-slate-500">Review Test</Text>
            <Text className="text-white text-[35px] font-bold">
              Question {currentIndex + 1}/{questions?.length}{" "}
            </Text>
          </View>
          {/* header */}

          {/* body */}
          <View className="border border-gray-500 ">
            <Text className="text-white w-auto relative text-xl font-bold mb-4">
              {questions[currentIndex]?.question}
            </Text>
            {questions[currentIndex]?.options.map((option: string, i) => (
              <>
                <View key={i}>
                  <TouchableOpacity
                    disabled={isOptionsDisabled}
                    className="border border-white p-2 mt-2 mb-2 "
                    style={{
                      borderColor:
                        option === correctOption
                          ? "green"
                          : option == currentOptionSelected
                          ? "red"
                          : "white",
                    }}
                    onPress={() => {
                      handleValidate(option);
                    }}
                  >
                    <Text className="text-white">{option}</Text>
                  </TouchableOpacity>
                </View>
              </>
            ))}
          </View>
          {/* body */}

          {/* footer */}
          {/* hint */}
          
          <View className="flex-row justify-end">
            <TouchableOpacity className="border border-gray-500   ">
              <MaterialCommunityIcons
                name="information-outline"
                size={30}
                color="yellow"
                onPress={() => {
                  setShowExplanation(true);
                }}
              />
            </TouchableOpacity>
          </View>
          {/* hint */}

          {/* next */}
          <View className="border border-gray-500  ">
            <CommonButton text="Next" onPress={handleNext} />
          </View>
          {/* next */}
          {/* footer */}
        </View>
        {/* 2nd half */}

        {/* modal */}
        <Modal visible={showExplanation} animationType="slide" transparent>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View className="bg-white p-6 rounded-[8px] items-center">
              <Text className="font-bold text-center">Explanation:</Text>
              <Text>{questions[currentIndex].answer}</Text>
              <TouchableOpacity
                className="bg-[#19B5CF] mt-2 p-2 items-center rounded-[8px] min-w-[50px]"
                onPress={() => {
                  setShowExplanation(false);
                }}
              >
                <Text className="text-white">ok</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {/* modal */}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default QuizScreen2;