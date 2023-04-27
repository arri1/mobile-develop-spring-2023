import Svg, {Path, G, Rect, Circle} from "react-native-svg"
const Iphone = () => {
	return(
<Svg version="1.0" 
	 width="30px" height="30px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
<G>
	<Rect x="14" y="10" fill="#506C7F" width="36" height="40"/>
	<G>
		<Path fill="#F9EBB2" d="M14,4v4h36V4c0-1.104-0.896-2-2-2H16C14.896,2,14,2.896,14,4z"/>
		<Path fill="#F9EBB2" d="M50,60v-8H14v8c0,1.104,0.896,2,2,2h32C49.104,62,50,61.104,50,60z"/>
	</G>
	<Path fill="#394240" d="M48,0H16c-2.211,0-4,1.789-4,4v56c0,2.211,1.789,4,4,4h32c2.211,0,4-1.789,4-4V4C52,1.789,50.211,0,48,0z
		 M50,60c0,1.104-0.896,2-2,2H16c-1.104,0-2-0.896-2-2v-8h36V60z M50,50H14V10h36V50z M50,8H14V4c0-1.104,0.896-2,2-2h32
		c1.104,0,2,0.896,2,2V8z"/>
	<Path fill="#394240" d="M32,60c1.658,0,3-1.342,3-3s-1.342-3-3-3s-3,1.342-3,3S30.342,60,32,60z M32,56c0.553,0,1,0.447,1,1
		s-0.447,1-1,1s-1-0.447-1-1S31.447,56,32,56z"/>
	<Path fill="#394240" d="M33,4h-6c-0.553,0-1,0.447-1,1s0.447,1,1,1h6c0.553,0,1-0.447,1-1S33.553,4,33,4z"/>
	<Circle fill="#394240" cx="37" cy="5" r="1"/>
	<Circle fill="#B4CCB9" cx="32" cy="57" r="1"/>
</G>
</Svg>)
}
export default Iphone