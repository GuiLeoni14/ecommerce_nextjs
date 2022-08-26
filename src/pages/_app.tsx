import { CheckoutProvider } from '../context/CheckoutContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <CheckoutProvider>
            <Component {...pageProps} />
        </CheckoutProvider>
    );
}

export default MyApp;
