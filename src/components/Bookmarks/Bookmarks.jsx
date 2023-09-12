import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmark, readingTime }) => {
    return (
        <div>
            <div className="p-5 bg-[#6047EC1A] rounded-lg border border-[#6047EC]">
                <h1 className="text-[#6047EC] text-xl font-bold text-center">Spent time on read: {readingTime} min</h1>
            </div>
            <div className="bg-[#1111110D] rounded-lg mt-6 py-6">
                <h1 className="text-xl font-bold px-6 ">Bookmarked Blogs : {bookmark.length} </h1>
                {
                    bookmark.map((bMark, idx) => <Bookmark key={idx} bMark={bMark}></Bookmark>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;