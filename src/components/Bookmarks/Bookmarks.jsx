const Bookmarks = ({bookmark}) => {
const {reading_time} = bookmark;
    return (
        <div>
            <h1>Spent time on read : {parseFloat(reading_time) + parseFloat(reading_time)} </h1>
        </div>
    );
};

export default Bookmarks;