// Code MovieReviews Here
const MovieReviews = ({ title, img_url }) => (
  <div class="review-list">
    <img src={ img_url } />
    <h3>{ title }</h3>
  </div>
)