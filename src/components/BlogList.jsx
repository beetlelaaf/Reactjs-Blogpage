import Blog from "./Blog";
import useFetch from "./hooks/useFetch";

//This is the main place where all blogs are showed
function BlogList() {

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    
    //console.log(useFetch('http://localhost:8000/blogs'));


    return ( 
        <div className="container p-4 bg-white content blog text-center">
            <h1 className="text-center">All Blogs</h1>
            {/* 
                Putting down a blog component and giving it a prop called 'blogs'
                Blogs is an array of objects, each object has the following properties: id, name, description.
                The objects properties can be used to display in other components. (passing values between components)
            */}
            {error && 
            <div className="p-5 text-center">
                <span className="fs-4 text-danger">Error while loading blogs: {error}</span>
            </div>}

            {isPending && <div class="mt-5 spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>}
            
            {blogs && <Blog blogs={blogs} />} {/* Truey Falsey Operatator that chacks if blogs is null or not and if it does its not going to call the component blogs. */}
        </div>
     );
}

export default BlogList;