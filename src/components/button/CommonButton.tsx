import React from "react";
import { View, Text } from "react-native";
import { Button as PaperButton } from "react-native-paper";

export type FI = {
  loading?: boolean;
  text: string;
  onPress: () => void;
};

const CommonButton = ({ onPress, text, loading }: FI) => {
  return (
    <View>
      <PaperButton
        loading={loading}
        disabled={loading}
        textColor="white"
        contentStyle={{
          width: "100%",
          height: 50,
        }}
        className=" bg-[#19B5CF] rounded-[6px] "
        mode="contained"
        onPress={onPress}
        uppercase={false}
      >
        {text}
      </PaperButton>
    </View>
  );
};

export default CommonButton;
