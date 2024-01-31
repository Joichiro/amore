import assets from "../../assets"
import './tokenomics.css'
export const Tokenomics = () => {
	return (
		<div className="tokenomics-section" id="tokenomics">
			<div className="container">
				<div className="title">
					<img className="money-heart" src={assets.moneyHeart} alt="money heart img" height='162' />
					<h2 className="title-text">TOKENOMICS</h2>
					<img className="token-heart" src={assets.tokenHeart} alt="heart" />
				</div>
				<div className="tokenomiks-main__img">
					<img src={assets.tokenMain} alt="" />
				</div>
			</div>
			<img className="tokenomics-heart" src={assets.heartTwo} alt="heart" />
		</div>
	)
}
