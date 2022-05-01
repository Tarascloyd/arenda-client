import Button from '../Button/Button'
import './Header.css'

const Header = ():JSX.Element => {
    return (
        <div className='header'>
          <div className='header-block'>
            <Button appearance='primary' arrow='right' link=''>Главная</Button>
            <Button appearance='primary' arrow='right' link='about'>О приложении</Button>
            <Button appearance='primary' arrow='right' link='cities'>Города</Button>
            <Button appearance='primary' arrow='right' link='hotels'>Отели</Button>
          </div>
        </div>  
    );
}

export default Header;