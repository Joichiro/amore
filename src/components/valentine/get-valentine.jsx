import './valentine.css';
import { ValentineCard } from './valentine-card';
import assets from '../../assets';

export const GetValentine = () => {
	return (
		<div className='valentine-section'>
			<div className='hearts-group'>
				<img src={assets.mainHeartsGroup} alt="hearts" />
			</div>
			<div className="container">
				<div className="valentine-content">
					<div className="title">
						<h2 className="title-text" id='get_valentine'>Get Valentine</h2>
					</div>
					<ValentineCard
						contentTop='CONNECT TWITTER'
						contentBottom='CONNECT WALLET'
					/>
					<img className='eros-img' src={assets.eros} alt="" />
				</div>
			</div>
		</div>
	)
}
