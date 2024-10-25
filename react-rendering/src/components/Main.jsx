import React, { useState } from "react";
import Tab from "./Tab";
import Quote from "./Quote";
import Timer from "./Timer";

function Main() {
  const tabs = ["Random Quote", "Timer"];

  const [activeTab, setActiveTab] = useState(0);

  const handleTabSelection = (index) => {
    setActiveTab(index);
  };

  return (
    <main className="main">
      <div className="main-container">
        <div className="tabs-container">
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              title={tab}
              index={index}
              isActive={activeTab === index}
              onTabClick={handleTabSelection}
            />
          ))}
        </div>

        <div className="content">
          {activeTab === 0 && <Quote />}
          {activeTab === 1 && <Timer />}
        </div>
      </div>
    </main>
  );
}

export default Main;
