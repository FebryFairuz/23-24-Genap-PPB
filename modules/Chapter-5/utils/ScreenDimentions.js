import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const screenSize = Math.sqrt(width * height) / 100;

const horizontalScale = (number) => (width / guidelineBaseWidth) * size;
const verticalScale = (number) => (height / guidelineBaseHeight) * size;

export { horizontalScale, verticalScale, screenSize };