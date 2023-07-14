import {AppBar, Toolbar, styled} from '@mui/material'
import logo from './logo.png'

const Container = styled(AppBar)`
    background : #060606;
    height : 9vh;
`
const Header = () => {
    const logoStyle = {
        width : 50,
    }
    return (
        <Container position='static'>
            <Toolbar>
                <img src={logo} alt="logo" style ={logoStyle} />
            </Toolbar>
        </Container>
    )
}

export default Header