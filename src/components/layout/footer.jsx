import assets from '../../assets';
import './layout.css';

export const Footer = () => {
	return (
		<footer className='footer'>
			<div className="container">
				<img className='footer-logo' src={assets.footerLogo} alt="logo" width='100' height='130' />
				<div className='media-bg__box'>
					<div className="social-media">
						<a href="https://twitter.com/AmoreOnEth" target='_blank' rel="noreferrer">
							<img src={assets.twitter} alt="twitter" />
						</a>
						<a href="https://t.me/havavaba" target='_blank' rel="noreferrer">
							<img src={assets.telgram} alt="telegram" />
						</a>
						<a href="https://t.me/AmoreOnEth" target='_blank' rel="noreferrer">
							<img src={assets.bestIcon} alt="best icon" />
						</a>
					</div>
					<nav>
						<ul className='nav-list'>
							<li className="nav-item">
								<a href="#roadmap" className="nav-link">ROADMAP</a>
							</li>
							<li className="nav-item">
								<a href="#tokenomics" className="nav-link">TOKENOMICS</a>
							</li>
							<li className="nav-item">
								<a href="#faq" className="nav-link">FAQ</a>
							</li>
							<a className='get-valintine' href="#!">
								<img src={assets.footerValintineIcon} alt="valitine icon" />
							</a>
						</ul>
					</nav>
				</div>
			</div>
		</footer>
	)
}
