import { useState } from "react"

const ContadorClick = () => {
    const [contador, setContador] = useState(10);
    const contar = () => {
        setContador(contador + 1);
    }

    return ();
}