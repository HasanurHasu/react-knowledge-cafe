
const Bookmark = ({ bMark}) => {
    const {title} = bMark;
    return (
        <div className="bg-white my-5 mx-5 rounded-lg">
            <h1 className="text-lg font-semibold p-4"> {title} </h1>
        </div>
    );
};

export default Bookmark;