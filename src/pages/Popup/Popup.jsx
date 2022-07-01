import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const Popup = () => {
  const [currentTab, setCurrentTab] = useState();

  useEffect(() => {
    getCurrentTab().then((tab) => setCurrentTab(tab))
  
  }, [])


  useEffect(() =>  {

    if (currentTab != null) {
      console.log(currentTab.id);
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
          target: {tabId: currentTab.id},
          function: setPageBackgroundColor,
        });
    });
      
    }

  }, [currentTab])

  function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
      document.body.style.backgroundColor = color;
    });
  }

  async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);

    return tab;
  }  

  
  return (
    <div className="App">
      TESTTTTTTTTTTTTTTTT
      <button onClick={() => {}}>
        Change COLOR
      </button>
    </div>
  );
};

export default Popup;
