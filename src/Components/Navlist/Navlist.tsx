import React from "react";
import { NavItems } from "@/utils/helpers/helpers";
import Link from "next/link";

export default function Navlist() {
  
  return (
    <nav>
      <ul>
       { 
        NavItems.map((e,i) => {
          return (
            <li key={i}> <Link href={e.link}>{e.list}</Link> </li>
          )
        })
       }
        </ul>
    </nav>
  );
}
