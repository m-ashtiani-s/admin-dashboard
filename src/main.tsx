import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./core/i18n/i18n.ts";
import { LangProvider } from "./context/langContext/LangContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<LangProvider>
		<App />
	</LangProvider>
);
