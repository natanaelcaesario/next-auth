import "../styles/globals.css";
import { Provider } from "next-auth/cleint";
function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component nt {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
