import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {ROUTES} from "./config/routes.js";
import {Navbar} from "./components/Navbar/Navbar.jsx";
import {FooterComponent} from "./components/Footer/Footer.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import Home from "./pages/Home.jsx";
import {Contacts} from "./components/Contacts/Contacts.jsx";
import Service from "./components/Services/Services.jsx";
import About from "./components/About/About.jsx";
import {Conditions} from "./components/Conditions/Conditions.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy.jsx";
import BookingForm from "./components/BookingForm/BookingForm.jsx";


const Layout = () => {
    return (
        <div className="">
            <Navbar/>
            <div className="flex-grow-1">
                <Outlet/>
            </div>
            <FooterComponent/>
        </div>
    );
};


const App = () => {
    const router = createBrowserRouter([
        {
            path: ROUTES.HOME,
            element: <Layout/>,
            errorElement: <NotFound/>,
            children: [
                {
                    path: ROUTES.HOME,
                    element: <Home/>
                },
                {
                    path: ROUTES.NOT_FOUND,
                    element: <NotFound/>
                },
                {
                    path: ROUTES.ABOUT_US,
                    element: <About/>
                },
                {
                    path: ROUTES.CONTACT,
                    element: <Contacts/>
                },
                {
                    path: ROUTES.SERVICES,
                    element: <Service/>
                },
                {
                    path: ROUTES.CONDITIONS,
                    element: <Conditions/>
                },
                {
                    path: ROUTES.PP,
                    element: <PrivacyPolicy/>
                },
                {
                    path: ROUTES.BOOKING,
                    element: <BookingForm/>
                },
            ]
        },
    ]);

    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
};

export default App;