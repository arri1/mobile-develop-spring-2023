import Svg, { Path } from "react-native-svg";

const User = (props) => {
    return (
        <Svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M17 20C18.1046 20 19.0454 19.0899 18.7951 18.0141C18.1723 15.338 16.0897 14 12 14C7.91032 14 5.8277 15.338 5.20492 18.0141C4.95455 19.0899 5.89543 20 7 20H17Z"
                stroke={props.color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <Path fillRule="evenodd" clipRule="evenodd" d="M12 11C14 11 15 10 15 7.5C15 5 14 4 12 4C10 4 9 5 9 7.5C9 10 10 11 12 11Z"
                stroke={props.color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    )
}

export default User