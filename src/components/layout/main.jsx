import { GetValentine } from "../valentine/get-valentine"
import { Intro } from "../intro/intro"
import { Amore } from "../amore/amore"
import { Roadmap } from "../roadmap/roadmap";
import { Tokenomics } from "../tokenomics/tokenomics"
import { Faq } from "../faq/faq"
import { Team } from "../team/team"


export const Main = () => {
	return (
		<main className="main">
			<Intro />
			<GetValentine />
			<div className="container">
				<Amore />
				<Roadmap />
			</div>
			<Tokenomics />
			<Faq />
			<Team />
		</main>
	)
}
