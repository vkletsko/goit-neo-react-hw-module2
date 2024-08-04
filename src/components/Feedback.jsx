import css from './Feedback.module.css';

const Feedback = ({ options, totalPoints, positivePoints }) => {
  const feedbackOptions = Object.entries(options);

  return (
    <>
      <ul className={css.list}>
        {feedbackOptions.map((feedback, idx) => {
          const [name, value] = feedback;
          return (
            <li key={idx} className={css.item}>
              <span className={css.caption}>{name} : </span>
              <span className={css.value}>{value}</span>
            </li>
          );
        })}
      </ul>
      <div className={css.stats}>
        <p className={css.statsMeta}>Total: {totalPoints}</p>
        <p className={css.statsMeta}>Positive: {positivePoints} %</p>
      </div>
    </>
  );
};

export default Feedback;
