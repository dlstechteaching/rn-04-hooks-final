import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, SafeAreaView, StyleSheet  } from "react-native";
import { MyButton } from "../components/common/MyButton";
import { MyTitle } from "../components/common/MyTitle";
import { Navigation } from "../navigation/Navigation";
import { HomeStackScreenProps } from "../navigation/types";
import { TutosHooks } from "../types/tutosHooks";

export const HomeScreen : React.VFC = () => {

    const { navigate } = useNavigation<HomeStackScreenProps['navigation']>()
    const DATA = [
        { id: '0', label: 'useState', playgroundName: TutosHooks.UseState },
        { id: '1', label: 'useEffect', playgroundName: TutosHooks.UseEffect },
        { id: '2', label: 'useContext', playgroundName: TutosHooks.UseContext },
        { id: '3', label: 'useMemo', playgroundName: TutosHooks.UseMemo },
        { id: '4', label: 'useCallback', playgroundName: TutosHooks.UseCallback },
    ];
    
    return (
        <SafeAreaView style={styles.container}>
            <MyTitle label={'Hooks module'} />
            <FlatList
            style={{ padding: 20 }}
                data={DATA}
                renderItem={({ item }) => 
                    <MyButton 
                        label={item.label} 
                        onPress={() => navigate(Navigation.Playground, { playgroundName : item.playgroundName })} 
                    />
                }
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 0,
      padding: 20
    },
  });