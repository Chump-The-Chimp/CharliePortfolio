import { Contact } from "../pages/contact.js"
import { errorPage } from "../pages/error-page"

export const routes = [
    {
        element: <Contact />,
        path: '/',

        errorElement: {errorPage}
    },
]