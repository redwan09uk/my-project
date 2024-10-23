import PropTypes from 'prop-types';
import { IoMdBookmark } from "react-icons/io";



const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    // disstructuring 
    const{title, cover,author, author_img,reading_time,posting_time,hashtags} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className="w-full mb-8" src={cover} alt={`cover picture of the title ${title}`} />
            <div className="flex justify-between mb-4 ">
                <div className='flex'>
                    <img className="w-14" src={author_img} alt=""/>
                
                
                <div className='ml-6'>
                    <h3 className="text-2xl">{author}</h3>
                    <p>{posting_time}</p>
                </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button 
                    onClick={()=>handleAddToBookmark(blog)}
                    className='ml-2 text-2xl text-red-400'><IoMdBookmark></IoMdBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx)=><span key={idx}><a href="">#{hash}</a></span>)
                // index(idx)
                }
            </p>
            <button 
            onClick={()=>handleMarkAsRead(reading_time)}
            className="text-purple-800 font-bold underline">Mark as Read
            </button>
        </div>
    );
};

// Blog.propTypes = {
//   blog: PropTypes.object.isRequired,
//   handleAddToBookmark: PropTypes.func.isRequired
// };

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
  };
export default Blog;