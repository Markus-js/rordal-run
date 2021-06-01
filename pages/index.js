import { Fragment } from "react";
import BegivenhederList from "../components/begivenheder/BegivenhederList";
import Introduction from "../components/ui/introduction/Introduction";


export default function HomePage() {
    return (
        <Fragment>
             <Introduction />
             <BegivenhederList />
        </Fragment>
    )
}
   