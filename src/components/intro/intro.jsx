import assets from '../../assets';
import './intro.css';

export const Intro = () => {
	return (
		<div className='intro-section'>
			<div className='media-envelope__img'>
				<img src={assets.mediaEnvelop} alt="media envelope" />
			</div>
			<div className='container'>
				<div className="intro-content pl-434">
					<h2 className='intro-title'>Amore - Love with $AMORE</h2>
					<p className='intro-info'>Love and blockchain in one game</p>
					<a className='intro-btn' href='#what'>What is AMORE?</a>
				</div>
			</div>
			<div className='intro-envelop__img'>
				<img src={assets.mainEnvelope} alt="envelope" />
			</div>
		</div>
	)
}
