"use client";

import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react"


interface ToolTipContextType {
    showTip: boolean;
    setShowTip: Dispatch<SetStateAction<boolean>>
}

const ToolTipContext = createContext<ToolTipContextType | null>(null);


function Tooltip({children} : PropsWithChildren) {
    const [showTip, setShowTip] = useState(false);

    const value = {
        showTip, 
        setShowTip
    }

  return (
    <ToolTipContext.Provider value={value}>
        <div className="relative">
        {children}
        </div>
    </ToolTipContext.Provider>
  )
}

function TooltipHeader ({children} : PropsWithChildren) {
    const value = useContext(ToolTipContext);

    if(!value) return;
   
    const {setShowTip} = value;
    
    return <span onMouseOver={() => setShowTip(true)} onMouseLeave={() => setShowTip(false)}>{children}</span>
}

export function TooltipContent ({children} : PropsWithChildren) {
    const value = useContext(ToolTipContext);

    if(!value) return;

    const {showTip} = value;

    return <div role="tooltip" 
        className={`absolute z-10 text-white px-3 py-2 mt-1 right-0 text-center shadow-sm text-sm font-bold rounded-md bg-gray-600 ${showTip ? 'visible' : 'invisible'}`}>
        {children}
    </div>;
    
}

Tooltip.Header = TooltipHeader;
Tooltip.Content = TooltipContent;

export default Tooltip;