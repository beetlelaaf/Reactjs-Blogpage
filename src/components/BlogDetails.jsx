import { useParams } from 'react-router-dom';
import useFetch from './hooks/useFetch';

function BlogDetails() {

    const { id } = useParams();

    const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${ id }`);

    return ( 
        <>
            <div className="container p-4 bg-white text-center">
                {error && <div className="p-5 text-center"><span className="fs-4 text-danger">Error while loading blogs: {error}</span></div>}
                
                {isPending && 
                <div class="mt-5 spinner-border text-secondary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>}

                {blog && 
                <div className='p-5 text-center'>
                    <h2 className='m-5 border-bottom pb-4'>{ blog.title }</h2>
                    <p className='text-start'>{ blog.body }</p>
                    <p className="mt-5 small text-start text-secondary">by: { blog.author }</p>
                </div>}
            </div>
        </>
    );
}

export default BlogDetails;