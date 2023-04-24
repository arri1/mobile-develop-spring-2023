import Svg, { Path } from "react-native-svg";

const Wrench  = (props) => {
    return (
        <Svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M2 7.5C2 6.71403 2.16486 5.96657 2.46189 5.29031L5.01041 7.83883C5.79146 8.61988 7.05779 8.61988 7.83884 7.83883C8.61989 7.05779 8.61989 5.79146 7.83884 5.01041L5.29032 2.46189C5.96658 2.16486 6.71404 2 7.5 2C10.5376 2 13 4.46243 13 7.5C13 8.28596 12.8351 9.03342 12.5381 9.70968L21.435 18.6066C22.2161 19.3877 22.2161 20.654 21.435 21.435V21.435C20.654 22.2161 19.3877 22.2161 18.6066 21.435L9.70968 12.5381C9.03342 12.8351 8.28597 13 7.5 13C4.46243 13 2 10.5376 2 7.5Z"
            stroke={props.color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    )
}

export default Wrench 