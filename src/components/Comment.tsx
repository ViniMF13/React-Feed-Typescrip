import { Avatar } from './Avatar';
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from 'react'

interface commentProps {
    content: string;
    onDeleteComment: (comment: string) => void
}
export function Comment({ content, onDeleteComment }: commentProps){
    const [likeCount, setLikeCount] = useState(0)

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })
    }

    function handleDeletComment(){
       onDeleteComment(content)
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

            <div className={styles.commentBox}>
               <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Vinicius F</strong>
                            <time dateTime="2023-03-28 08:13:30">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeletComment} title='Delete'>
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplause <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}