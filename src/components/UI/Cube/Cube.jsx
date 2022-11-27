export default function Cube() {
	return (
		<div className="cube_container">
			<div
				className="cube"
				style={{
					transform: `rotateY(${45 + position.x / 20}deg) rotateX(${
						45 + position.y / 20
					}deg)`,
					zIndex: "1",
				}}
			>
				<div className="cube__face cube__face--front"></div>
				<div className="cube__face cube__face--back"></div>
				<div className="cube__face cube__face--top"></div>
				<div className="cube__face cube__face--bottom"></div>
			</div>
		</div>
	);
}
