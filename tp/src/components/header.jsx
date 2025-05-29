import '../styles/header.css';

function Header(props) {
    return(
        <header>
            <ol>
                <li><a href='#section1'> Section 1 </a></li>
                <li><a href='#section2'> Section 2 </a></li>
                <li><a href=''> Section 3 </a></li>
            </ol>
        </header>
    )
}

export default Header;