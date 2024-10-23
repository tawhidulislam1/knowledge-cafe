import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleBookmarksButton}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <h2>blog: {blogs.length}</h2>
            {
                blogs.map(blog => <Blog handleBookmarksButton={handleBookmarksButton} key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleBookmarksButton: PropTypes.func,
}
export default Blogs;