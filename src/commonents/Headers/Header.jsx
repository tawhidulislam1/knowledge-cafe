import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between p-4 mx-3 border-b-2  max-w-6xl mx-auto'>
            <h1 className='text-4xl '>Knowledge Cafe</h1>
            <img src={profile}></img>

        </header>
    );
};

export default Header;