import './navbar.css';

const Navbar = ({navs}) => {
const navList = navs.map ((navList, index) => {
    return <a href = {navList.href} key={navList.href}>{navList.text}</a>
});

return (
<div>
    <nav id ="navs">
        {navList}
    </nav>
</div>
)

};
export default Navbar;