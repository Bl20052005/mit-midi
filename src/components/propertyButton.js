import { Button } from "@nextui-org/react";
import Image from "next/image";
import PropertyModal from "./property-modal";

export default function propertyButton({
  iconSrc,
  altText,
  onClick,
  label,
  customStyle = {},
}) {
  return (
    <div className="flex flex-col items-center">
      <Button
        auto
        light
        onClick={onClick}
        css={{
          width: "48px",
          height: "48px",
          background: "none",
          borderRadius: "12px",
          border: "1px solid #E5E7EB",
          padding: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...customStyle,
        }}
        style={{
          width: "48px",
          height: "48px",
          background: "none",
          borderRadius: "12px",
          border: "1px solid #E5E7EB",
          padding: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...customStyle,
        }}
      >
        
        <Image src={iconSrc} alt={altText} width={24} height={24} />
        <PropertyModal />
      </Button>
      <span className="text-sm text-gray-300 mt-2">{label}</span>
    </div>
  );
}
