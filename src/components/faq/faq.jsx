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
						<h4 className='faq-content__title'>How can I participate in airdrop?</h4>
						<p className='faq-content__info'>
						To participate, you need to follow our social media updates and meet certain conditions that will be announced on 14 February.
						</p>
						<img className='faq-content__line' src={assets.line} alt="line img" width='100%' />
					</div>

					<div className="faq-content__box">
						<h4 className='faq-content__title'>How can I be sure of the safety and reliability of $AMORE?</h4>
						<p className='faq-content__info'>
						We attach great importance to the security and transparency of our project. The entire process of developing and launching $AMORE is accompanied by audits and scrutiny to ensure its reliability and safety for all participants.
						</p>
						<img className='faq-content__line' src={assets.line} alt="line img" width='100%' />
					</div>

					<div className="faq-content__box">
						<h4 className='faq-content__title'>What are $AMORE's plans for the future and how will the project adapt to changes in the market?</h4>
						<p className='faq-content__info'>
						Our long-term plan includes not only developing and strengthening the $AMORE ecosystem, but also constantly updating and adapting our strategy according to market trends and community feedback. We are eager to innovate and ready to accept new ideas and approaches to improve our project
						</p>
						<img className='faq-content__line' src={assets.line} alt="line img" width='100%' />
					</div>

					<div className="faq-content__box">
						<h4 className='faq-content__title'>Will $AMORE tokens be burned, and how will this affect its value?</h4>
						<p className='faq-content__info'>
						We are currently considering introducing a $AMORE token burning mechanism in the future, which could reduce the total number of tokens in circulation and potentially increase their value. However, this will depend on the team's strategic decisions and community feedback.
						</p>
						<img className='faq-content__line' src={assets.line} alt="line img" width='100%' />
					</div>

					<div className="faq-content__box">
						<h4 className='faq-content__title'>How will the total supply of $AMORE tokens be regulated?</h4>
						<p className='faq-content__info'>
						The total supply of $AMORE tokens is strictly limited, meaning that once a certain number of tokens are issued, no more new tokens will be created, which provides protection against inflation and promotes token value on the market.
						</p>
						<img className='faq-content__line' src={assets.line} alt="line img" width='100%' />
					</div>
				</div>
			</div>
		</div>
	)
}
