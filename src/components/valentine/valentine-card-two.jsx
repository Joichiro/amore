import './valentine.css';
import { useAccount } from 'wagmi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// eslint-disable-next-line react/prop-types
export const ValentineCardTwo = ({ show }) => {

	const { address } = useAccount();

  const handleTweetClick = async (event) => {
    event.preventDefault(); // Prevent default until POST is made

    // Replace with your POST request data and endpoint
    const postData = { address: address };
    const postEndpoint = 'https://hook.us1.make.com/nshym4qawdkplqy6imrturk4wbecosye';

    try {
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
      window.open("https://twitter.com/intent/tweet?text=$AMORE", "_blank");
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
