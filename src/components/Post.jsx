import { useState } from "react"
import { formatDistanceToNow } from "date-fns";
import Button from "./ui/Button";
import { ThumbsDown, ThumbsUp, Ellipsis, Trash, Pen } from "lucide-react";

const Post = ({post, setPosts, setEditPost, setIsPopup, setDeletePost}) => {
    const [isOption, setIsOption] = useState(null);

    // function to like a post
    const likeButton = (id) => {
        setPosts(post.map(data => data.id === id ? {...data, liked: !data.liked, disliked: false } : data))
    }

    // function to dislike a post
    const dislikeButton = (id) => {
        setPosts(post.map(data => data.id === id ? {...data, disliked: !data.disliked, liked: false } : data))
    }

    // function to delete post
    const deletepost = (id) => {
        setPosts((prevPost) => prevPost.filter(post => post.id !== id));
    };

    return (
        <div className="flex flex-col gap-4">
            {post.map((data) => (
                <article
                    key={data.id}
                    className="flex flex-col gap-4 bg-secondary rounded-md p-4"
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <img src="/user.png" height={50} width={50} alt="img" />
                            <div className="flex flex-col items-start justify-between">
                                <span>Bryan Mago</span>
                                <span className='text-sm text-label'>{formatDistanceToNow(new Date(data.timePosted), {addSuffix: true})}</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2 relative">
                            <button
                                onClick={() => setIsOption(isOption === data.id ? null : data.id)}
                                aria-label="Option"
                            >
                                <Ellipsis className="text-label hover:text-black cursor-pointer"/>
                            </button>
                            { isOption === data.id && (
                                <>
                                    {/* close when clicked outside */}
                                    <div
                                        className="fixed inset-0 z-10"
                                        onClick={() => setIsOption(null)}
                                    />

                                    <div className="flex flex-col items-center absolute top-7 right-0 z-100 gap-2 bg-secondary">
                                        <Button
                                            onClick={() => {
                                                setEditPost(data)
                                                setIsOption(false)
                                                setIsPopup(true)
                                            }}
                                            className={"flex items-center gap-2 w-full p-4 whitespace-nowrap hover:bg-primary"}
                                        >
                                            <Pen className="text-label size-5"/>
                                            <span>Edit Post</span>
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                deletepost(data.id)
                                            }}
                                            className={"flex items-center gap-2 w-full p-4 whitespace-nowrap hover:bg-primary"}
                                        >
                                            <Trash className="text-label size-5"/>
                                            <span>Delete Post</span>
                                        </Button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="border-border border-b pb-4">
                        <p>{data.text}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button
                            onClick={() => {
                                likeButton(data.id)
                            }}
                            aria-label="Like post"
                        >
                            <ThumbsUp className={`size-5 ${data.liked ? "text-blue-500" : "text-label"}`}/>
                        </Button>
                        <Button
                            onClick={() => {
                                dislikeButton(data.id)
                            }}
                            aria-label="Dislike post"
                        >
                            <ThumbsDown className={`size-5 ${data.disliked ? "text-red-500" : "text-label"}`}/>
                        </Button>
                    </div>
                </article>
            ))}
        </div>
    )
}

export default Post