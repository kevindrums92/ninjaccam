import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';

const SWIPE_THRESHOLD = 50;

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const onGestureEvent = (event: PanGestureHandlerGestureEvent) => {
    const { translationX } = event.nativeEvent;
    if (translationX < -SWIPE_THRESHOLD) {
      navigation.navigate('Galleria');
    } else if (translationX > SWIPE_THRESHOLD) {
      navigation.navigate('Camera');
    }
  };

  return (
    <PanGestureHandler onEnded={onGestureEvent}>
      <View style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
        <Text style={styles.swipeHint}>
          Desliza a la izquierda para ir a Camera{"\n"}Desliza a la derecha para ir a Galleria
        </Text>
      </View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  swipeHint: {
    marginTop: 16,
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
});

export default HomeScreen; 