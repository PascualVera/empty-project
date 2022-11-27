import CyberGirl from "../UI/CyberGirl/CyberGirl";
import Floppy from "../UI/Floppy/Floppy";
import SvgWrapper from "../UI/SvgWrapper/SvgWrapper";
import "./Header.css";

export default function Header() {
	return (
		<header className="header">
			{/* <SvgWrapper>
					<Floppy width={900} height={608} />
				</SvgWrapper> */}
			<SvgWrapper>
				<CyberGirl width={960} height={540} />
			</SvgWrapper>

			<div className="bg_filter"></div>
		</header>
	);
}
