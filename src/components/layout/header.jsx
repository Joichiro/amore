import './layout.css';
import assets from '../../assets';

export const Header = () => {
	return (
		<header className='header'>
			<div className='container'>
				<a className='header-log' href='#!'>
					<img src={assets.logoTwo} alt="amore logo" width='85' height='140' />
				</a>

				<nav>
					<ul className='nav-list'>
						<li className="nav-item">
							<a href="#rodmap" className="nav-link">ROADMAP</a>
						</li>
						<li className="nav-item">
							<a href="#tokenomics" className="nav-link">TOKENOMICS</a>
						</li>
						<li className="nav-item">
							<a href="#faq" className="nav-link">FAQ</a>
						</li>
						<li className="nav-item social-link">
							<a href="#!" className="nav-link">SOCIALS</a>
							<div className='socials-dropdown'>
								<a href="#!">TELEGRAM</a>
								<a href="#!">TWITTER</a>
							</div>
						</li>
						<a className='get-valentine__btn' href="#!">
							Get Valent
							<span className='i-text'>i<img className='i-icon' src={assets.iIcon} alt="" /></span>
							ne

						</a>
					</ul>
				</nav>
			</div>
		</header>
	)
}
