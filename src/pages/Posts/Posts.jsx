import { useEffect } from "react"
import { createNewPost, deletePost, getAllPosts, patchExistingPost } from "../../utilities/middlewares";
import Logo from "../../assets/starbuckslogo.webp";
import { Button } from "reactstrap";

export default function Posts() {

    useEffect(() => {
        getAllPosts().then((data) => {
            console.log(data)
        })
    }, []);

    function handlePostClick(e) {
        e.preventDefault();
        createNewPost();
    }

    function handlePostPatch(e) {
        e.preventDefault();
        patchExistingPost();
    }

    function handlePostDelete(e) {
        e.preventDefault();
        deletePost();
    }


  return (
    <div className="container">
        <img className="logo" src={Logo} alt="starbucks" />
        <div>
        <Button onClick={handlePostClick}>Post</Button>
        <Button onClick={handlePostPatch}>Patch</Button>
        <Button onClick={handlePostDelete}>Delete</Button>
        </div>
    </div>
  )
}
