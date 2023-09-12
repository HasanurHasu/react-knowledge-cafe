import { useEffect } from "react";
import { useState } from "react";
import Bookmarks from "../Bookmarks/Bookmarks";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmark, setBookmarks] = useState([]);
    const [readingTime, setReadingTime] = useState(0);

    const handleAddToBookmarks = blog => {
        const newBookmarks = [...bookmark, blog];
        setBookmarks(newBookmarks);
    }
    const handleReadingTime = time => {
        setReadingTime(readingTime + time);
    }

    useEffect(() => {
        fetch('./blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <main>
            <div className="grid grid-cols-3 gap-4 mt-5">
                <div className="col-span-2 flex flex-col gap-8">
                    {
                        blogs.map(blog => <Blog key={blog.id}
                            blog={blog}
                            handleAddToBookmarks={handleAddToBookmarks}
                            handleReadingTime={handleReadingTime}
                        ></Blog>)
                    }
                </div>
                <div className="border rounded-lg">
                    <Bookmarks
                        bookmark={bookmark}
                        readingTime={readingTime}
                    ></Bookmarks>
                </div>
            </div>
        </main>
    );
};

export default Blogs;