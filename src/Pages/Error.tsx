import { useRouteError } from "react-router-dom";
import '@/SCSS/Error.scss'; // Import the Error page styles

export default function ErrorPage() {

const error = useRouteError() as { status?: number; message?: string };
console.error(error);

return (

    <div id='error-page'>

        <h1>Oops!</h1>

        <p>Sorry, an unexpected error has occured.</p>

        <p>
            <i>{error.status || error.message}</i>
        </p>

    </div>

);

}
