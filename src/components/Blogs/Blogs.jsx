import { useEffect } from "react";
import { useState } from "react";
import Bookmarks from "../Bookmarks/Bookmarks";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmark, setBookmarks] = useState([]);

    const handleAddToBookmarks = blog => {
        console.log(blog);
        const newBookmarks = [...bookmark, blog];
        setBookmarks(newBookmarks);
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
                        ></Blog>)
                    }
                </div>
                <div className="border rounded-lg">
                    <Bookmarks bookmark={bookmark}></Bookmarks>
                </div>
            </div>
        </main>
    );
};

export default Blogs;