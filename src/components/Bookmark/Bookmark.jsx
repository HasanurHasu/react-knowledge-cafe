import PropTypes from 'prop-types';
const Bookmark = ({ bMark}) => {
    console.log(typeof bMark);
    const {title} = bMark;
    return (
        <div className="bg-white my-5 mx-5 rounded-lg">
            <h1 className="text-lg font-semibold p-4"> {title} </h1>
        </div>
    );
};
Bookmark.propTypes = {
    bMark: PropTypes.object
}
export default Bookmark;