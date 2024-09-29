import Grid from '@mui/material/Grid2';
import { useAppSelector } from '../../utils/hooks/storeHooks';
import { getCommentsList } from '../../store/comments/selectors';
import { CommentItem } from '../CommentItem/CommentItem';

export const CommentsList = () => {
  const comments = useAppSelector(getCommentsList);

  return (
    <Grid container spacing={2} sx={{margin: 2}}>
      {
        comments.map((comment) => {
          const { user, body, likes, id } = comment
          return (
            <CommentItem key={comment.id} fullName={user.fullName} commentBody={body} likes={likes} id={id} />
          )
        })
      }
    </Grid>
  )
}
