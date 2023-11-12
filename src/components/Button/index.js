import { Text, TouchableOpacity } from "react-native"

const CustomButton = ({ title, backgroundColor, width, marginBottom, marginTop, }) => {
    return (
        <TouchableOpacity>
            <Text>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton