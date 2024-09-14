"use client";
import React from "react";
import Image from "next/image";

// Importing icons
import restartIcon from "../assets/icons/restart-icon.png";
import backIcon from "../assets/icons/back-icon.png";
import forwardIcon from "../assets/icons/forward-icon.png";
import settingsIcon from "../assets/icons/filter-icon.png";
import shareIcon from "../assets/icons/share-icon.png";
import infoIcon from "../assets/icons/info-icon.png";

const Header = () => {
  // Event handlers for each icon
  const handleRestartClick = () => {
    console.log("Restart clicked");
  };

  const handleBackClick = () => {
    console.log("Back clicked");
  };

  const handleForwardClick = () => {
    console.log("Forward clicked");
  };

  const handleSettingsClick = () => {
    console.log("Settings clicked");
  };

  const handleShareClick = () => {
    console.log("Share clicked");
  };

  const handleInfoClick = () => {
    console.log("Info clicked");
  };

  return (
    <div className="relative w-full h-16 bg-[#666666] border-b border-neutral-100 flex items-center justify-between px-4">
      {/* Left controls */}
      <div className="flex space-x-4 flex-1">
        <Image
          src={restartIcon}
          alt="Restart"
          width={30}
          height={30}
          onClick={handleRestartClick}
          className="cursor-pointer"
        />
        <Image
          src={backIcon}
          alt="Back"
          width={30}
          height={30}
          onClick={handleBackClick}
          className="cursor-pointer"
        />
        <Image
          src={forwardIcon}
          alt="Forward"
          width={30}
          height={30}
          onClick={handleForwardClick}
          className="cursor-pointer"
        />
        <Image
          src={settingsIcon}
          alt="Settings"
          width={30}
          height={30}
          onClick={handleSettingsClick}
          className="cursor-pointer"
        />
      </div>

      {/* Title */}
      <div className="font-bold text-white text-xl tracking-wider text-center flex-1">
        M I T I
      </div>

      {/* Right controls */}
      <div className="flex space-x-4 flex-1 justify-end">
        <Image
          src={shareIcon}
          alt="Share"
          width={30}
          height={30}
          onClick={handleShareClick}
          className="cursor-pointer"
        />
        <Image
          src={infoIcon}
          alt="Info"
          width={30}
          height={30}
          onClick={handleInfoClick}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
