import { useState } from "react"
import { useAccount } from 'wagmi';
import assets from "../../assets"
import { ConnectWallet } from "../connect/wallet/wallet";
import { ValentineCardTwo } from "./valentine-card-two"

// eslint-disable-next-line react/prop-types, no-unused-vars
export const ValentineCard = ({ contentTop, contentBottom }) => {
	const {isConnected } = useAccount();
	const [show] = useState(true);


	return (
		<div className="valentine-card">
			<div className="arrow-img">
				<img className="desktop-arrow__img" src={assets.arrow} alt="arrow img" />
				<img className="media-arrow__img" src={assets.mediaArrow} alt="" />
			</div>
			<div style={{ display: show ? 'block' : 'none' }}>
				<ConnectWallet />
			</div>
			<div className="heart-img">
				<img src={assets.heart} alt="heart img" />
			</div>
			<ValentineCardTwo show={!isConnected} />
		</div>
	)
}
