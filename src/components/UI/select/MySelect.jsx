import styles from './MySelect.module.scss';

const MySelect = ({ defaultValue, options, value, onChange }) => {

  return (
    <label className={styles.select}>
      Selected
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option disabled>{defaultValue}</option>
        {options.map((option) => (
          <option key={option.name} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </label>
  );
};

export default MySelect;
