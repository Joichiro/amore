import './team.css';
import policy_circle from '../../assets/policy_circle.png'
import hearts_team from '../../assets/hearts_team.png'
import { Link } from 'react-router-dom'

export const Team = () => {
	return (
        <div className="wrapper team">
            <img className='team_left' src={hearts_team} alt="" />
            <div className="container">
                <div className="policy_circle">
                    <Link to="/policy">
                        <img src={policy_circle} alt="amore logo" />
                        <h6>
                            TERMS
                        </h6>
                    </Link>
                </div>
                <div className="tema_section">
                    <div className="team_right">
                        <h5>
                            TEAM
                        </h5>
                        <div className="team_right_card card_left
                        ">
                            <div className="card_img"></div>
                            <div className="card_text">
                                <h4>
                                    Leonid
                                </h4>
                                <span>
                                    Founder
                                </span>
                                <p>
                                100x Leverage trader, Angel Investor.
                                </p>
                            </div>
                        </div>
                        <div className="team_right_card card_right
                        ">
                            <div className="card_text">
                                <h4>
                                Andrew
                                </h4>
                                <span className='bg_black'>
                                Creative Director
                                </span>
                                <p>
                                Dreamer, Sex-instructor and Pink Lovely Tiger
                                </p>
                            </div>
                            <div className="card_img"></div>
                        </div>
                        <div className="team_right_card card_left
                        ">
                            <div className="card_img"></div>
                            <div className="card_text">
                                <h4>
                                Daniil
                                </h4>
                                <span className='bg_pink'>
                                Community Manager
                                </span>
                                <p>
                                Genius, billionaire, playboy, philanthropist.
                                </p>
                            </div>
                        </div>
                        <div className="team_right_card card_right
                        ">
                            <div className="card_text">
                                <h4>
                                Nika
                                </h4>
                                <span className='bg_blue'>
                                Designer
                                </span>
                                <p>
                                Graphic, Web, 3D designer, mother of dragons.
                                </p>
                            </div>
                            <div className="card_img"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	)
}