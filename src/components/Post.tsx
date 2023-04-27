import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar';
import { format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { ChangeEvent, FormEvent, useState } from 'react';


interface postProps {
  author: {
    name: string; 
    lore: string; 
    avatarUrl: string; 
  };
  publishedAt: Date;
  content: [
    { content: "Conteúdo 1" },
    { content: "Conteúdo 2" },
    { content: "Conteúdo 3" }
  ];
}

export function Post({ author, content, publishedAt }: postProps) {
    const publishetAtFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
      locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
      locale: ptBR,
      addSuffix: true,
    })

    const [comments, setComments] = useState<string[]>([])
    const [newCommentText, setNewCommentText] = useState<string>('')
  
    function handleCreateNewComment(event: FormEvent) {
      event.preventDefault()

      setComments([...comments,  newCommentText])
      setNewCommentText('')
    }
    
    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
      setNewCommentText(event.target.value)
    }
   
    function deleteComment(commentToDelete: string) {
      const commentsWithoutDeletedOne = comments.filter(comment => {
        return comment !== commentToDelete
      })

      setComments(commentsWithoutDeletedOne)
    }
  
    const isNewCommentEmpty = newCommentText.length == 0
    return (
        <article className={styles.post}>
          <header>
            <div className={styles.author}>
            <Avatar src={author.avatarUrl} />
                <div className={styles.info}>
                    <strong>{author.name}</strong>
                    <span>{author.lore}</span>
                </div>
            </div>

            <time dateTime={publishetAtFormatted}>publicado {publishedDateRelativeToNow}</time>
          </header>

          <div className={styles.content}>
            <p>{content[0].content}</p>
            <p>{content[1].content}</p>
            <a href="#">{content[2].content}</a>
          </div>

          <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
             <strong>Give a Feedback</strong>
             
             <textarea 
               onChange={handleNewCommentChange} 
               name='comment'
               placeholder='Deixe seu comentário'
               value={newCommentText}
               required
               />

              <footer id='submitBtn'>
                 <button type='submit' disabled={isNewCommentEmpty}>Coment</button>
              </footer>
          </form>

          <div className={styles.commentList}>
            {comments.map(comment => {
              return (
                 <Comment 
                    key={comment}
                    content={comment}
                    onDeleteComment={deleteComment}
                  />     
            )
          })}
          </div>
        </article>
    )
       
}