"use client";
import React from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowBigDown } from "lucide-react";

const Dashboard = () => {
  const session = useSession();

  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "loading"
            : data?.map((post) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <Image
                      src={
                        post.img.startsWith("https://images.pexels.com/")
                          ? post.img
                          : "/public/venue-card-placeholder.png"
                      }
                      alt=""
                      width={200}
                      height={120}
                    />
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <span
                    className={styles.delete}
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <div className={styles.heading}>
            <h1 className={styles.newPost}>Add New Posts</h1>
            <br />

            <ArrowBigDown className={styles.arrowBigDown}/>
            <br />          <br />
            <br />

            <h2 className={styles.subHeading}>
              MAKE SURE TO USE THIS WEBSITE WHEN IMPORTING IMAGES!!
            </h2>
            <a className={styles.imageLink} href="https://www.pexels.com/" target="_blank"><p>https://www.pexels.com/</p></a>
          </div>
          <input type="text" placeholder="Title for Recipe" className={styles.input} />
          <input type="text" placeholder="Short Description" className={styles.input} />
          <input type="text" placeholder="Image URL (starts with https://images.pexels.com)" className={styles.input} />

          <textarea
            placeholder="Provide Your Full Recipes Here:"
            className={styles.textArea}
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
