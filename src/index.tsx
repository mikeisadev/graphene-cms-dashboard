import { createRoot } from 'react-dom/client';

import App from "./App";
import './style.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';

const dashBoardRoot = createRoot( (document.querySelector('#graphene') as Element) );
dashBoardRoot.render(<App />);