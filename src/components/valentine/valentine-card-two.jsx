import './valentine.css';
import { useAccount } from 'wagmi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// eslint-disable-next-line react/prop-types
export const ValentineCardTwo = ({ show }) => {

	const { address } = useAccount();

	const messages = [
		'Ready to fall in love with cryptocurrency? 💖 $AMORE is here to steal your heart and fill your wallet! 🚀 Join the revolution of romance on the Ethereum blockchain. #Ethereum @AmoreOnEth 💑',
		'They say money can\'t buy love, but have you tried $AMORE tokens? 😍 Let\'s make blockchain a little more romantic! 💸❤️ @AmoreOnEth 🌹',
		'Swipe right on $AMORE! 💘 Your portfolio might just find its perfect match. Join us for a journey of love, tokens and surprises on Ethereum! #Ethereum @AmoreOnEth 💑',
		'Roses are red, violets are blue, $AMORE is sweet and so is your portfolio! 🌹📈 Fall in love by investing in a token that brings love to the blockchain. #Ethereum @AmoreOnEth #Meme 💕',
		'In the world of digital currencies, $AMORE is your love letter! 💌 Join our community and let\'s create a love story on the Ethereum blockchain. #Ethereum @AmoreOnEth 💖'
	  ];


  const handleTweetClick = async (event) => {
    event.preventDefault(); // Prevent default until POST is made

    // Replace with your POST request data and endpoint
    const postData = { address: address };
    const postEndpoint = 'https://hook.us1.make.com/nshym4qawdkplqy6imrturk4wbecosye';

    try {
		// Randomly select a message
		const randomIndex = Math.floor(Math.random() * messages.length);
		const message = messages[randomIndex];
      const response = await fetch(postEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
		toast.error("Address is already in use", {
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		  });
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // If the POST request is successful, redirect to Twitter
	  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    } catch (error) {
      console.error('There was a problem with the POST request:', error);
    }
  };

  return (
    <div className='valentine-card__two' style={{ display: show ? 'none' : 'flex' }}>
				<ToastContainer />

      <h2>
        <a href="https://twitter.com/intent/tweet?text=$AMORE" 
           className='valentine-card__title'
           data-show-count="false" 
           target="_blank" 
           rel="noreferrer"
           onClick={handleTweetClick}>
          TWEET $AMORE
        </a>
      </h2>
    </div>
  );
};
