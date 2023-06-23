import { useState } from "react";
import { ImageContext } from "./ImageContext";


export const ImageContextProvider = ({children}) => {
    const [imageSize, setImageSize] = useState({ width: 200, height: 200 });
  
    const updateImageSize = (width, height) => {
      setImageSize({ width, height });
    };
  
    return (
      <ImageContext.Provider value={{ imageSize, updateImageSize }}>
        {children}
      </ImageContext.Provider>
    );
  };
  