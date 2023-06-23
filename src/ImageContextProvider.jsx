import { useState } from "react";
import { ImageContext } from "./ImageContext";


export const ImageContextProvider = ({children}) => {
    const [imageSize, setImageSize] = useState(200);
  
    const updateImageSize = (size) => {
      setImageSize(size);
    };
  
    return (
      <ImageContext.Provider value={{ imageSize, updateImageSize }}>
        {children}
      </ImageContext.Provider>
    );
  };
  