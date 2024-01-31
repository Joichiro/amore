import { Footer, Header } from "./components/layout";
import { Main } from "./components/layout/main";
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  zora,
} from 'wagmi/chains';

const { chains, publicClient } = configureChains(
	[mainnet, polygon, optimism, arbitrum, base, zora],
	[publicProvider()]
  );
  
  const { connectors } = getDefaultWallets({
	appName: 'amore',
	projectId: 'c04f1b6e0ea121a92c93b1ff89e190f5',
	chains,
  });
  
  const wagmiConfig = createConfig({
	autoConnect: true,
	connectors,
	publicClient,
  });

export const App = () => {
	return (
		<div className="wrapper">
			<WagmiConfig config={wagmiConfig}>
      			<RainbowKitProvider chains={chains}>
					<Header />
					<Main />
					<Footer />
				</RainbowKitProvider>
			</WagmiConfig>
		</div>
	)
};
