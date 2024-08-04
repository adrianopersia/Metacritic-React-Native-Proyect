import { Link, Stack } from "expo-router";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const { gameslug } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (gameslug) {
      getGameDetails(gameslug).then(setGameInfo);
    }
  }, [gameslug]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerLeft: () => {},
          headerRight: () => {},
          headerStyle: {
            backgroundColor: "grey",
          },
        }}
      />
      <View>
        {gameInfo === null ? (
          <ActivityIndicator color={"white"} size={"large"} />
        ) : (
          <ScrollView>
            <Text className="text-2xl font-bold text-white">
              {gameInfo.title}
            </Text>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
