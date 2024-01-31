import { GetValentine } from "../valentine/get-valentine"
import { Intro } from "../intro/intro"
import { Amore } from "../amore/amore"
import { roadmap } from "../roadmap/roadmap";
import { Tokenomics } from "../tokenomics/tokenomics"
import { Faq } from "../faq/faq"

export const Main = () => {
	return (
		<main className="main">
			<Intro />
			<GetValentine />
			<div className="container">
				<Amore />
				<roadmap />
			</div>
			<Tokenomics />
			<Faq />
		</main>
	)
}
