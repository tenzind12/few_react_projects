import { Text, View } from "react-native"

export default Details = ({navigation, route}) => {
    console.log(route.params.slug)
  return (
    <View style={style.page}>
        <Text>Details</Text>
    </View>
  )
}

const style = {
    page: {
        flex: 1
    }
}