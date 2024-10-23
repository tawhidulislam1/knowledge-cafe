import PropTypes from 'prop-types';

import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleBookmarksButton }) => {
    const { cover, author, title, posted_date, reading_time, author_img, hashtags } = blog;
    return (
        <div>
            <img className='w-full mb-6' src={cover} alt="" />
            <div className='flex justify-between items-center  mb-6'>
                <div className='flex gap-4 items-center'>
                    <div>
                        <img className='w-14' src={author_img} alt="" />
                    </div>
                    <div>
                        <h4>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} To read</span>
                    <button onClick={()=>handleBookmarksButton(blog)} className='ml-1'><FaRegBookmark /></button>
                </div>
            </div>
            <h3 className="text-3xl  mb-6">{title}</h3>
            {
                hashtags.map(hash => <span key={hash}><a href=''>#{hash}</a></span>)
            }
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarksButton: PropTypes.func
}
export default Blog;