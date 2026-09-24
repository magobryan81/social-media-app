import CardPost from "../CardPost";
import Button from "../ui/Button";
import Post from "../Post";
import { postData } from "../../data/NewsfeedData";
import { useState } from "react"

export const Newsfeed = () => {
    const [post, setPosts] = useState(postData);
    const [isPopup, setIsPopup] = useState(null);
    const [editPost, setEditPost] = useState(null);

    // sort newest to oldest
    const newestOldest = () => {
        const sortedPosts = [...post].sort((a, b) => new Date(b.timePosted) - new Date(a.timePosted));
        setPosts(sortedPosts);
    }

    // sort oldest to newest
    const oldestNewest = () => {
        const sortedPosts = [...post].sort((a, b) => new Date(a.timePosted) - new Date(b.timePosted));
        setPosts(sortedPosts);
    }

    return (
        <div className="flex flex-col gap-4">
            {/* Add post container */}
            <div className="flex gap-4 p-4 bg-secondary rounded-md">
                <div className="flex items-center gap-2">
                    <img src="/user.png" height={50} width={50} alt="img" />
                </div>
                <div
                    onClick={() => {
                        setEditPost(null);
                        setIsPopup(true)
                    }}
                    className="cursor-pointer w-full p-4 border-border border rounded-sm bg-primary"
                >
                    <span className="text-gray-400">Start a post</span>
                </div>
            </div>

            {/* Filter post */}
            <div className="w-full flex gap-4 justify-end">
                <select
                    onChange={(e) => e.target.value === "newest" ? newestOldest() : oldestNewest()}
                    className="focus:outline-none cursor-pointer"
                >
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </select>
                
            </div>

            {/* Display Post */}
            <Post 
                post={post}
                setPosts={setPosts}
                setEditPost={setEditPost}
                setIsPopup={setIsPopup}
            />

            {/* popup modal form */}
            { isPopup && (
                <CardPost 
                    post={post} 
                    setPosts={setPosts} 
                    setIsPopup={setIsPopup}
                    editPost={editPost}
                    setEditPost={setEditPost}
                />
            )}
        </div>
    )
}
