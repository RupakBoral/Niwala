import { Suspense } from "react";
import Shimmer from "./Shimmer";

const Grocery = () => {
    return(
        <Suspense fallback = {
            <Shimmer />
        } >
            <h1>Groceries Components</h1>
        </Suspense>
    )
}

export default Grocery;