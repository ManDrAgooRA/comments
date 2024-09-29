import { useAppDispatch } from '../../utils/hooks/storeHooks'
import { deleteCommentThunk } from '../../store/comments/thunks';
import { Box, Button } from '@mui/material';
import styles from './DeleteComment.module.scss'

interface IDeleteComment {
  commentId: number;
  onClose: () => void;
}

export const DeleteComment = ({commentId, onClose}: IDeleteComment) => {
  const dispatch = useAppDispatch();

  return (
    <Box className={styles['delete-container']}>
      <p>Do you really want to delete comment?</p>
      <Box className={styles['delete-action']}>
        <Button variant="outlined" onClick={() => onClose()}>
          No
        </Button>
        <Button variant="contained" color="error" onClick={() => {
          dispatch(deleteCommentThunk(commentId));
        }
        }>
          Delete
        </Button>
      </Box>
    </Box>
  )
}
