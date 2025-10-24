import { Route, Routes } from "react-router-dom";

import Home from '../containers/Home'
import Users from '../containers/Users'
function Router() {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<Users />} />
        </Routes>
    )
}
export default Router