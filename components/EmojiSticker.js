import { View, Image } from 'react-native';
import { PanGestureHandler, TapGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';

const AnimatedImage = Animated.createAnimatedComponent(Image);
const AnimatedView = Animated.createAnimatedComponent(View);

export default function EmojiSticker({ imageSize, stickerSource }) {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scaleImage = useSharedValue(1);
  
  // Estado para controlar se o emoji está aumentado
  const isEnlarged = useSharedValue(false);

  const onDoubleTap = useAnimatedGestureHandler({
    onActive: () => {
      if (isEnlarged.value) {
        // Se já está aumentado, volta ao tamanho original
        scaleImage.value = withSpring(1);
        isEnlarged.value = false;
      } else {
        // Se está no tamanho original, aumenta
        scaleImage.value = withSpring(2);
        isEnlarged.value = true;
      }
    },
  });

  const onDrag = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
  });

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: imageSize,
      height: imageSize,
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: scaleImage.value },
      ],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={onDrag}>
      <AnimatedView>
        <TapGestureHandler onGestureEvent={onDoubleTap} numberOfTaps={2}>
          <AnimatedImage
            source={stickerSource}
            resizeMode="contain"
            style={imageStyle}
          />
        </TapGestureHandler>
      </AnimatedView>
    </PanGestureHandler>
  );
}