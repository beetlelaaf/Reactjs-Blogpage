import { useState } from 'react';

function AddBlog() {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);
    
    function handleSubmit(e) {
        e.preventDefault();
        const blog = {title, author, body}

        setIsPending(true);
        setTimeout(() => {
            fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(blog)
            }).then(() => {
                console.log('new blog added');
            } )
            setIsPending(false);
        }, 1000);
        
    }

    return ( 
        <>
            <div className="container p-4 text-center content">
                <h1>Add Blog</h1>
                <div className="container w-50 p-5 mt-5 bg-light rounded">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col d-flex justify-content-center">
                                <input 
                                type="text" 
                                className="form-control form-title text-center" 
                                placeholder="Title"
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                ></input>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <input 
                                type="text" 
                                className="form-control form-author text-center" 
                                placeholder="Author"
                                required
                                onChange={(e) => setAuthor(e.target.value)}
                                ></input>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col d-flex justify-content-center">
                                <textarea 
                                className="textarea form-control form-content" 
                                rows="10" 
                                placeholder="Start writing your blog here..."
                                required
                                onChange={(e) => setBody(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col">
                                {!isPending && <button type="submit" className="btn btn-primary">Add Blog</button>}
                                {isPending && <div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
     );
}

export default AddBlog;