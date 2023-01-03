import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import workers from '../../public/workers.json';
import styles from '../../styles/JobCard.module.scss';

export default function Workers() {

  return (
    <div className={styles.container}>
      {workers.map(worker => (
        <div className={styles.card} key={worker.id}>
          <div className={styles.main}>
            <Box
              component="img"
              sx={{
                height: 100,
                width: 100,
              }}
              alt="image of worker"
              src={`${worker.image}`}
            />
            <div className={styles.information}>
              <span className={styles.title}>{worker.title}</span>
              <span>{worker.company}</span>
              <span>{worker.location}</span>
              <span>{worker.datetime}</span>
            </div>
            <div className={styles.extra}>
              <Rating value={worker.rating} precision={0.5} readOnly />
              <span>{`${worker.payrate.toFixed(2)}€/h`}</span>
            </div>
          </div>
          <div className={styles.description}>
            <span className={styles.title}>Description</span>
            <br />
            {worker.description}
          </div>
        </div>
      ))}
    </div>
  );
}