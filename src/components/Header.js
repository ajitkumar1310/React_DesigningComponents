
import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
export const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const onChangeTheme = () => {


        setTheme(theme == 'black' ? 'white' : 'black');
    }

    return (
        <>
            This is header {theme}
            <button onClick={onChangeTheme}>changeTheme</button>
        </>
    )
}