import { Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, dimension }) => {
  const router = useRouter();

  const handlePress = () => {
    router.push("../ProfilePage");
  };
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
