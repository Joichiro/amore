import { useEffect } from 'react';
import '../assets/css/main.css'
import policy_circle from '../assets/policy_circle.png'
import logoTwo from '../assets/icons/logo-two.svg'

export const Policy = () => {
    useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
        <div className="policy_page">
			<header>
				<div className="container">
					<a className='header-log' href='#!'>
						<img src={logoTwo} alt="amore logo" width='85' height='140' />
					</a>
				</div>
			</header>
            <section className="policy">
				<div className="container">
					<div className="policy_circle">
						<img src={policy_circle} alt="amore logo" />
						<h6>
							TERMS
						</h6>
					</div>
					<p>
						<b>$AMORE</b> is a digital token compatible with the ERC-20 standard. $AMORE does not provide its holders with any functionality, utility, or intrinsic value, nor does it offer any promises or expectations of any financial return, profit, interest, or dividends.
					</p>
					<p>
						<b>$AMORE</b> is not and is not intended to be used as:
					</p>
					<p>
                        A means of exchange, accepted by the public (or a part of it) as payment for goods or services, or for the settlement of debts.
                        A method of payment for goods or services, whether through the <b>$AMORE project or otherwise.</b><br></br>
						A means of exchanging MEME for goods or services.
                        A representation of money (including electronic money).
                        A digital representation of a capital market product, security, share, debt obligation, unit in a collective investment scheme, derivative contract, commodity, or any other kind of financial instrument or investment in any jurisdiction.
                        <br></br>
						<b>$AMORE</b> does not represent any share of participation, ownership rights, a share, or a right to participate in the business operations of any legal entity or enterprise.
					</p>
					<p>
						<b>$AMORE</b> does not grant any rights to royalties, dividends, income, profit, or revenue from investments, nor is it subject to return or exchange for cash or its equivalent value in any other digital asset.
					</p>
					<p>
                        The <b>$AMORE</b> project provides no guarantees and has no obligations regarding the listing of <b>$AMORE</b> on any exchange.
					</p>
					<p>
                    All information provided within the <b>$AMORE</b> project is strictly informational and should not be considered financial advice. Investors should independently assess the risks and conduct thorough analysis before making a decision to invest in <b>$AMORE</b>.
					</p>
				</div>
            </section>
		</div>
	)
}