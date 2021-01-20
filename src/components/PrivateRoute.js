import {useAuth} from "../useAuth";
import {Redirect, Route} from "react-router";

export function PrivateRoute({children, ...rest}){
    let auth = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.isAuthenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
