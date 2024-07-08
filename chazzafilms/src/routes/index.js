import { index } from "../pages/index.js"
import { errorPage } from "../pages/error-page"

export const routes = [
    {
        element: <index />,
        path: '/',

        errorElement: {errorPage}
    },
]