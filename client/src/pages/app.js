import { ClerkProvider } from "@clerk/clerk-react";

export default function App({ Component, pageProps }) {
    return (
        <ClerkProvider>
            <Component {...pageProps} />
        </ClerkProvider>
    );
}