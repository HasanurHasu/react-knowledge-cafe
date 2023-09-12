const Bookmarks = ({bookmark, readingTime}) => {
    return (
        <div>
            <h1>Spent time on read: {readingTime}</h1>
            <h1>Spent time on read : {bookmark.length} </h1>
        </div>
    );
};

export default Bookmarks;