export default function SvgWrapper({ children }) {
	const originalWidth = children.props.width;
	const originalHeight = children.props.height;

	return (
		<div
			style={{
				height: "100%",
				aspectRatio: originalWidth / originalHeight,
				zIndex: "0",
			}}
		>
			{children}
		</div>
	);
}
