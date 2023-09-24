"use client"
import { Post } from '../types';
import styles from './Card.module.scss'
 function Card(post: Post) {
  return (
    <>
      
<a href="#" className={styles.a}>
    <h5 className="">{post.header}</h5>
    <p className="">{post.body}</p>
</a>

    </>
  );
}

export default Card
