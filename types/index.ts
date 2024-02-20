import { MouseEventHandler } from "react";

// Define the interface for the custom button
export interface CustomButtonProps {
  title: string;
  containerStyles?:String;
  handleClick?: 
  MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";

}