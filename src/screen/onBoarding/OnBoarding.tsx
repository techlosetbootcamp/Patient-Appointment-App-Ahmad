import React, {useState} from 'react';
import {
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, height, width} from '../../constants/colors';

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {OnBoardingTypes, RootStackParamList} from '../../types/Types';
import {useOnBoarding} from './useOnBoarding';

export default function OnBoarding() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = React.useRef<FlatList>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {onBoardingContent, handleGetStarted} = useOnBoarding();

  const Slide = ({item}: {item: OnBoardingTypes}) => {
    return (
      <View style={{width: width, flex: 1}}>
        <View
          style={{
            width: width,
            backgroundColor: COLORS.primary,
            borderBottomRightRadius: 50,
            borderBottomLeftRadius: 50,
            flex: 1,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <Image
            source={item.image}
            style={{
              height: '85%',
              resizeMode: 'contain',
            }}
          />
        </View>
        <View
          style={{
            width: '100%',
            flex: 1,
            marginTop: '10%',
            paddingHorizontal: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: '500',
              color: 'black',
            }}>
            {item.heading}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 14,
              color: COLORS.secondry,
              marginTop: 10,

              borderRadius: 10,
            }}>
            {item.subHeading}
          </Text>
          <View
            style={{
              marginTop: '15%',
              display: 'flex',
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'center',
              gap: 4,

              // width: 50,
            }}>
            {/* <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 50,
                backgroundColor: COLORS.primary,
              }}
            /> */}
            {onBoardingContent.map((_, index) => (
              <View
                key={index}
                style={[
                  {
                    width: 8,
                    height: 8,
                    borderRadius: 50,
                    backgroundColor: COLORS.grayC,
                  },
                  currentSlideIndex == index && {
                    backgroundColor: COLORS.primary,
                    opacity: 1,
                  },
                ]}
              />
            ))}
          </View>
          {currentSlideIndex == onBoardingContent.length - 1 ? (
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: COLORS.primary,
                alignItems: 'center',
                borderRadius: 10,
                justifyContent: 'center',
                marginBottom: '20%',
              }}
              onPress={handleGetStarted}>
              <Text style={{color: 'white', fontWeight: '600'}}>
                Get Started
              </Text>
            </TouchableOpacity>
          ) : (
            <View
              style={{
                flex: 1,
                marginBottom: '20%',
                display: 'flex',
                flexDirection: 'row',
                gap: 15,
                marginHorizontal: 10,
              }}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  borderColor: COLORS.grayC,
                  borderWidth: 1,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={skip}>
                <Text style={{color: COLORS.primary, fontWeight: '600'}}>
                  Skip
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  backgroundColor: COLORS.primary,
                  alignItems: 'center',
                  borderRadius: 10,
                  justifyContent: 'center',
                }}
                onPress={nextSlide}>
                <Text style={{color: 'white', fontWeight: '600'}}>Next</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };
  const updateCurrentSliceIndex = (
    e: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;

    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  const nextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex !== onBoardingContent.length) {
      const offset = nextSlideIndex * width;
      if (ref?.current) {
        ref?.current?.scrollToOffset({offset});
      }
      setCurrentSlideIndex(nextSlideIndex);
    }
  };
  const skip = () => {
    const lastSlide = onBoardingContent.length - 1;
    const offset = lastSlide * width;

    if (ref?.current) {
      ref?.current?.scrollToOffset({offset});
    }
    setCurrentSlideIndex(lastSlide);
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <StatusBar backgroundColor={COLORS.primary} />
      <FlatList
        onMomentumScrollEnd={updateCurrentSliceIndex}
        ref={ref}
        data={onBoardingContent}
        renderItem={({item}: {item: OnBoardingTypes}) => <Slide item={item} />}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{height: height}}
        style={{flex: 1}}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces
        decelerationRate={'fast'}
      />
    </SafeAreaView>
  );
}
