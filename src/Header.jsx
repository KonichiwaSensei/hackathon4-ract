import { useContext, useState } from "react"
import { ImageContext } from "./ImageContext";

export default function Header(){

    const [sliderValue, setSliderValue]= useState(200);

    const { imageSize, updateImageSize } = useContext(ImageContext);

    const handleChange = (event) => {
        setSliderValue(event.target.value)
        // console.log(sliderValue);
    }



    return(
        <header className="header">
            <input type="range" min="200" max="500" name="slider" className="slider" onChange={handleChange} />
            <p>{sliderValue}px</p>
            <button onClick={() => updateImageSize(sliderValue) & console.log(imageSize)}>Change Picture Size</button>
        </header>
    )
}