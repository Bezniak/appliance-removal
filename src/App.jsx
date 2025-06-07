import {createBrowserRouter, NavLink, Outlet, RouterProvider} from "react-router-dom";
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
import {motion} from "framer-motion";
import {useState} from "react";
import {FaRegCalendarCheck} from "react-icons/fa6";
import {handleClick} from "./common/helpers.js";


const Layout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openModalHandler = () => {
        setIsModalOpen(true);
    };

    return (
        <div className="">
            <Navbar/>
            <div className="flex-grow-1">
                <Outlet/>
            </div>
            <FooterComponent/>

            {/* Floating Action Button with larger permanent shadow animation */}
            <NavLink to={ROUTES.BOOKING} onClick={handleClick}>
                <motion.button
                    initial={{
                        boxShadow: "0 0 20px rgba(132, 204, 22, 0.4)",
                        scale: 1
                    }}
                    animate={{
                        boxShadow: [
                            "0 0 20px rgba(132, 204, 22, 0.4)",
                            "0 0 45px rgba(132, 204, 22, 1)",
                            "0 0 20px rgba(132, 204, 22, 0.4)"
                        ],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="fixed bottom-6 md:bottom-10 right-5 md:right-10 z-50 cursor-pointer bg-white text-lime-600 p-3 md:p-4 rounded-full
                    focus:outline-none focus:ring-2 hover:bg-lime-600 hover:text-white transition"
                    title="Забронировать услугу"
                >
                    <FaRegCalendarCheck className="text-3xl px-1" />
                </motion.button>
            </NavLink>


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