import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import jobs from '../../public/jobs.json';
import styles from '../../styles/JobCard.module.scss';

export default function Jobs() {

  return (
    <div className={styles.container}>
      {jobs.map(job => (
        <div className={styles.card} key={job.id}>
          <div className={styles.main}>
            <Box
              component="img"
              sx={{
                height: 100,
                width: 100,
                mr: 2,
                mb: 2
              }}
              alt={`${job.company} job offer image`}
              src={`${job.image}`}
            />
            <div className={styles.information}>
              <span className={styles.title}>{job.title}</span>
              <span>{job.company}</span>
              <span>{job.location}</span>
              <span>{job.datetime}</span>
            </div>
            <div className={styles.ratingPayrate}>
              <Rating value={job.rating} precision={0.5} readOnly />
              <span>{`${job.payrate.toFixed(2)}€/h`}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}