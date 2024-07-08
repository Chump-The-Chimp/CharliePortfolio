import { LandingPage } from "../pages/LandingPage"
import { errorPage } from "../pages/error-page"

export const routes = [
    {
        element: <LandingPage />,
        path: '/',

        errorElement: {errorPage}
    },
]