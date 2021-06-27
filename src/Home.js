/** @format */

import BlogList from "./BlogList";
import "./index.css";
import useFetch from "./useFetch";

export default function Home() {
  const { Data: blogs, isPending, error } = useFetch(
    "http://localhost:8000/blogs"
  );

  return (
    <div className="home">
      {error && <div className="errorMsgSyle">{error}</div>}
      {isPending && <div className="loadingStyle">Loading.......</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}
