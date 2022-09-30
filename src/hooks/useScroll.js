import { useEffect, useState } from "react";



export default function useScroll(){
    const [ScrollX,setScrollX] = useState(0)
    const [ScrollY,setScrollY] = useState(0)

    useEffect(()=>{
        function handleScroll() {
            setScrollX(window.scrollX)
            setScrollY(window.scrollY)
        }
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
          }
    },[])

    return {ScrollX,ScrollY}
}