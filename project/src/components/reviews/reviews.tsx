import ReviewsProps from './reviews.type';
import Comment from '../../types/comment.type';

function Reviews(props: ReviewsProps): JSX.Element {
  const comments = props.comments.map((comment: Comment): JSX.Element =>
    (
      <li className="reviews__item" key={comment.id}>
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={comment.author.avatarUrl} width="54" height="54" alt="Reviews avatar" />
          </div>
          <span className="reviews__user-name">{comment.author.name}</span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: '80%'}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {comment.comment}
          </p>
          <time className="reviews__time" dateTime="2019-04-24">{comment.date}</time>
        </div>
      </li>
    )
  );

  return (
    <ul className="reviews__list">
      {comments}
    </ul>
  );
}

export default Reviews;