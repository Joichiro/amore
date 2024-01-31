import assets from '../../assets';
import './faq.css';

export const Faq = () => {
	return (
		<div className='faq-section' id='faq'>
			<div className="container">
				<div className="faq-content pl-434">
					<div className="title">
						<h2 className="title-text">FAQ</h2>
					</div>
					<div className="faq-content__box">
						<h4 className='faq-content__title'>What happens in Phase 2 of the $AMORE project?</h4>
						<p className='faq-content__info'>
							Phase 2 focuses on searching $AMORE, including listing on centralized exchanges, deepening partnerships within and beyond the Solana ecosystem, and introducing a $AMORE meter on the website.
						</p>
						<img className='faq-content__line' src={assets.line} alt="line img" width='100%' />
					</div>

					<div className="faq-content__box">
						<h4 className='faq-content__title'>What is the significance of Phase 1 in the $AMORE project?</h4>
						<p className='faq-content__info'>
							Phase 1 involves creating $AMORE through NFT to Earn, initiating staking of NFTs, creating a liquidity pool on Raydium/Orca, and applying for listings on centralized exchanges.
						</p>
						<img className='faq-content__line' src={assets.line} alt="line img" width='100%' />
					</div>

					<div className="faq-content__box">
						<h4 className='faq-content__title'>What is the goal of Phase 3 in the $AMORE project?</h4>
						<p className='faq-content__info'>
							Phase 3 aims to ensure $AMORE reaches everyone and dominates the memetoken world, establishing a clear and impactful presence in the market.
						</p>
						<img className='faq-content__line' src={assets.line} alt="line img" width='100%' />
					</div>

					<div className="faq-content__box">
						<h4 className='faq-content__title'>What is the initial market cap for the $AMORE token?</h4>
						<p className='faq-content__info'>
							The initial Fully Diluted Valuation (FDV) market cap for the $AMORE token is projected to be $10M.
						</p>
						<img className='faq-content__line' src={assets.line} alt="line img" width='100%' />
					</div>

					<div className="faq-content__box">
						<h4 className='faq-content__title'>What is the initial market cap for the $AMORE token?What happens in Phase 2 of the $AMORE project?</h4>
						<p className='faq-content__info'>
							Phase 2 focuses on searching $AMORE, including listing on centralized exchanges, deepening partnerships within and beyond the Solana ecosystem, and introducing a $AMORE meter on the website.
						</p>
						<img className='faq-content__line' src={assets.line} alt="line img" width='100%' />
					</div>
				</div>
			</div>
		</div>
	)
}
