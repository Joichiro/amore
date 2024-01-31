import assets from '../../assets';
import './roadmap.css';

export const Roadmap = () => {
	return (
		<div className='roadmap-section' id='roadmap'>
			<div className="title">
				<h2 className="title-text__pink">ROADMAP</h2>
			</div>
			<div className="roadmap-content">
				<div className="roadmap-content__box">
					<div className="title">
						<img src={assets.numberOne} alt="number one" />
						<h2 className='roadmap-content__title'>Phase 1</h2>
					</div>
					<p className='roadmap-content__info'>
						1. Preparation  <br />
						2. Planning and implementation of primary marketing strategies  <br />
						3. Raising community awareness of $AMORE <br />
					</p>
				</div>
			</div>

			<div className="roadmap-content">
				<div className="roadmap-content__box roadmap-content__two">
					<div className="title">
						<img src={assets.numberTwo} alt="number two" />
						<h2 className='roadmap-content__title'>Phase 2</h2>
					</div>
					<p className='roadmap-content__info'>
						1. Airdrop <br />
						2. Distribution of alocations among influential members of the community <br />
						3. Strengthening the community around $AMORE <br />
					</p>
				</div>
			</div>

			<div className="roadmap-content">
				<div className="roadmap-content__box">
					<div className="title">
						<img src={assets.numberThree} alt="number one" />
						<h2 className='roadmap-content__title'>Phase 3</h2>
					</div>
					<p className='roadmap-content__info'>
						1. Major announcement  <br />
						2. Continuation of marketing and PR campaigns to attract new users <br />
						3. Expanding the availability of $AMORE
					</p>
				</div>
			</div>

			<div className="roadmap-content">
				<div className="roadmap-content__box roadmap-content__two">
					<div className="title">
						<img src={assets.numberFour} alt="number two" />
						<h2 className='roadmap-content__title'>Phase 4</h2>
					</div>
					<p className='roadmap-content__info'>
						1. Ecosystem development and strengthening <br />
						2. Expand partnerships  <br />
						3. Developing and implementing new features and uses for the $AMORE token <br />
						4. Constantly updating and adapting the strategy according to market trends and community feedback.
					</p>
				</div>
			</div>
		</div>
	)
}
