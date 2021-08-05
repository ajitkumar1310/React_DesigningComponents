
import Header from './Header'
import Speakers from './Speakers'
import Layout from './Layout'
import { AuthProvider, AuthContext } from '../contexts/AuthContext'

const App = () => {


    return (
        <AuthProvider initialLoggedInuser="Ronald">
            <Layout startingTheme={'light'}>
                <div>
                    <Header />
                    <Speakers />
                </div>
            </Layout>
        </AuthProvider>

    )
}
export default App;