import filters from './filters.json'
import styles from './Filters.module.scss'

type IOption = typeof filters[0]

export default function Filters(){
  
  function selectFilter(option: IOption) {}

  return (
    <div className={styles.filters}>
      {filters.map((option) => (
        <button className={styles.filters__filter} key={option.id} onClick={() => selectFilter(option)}>
          {option.label}
        </button>
      ))}
    </div>
  )
}