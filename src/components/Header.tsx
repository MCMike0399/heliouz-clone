import { Dispatch, SetStateAction } from "react";
import Menu from "./Menu";

type Props = {
   tabValue: number;
   setTabValue: Dispatch<SetStateAction<number>>;
};

export default function Header({ setTabValue }: Props) {
   return (
      <header>
         <h1 style={{ color: "#0D3251" }}>Helios O.</h1>
         <h3 style={{ color: "#0D3251" }}>Investigo, divulgo y a veces programo.</h3>
         <Menu setTabValue={setTabValue} />
      </header>
   );
}
