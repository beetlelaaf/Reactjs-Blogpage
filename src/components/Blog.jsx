import { Link } from 'react-router-dom';

function Blog({blogs, deleteBlog}) {

    //The return function is going to return the const variables.
    return (
        <>
            {blogs.map((blog, index) => {
                return (
                    <Link to={`/blogs/${blog.id}`} key={index}>
                        <div key={blog.id} className="row blog-body m-3 hover">
                            <div className="col-4 p-4 text-end border-end">
                                <h4>{blog.title}</h4>
                                <p className="small text-secondary">by: {blog.author}</p>
                            </div>
                            <div className="col-8 p-4 rounded blog-overview">
                                <span>{blog.body}</span>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </>
    );
}

export default Blog;