import React from "react";
import { useRouter } from "next/router";
const page1 = ()=>{
    const router = useRouter();
    const {params} = router.query;

    return(
        <h1>Heyo!  {params}</h1>
    )
}
export default page1;