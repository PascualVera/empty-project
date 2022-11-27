import CyberGirl from "../UI/CyberGirl/CyberGirl";
import SvgWrapper from "../UI/SvgWrapper/SvgWrapper";
import "./Header.css";

export default function Header() {
	return (
		<header className="header">
			<SvgWrapper>
				<CyberGirl width={960} height={540} />
			</SvgWrapper>
			<div className="bg_filter"></div>
		</header>
	);
}
