import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppColor from './AppbackgroundColor'; // Import AppColor component

// Create the root and render AppColor components
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppColor heading="Set Green Background" label="Click Green:" color="green" />
    <AppColor heading="Set Blue Background" label="Click Blue:" color="blue" />
    <AppColor heading="Set Yellow Background" label="Click Yellow:" color="yellow" />
  </React.StrictMode>
);
