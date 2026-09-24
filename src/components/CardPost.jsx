import { useEffect, useState } from "react"
import { X } from "lucide-react";
import Button from "./ui/Button";


const CardPost = ({post, setPosts, setIsPopup, editPost, setEditPost}) => {
    
    const [content, setContent] = useState('');

    useEffect(() => {
        if (editPost) {
            setContent(editPost.text);
        }
    }, [editPost])
    
    // function for adding and updating a post
    const addPost = (e) => {
        e.preventDefault();

        if (editPost) {
            const updateContent = post.map((data) => {
                if (data.id === editPost.id) {
                    return {...data, text: content };
                }
                return data;
            });
            setPosts(updateContent);
        } else {
            const newPost = {
                id: Date.now(),
                text: content,
                timePosted: new Date().toISOString(),
            }
            setPosts(prevPosts => [newPost, ...prevPosts])
        }

        
        setContent("")
        setIsPopup(false);
        setEditPost(null)
    }
    return (
        <>

            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm p-4">
                <form
                    onSubmit={addPost}
                    className="flex flex-col gap-4 p-4 w-full lg:w-[30%] rounded-md bg-secondary"
                >
                    <div className="flex justify-end w-full">
                        <Button
                            onClick={() => setIsPopup(false)}
                            aria-label="Close"
                        >
                            <X className="text-label hover:black cursor-pointer"/>
                        </Button>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/user.png" height={50} width={50} alt="img" />
                        <span>Bryan Mago</span>
                    </div>
                    <div>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full resize-none rounded-md p-4 border-border border"
                            placeholder="Share your thoughts here"
                            rows={10}
                        >

                        </textarea>
                    </div>
                    <div className="flex justify-end w-full">
                        <Button
                            type="submit"
                            children={editPost ? "Update" : "Post"}
                            className={"px-4 py-2 bg-black text-white hover:opacity-80"}    
                        />
                    </div>
                </form>
            </div>
    
        </>
        
    )
}

export default CardPost