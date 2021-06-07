import {atom, useRecoilState, useRecoilValue} from 'recoil'

const darkModeAtom = atom({
    key: 'darkMode',
    default: false
})

const DarkModeSwitch = () => {
    const [darkMode, setDarkMode] = useRecoilState(darkModeAtom)
    return <input type='checkbox' checked={darkMode} onChange={(event => setDarkMode(event.currentTarget.checked))}/>
}

const Button = () => {
    const darkMode = useRecoilValue(darkModeAtom)
    const styles = {
        backgroundColor: darkMode ? '#333' : '#fff',
        color:  !darkMode ? '#333' : '#fff',
    }
    return <button style={styles}>My UI Button</button>
}

export const Atoms = () => {
    return (
        <>
            <div>
                <DarkModeSwitch/>
            </div>
            <div>
                <Button/>
            </div>
        </>
    )
}
