import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {KindeProvider} from "@kinde-oss/kinde-auth-react";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <KindeProvider
		clientId="408863917f254222b98b1cbd6d3b2428"
		domain="https://aaronacheampong.kinde.com"
		redirectUri="http://localhost:5173"
		logoutUri="http://localhost:5173"
	>
		<App />
	</KindeProvider>
    
  </StrictMode>,
)
