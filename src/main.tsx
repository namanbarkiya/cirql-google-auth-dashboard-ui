import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";

import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Provider store={store}>
        <GoogleOAuthProvider clientId="166861913365-hvq5udajdf3lnrnr1ovd6kfs35c0lnq8.apps.googleusercontent.com">
            <App />
        </GoogleOAuthProvider>
    </Provider>
);
