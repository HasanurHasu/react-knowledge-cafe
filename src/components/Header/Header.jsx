import profile from "../../assets/profile.png"
const Header = () => {
    return (
        <header>
            <div className="flex justify-between items-center my-3">
            <h1 className='text-3xl text-center font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
            </div>
            <hr />
        </header>
    );
};

export default Header;