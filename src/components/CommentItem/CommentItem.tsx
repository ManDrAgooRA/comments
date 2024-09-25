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

interface ICommentItem {
  fullName: string,
  commentBody: string,
  likes: number
}

export const CommentItem = ({fullName, commentBody, likes}: ICommentItem) => {
  return (
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
            <DeleteIcon />
          </Box>
        </Box>
      </CardContent>
    </Grid>
  )
}
