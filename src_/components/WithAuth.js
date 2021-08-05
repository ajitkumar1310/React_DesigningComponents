import { useContext, UseContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export const WithAuth = (Component) => {

    return (() => {
        const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
        return (
            <Component loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}></Component>
        )
    }

    )
}
// export function WithAuth(Component) {
//     return function (props) {
//         const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
//         return (<Component loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} ></Component>)
//     }
// }