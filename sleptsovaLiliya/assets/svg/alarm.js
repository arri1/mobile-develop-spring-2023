import SVG, { Path, Circle } from "react-native-svg"

const Alarm = (props) => {
    return (
<SVG width="95%" height="95%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<Circle cx="12" cy="13" r="8" stroke={props.color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M12 9V13L15 15" stroke={props.color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M18 3L21 6" stroke={props.color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
<Path d="M6 3L3 6" stroke={props.color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
</SVG>
)
}

export default Alarm