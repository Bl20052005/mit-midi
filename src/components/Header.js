"use client";
import React from "react";
import Image from "next/image";
import ShortcutModal from "./shortcut-modal";
import FilterModal from "./filter-modal";


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
          src="/assets/icons/restart-icon.png"
          alt="Restart"
          width={30}
          height={30}
          onClick={handleRestartClick}
          className="cursor-pointer"
        />
        <Image
          src="/assets/icons/back-icon.png"
          alt="Back"
          width={30}
          height={30}
          onClick={handleBackClick}
          className="cursor-pointer"
        />
        <Image
          src="/assets/icons/forward-icon.png"
          alt="Forward"
          width={30}
          height={30}
          onClick={handleForwardClick}
          className="cursor-pointer"
        />
        <Image
          src="/assets/icons/filter-icon.png"
          alt="Settings"
          width={30}
          height={30}
          onClick={handleSettingsClick}
          className="cursor-pointer"
        />
        <FilterModal />
        <ShortcutModal />
      </div>

      {/* Title */}
      <div className="font-bold text-white text-xl tracking-wider text-center flex-1">
        M I T I
      </div>

      
      {/* Right controls */}
      <div className="flex space-x-4 flex-1 justify-end">
        <Image
          src="/assets/icons/share-icon.png"
          alt="Share"
          width={30}
          height={30}
          onClick={handleShareClick}
          className="cursor-pointer"
        />
        <Image
          src="/assets/icons/info-icon.png"
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
