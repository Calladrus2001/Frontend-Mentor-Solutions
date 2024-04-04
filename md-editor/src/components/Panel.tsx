"use client";
import { useState } from "react";
import { useHome } from "@/context/HomeContext";
import { ResizablePanel } from "@/components/ui/resizable";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

interface PanelProps {
  title: String;
  canBeHidden: boolean;
}

const Panel: React.FC<PanelProps> = ({ title, canBeHidden }) => {
  const [isVisible, setIsVisible] = useState(true);
  const { isEditorVisible, toggleVisibility } = useHome();

  const handleVisibility = () => {
    setIsVisible((prev) => !prev);
    toggleVisibility();
  };

  return (
    <ResizablePanel
      className={`flex flex-col ${!isEditorVisible && !canBeHidden && "hidden"}`}
    >
      <div className="p-2 flex justify-between items bg-stone-100">
        <p className="text-gray-400 text-sm font-semibold tracking-widest">{title}</p>
        <div className={`cursor-pointer ${!canBeHidden && "hidden"}`}>
          {isVisible ? (
            <MdVisibility onClick={() => handleVisibility()} />
          ) : (
            <MdVisibilityOff onClick={() => handleVisibility()} />
          )}
        </div>
      </div>
      {/* //TODO: fetch content and display it here */}
    </ResizablePanel>
  );
};

export default Panel;
