import { Home } from "./pages/home"
import { Policy } from "./pages/policy"
import { BrowserRouter , Routes, Route } from 'react-router-dom';
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
				  <BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/policy" element={<Policy />} />
					</Routes>
					</BrowserRouter>
				</RainbowKitProvider>
			</WagmiConfig>
		</div>
	)
};
