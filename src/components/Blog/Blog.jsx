import { BsBookmarkPlus } from 'react-icons/Bs';

const Blog = ({ blog, handleAddToBookmarks, handleReadingTime }) => {
    const { cover, title, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div>
            <img src={cover} alt={title} className="w-full rounded-lg" />
            <div className="flex items-center justify-between my-3">
                <div className="flex items-center gap-3">
                    <img src={author_img} alt={author} className="w-14" />
                    <div>
                        <h1 className="text-xl font-bold">{author}</h1>
                        <p className="text-[#11111199]">{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <span className="text-[#11111199]">{reading_time} min read </span> <button onClick={() => handleAddToBookmarks(blog)}><BsBookmarkPlus className='text-[#11111199]' /></button>
                </div>
            </div>

            <h1 className='text-3xl font-bold my-2'>{title}</h1>
            {
                hashtags.map((hash, idx) => <a href="" key={idx} className='text-[#11111199] text-lg'> #{hash}</a>)
            }
            <button
                onClick={() => handleReadingTime(reading_time)}
                className='block mt-2 text-[#6047EC] text-lg underline'
            >Mark as read</button>
        </div>
    );
};

export default Blog;
