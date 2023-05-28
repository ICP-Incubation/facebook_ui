import React, { useEffect, useState } from "react";
import Story from "./Story";
import WhatsOnYourMind from "./WhatsOnYourMind";
import Post from "./Post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";

const Feed = () => {
  // const [posts, setPosts] = useState([]);

  // useEffect(() =>
  //   onSnapshot(
  //     query(collection(db, "posts"), orderBy("timestamp", "desc")),
  //     (snapshot) => {
  //       const postData = snapshot.docs.map((doc) => {
  //         const data = doc.data();
  //         const postDate = data.timestamp.toDate();
  //         const currentDate = new Date();
  //         const diffTime = Math.abs(currentDate - postDate);
  //         const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  //         let timestamp;

  //         if (diffDays >= 1) {
  //           timestamp = `${diffDays}D`;
  //         } else {
  //           const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
  //           if (diffHours >= 1) {
  //             timestamp = `${diffHours}h`;
  //           } else {
  //             const diffMinutes = Math.floor(diffTime / (1000 * 60));
  //             timestamp = `${diffMinutes}m`;
  //           }
  //         }

  //         return {
  //           id: doc.id,
  //           data: data,
  //           timestamp: timestamp,
  //         };
  //       });
  //       setPosts(postData);
  //     }
  //   )
  // );

  return (
    <div className="mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
      <Story />
      <WhatsOnYourMind />
      {/* {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          data={post.data}
          timestamp={post.timestamp}
        />
      ))} */}
      <Post />
    </div>
  );
};

export default Feed;
