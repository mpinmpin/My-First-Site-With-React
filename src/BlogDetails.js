import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        // Display a confirmation dialog
        const shouldDelete = window.confirm('Are you sure you want to delete this blog?');
    
        if (shouldDelete) {
          fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE',
          })
            .then(() => {
              history.push('/blogspage');
            })
            .catch((error) => {
              console.error('Error deleting blog:', error);
            });
        }

    // const handleClick= () => {
    //     fetch('http://localhost:8000/blogs/' + blog.id, {
    //         method: 'DELETE'
    //     }).then(() => {
    //         history.push('/');
    //     })
    }
    

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div className='blog-paragraph'>{ blog.body }</div>
                    <button 
                      className='button-global' 
                      onClick={handleClick}>delete blog
                    </button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;