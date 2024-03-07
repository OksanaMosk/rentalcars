import photo from '../../images/111.mp4';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.homeContainer}>
      <video className={css.videoBackground} autoPlay loop muted>
        <source src={photo} type="video/mp4" />
      </video>
      <div className={css.about}>
        <p className={css.homeAbout}>
          In addition to the speed and practicality of renting on Rentcars, you
          can alsocount on 7-days-a-week support from a specialized service team
          ready to help you whenever you need.
        </p>
        <p className={css.homeAbout}>
          Get access to the best deals from global car rental companies,
          discounts of 30% and even more exclusive offers all year long.
        </p>
        <p className={css.homeAbout}>
          Place your reservation and earn cashback in your digital wallet to
          save on your next bookings while being able to edit your reservation
          at any time.
        </p>
      </div>
    </div>
  );
};
export default HomePage;
