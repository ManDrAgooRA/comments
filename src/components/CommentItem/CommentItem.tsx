import { createPortal } from 'react-dom';
import { useState } from 'react';
import Grid from '@mui/material/Grid2';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material';
import styles from './CommentItem.module.scss'
import { Modal } from '../Modal/Modal';
import { DeleteComment } from '../DeleteComment/DeleteComment';

interface ICommentItem {
  fullName: string,
  commentBody: string,
  likes: number
  id: number;
}

export const CommentItem = ({fullName, commentBody, likes, id}: ICommentItem) => {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);

  const handleOpenDeleteModal = () => {
    setIsOpenDeleteModal(true)
  }

  return (
    <>
    <Grid size={{ xs: 12, md: 4, xl: 3 }} className={styles['card-item']}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {fullName.split('')[0]}
          </Avatar>
        }
        title={fullName}
        className={styles['card-header']}
      />
      <CardContent className={styles["card-content"]}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {commentBody}
        </Typography>
        <Box className={styles['card-bottom']}>
          <Box className={styles['card-heart']}>
            <FavoriteIcon />
            {likes}
          </Box>
          <Box className={styles['card-delete']}>
            <DeleteIcon onClick={() => handleOpenDeleteModal()}/>
          </Box>
        </Box>
      </CardContent>
    </Grid>
    {createPortal(
      <Modal isOpen={isOpenDeleteModal} onClose={() => setIsOpenDeleteModal(false)}>
        <DeleteComment commentId={id} onClose={() => setIsOpenDeleteModal(false)}/>
      </Modal>,
      document.body
    )}
    </>
  )
}
