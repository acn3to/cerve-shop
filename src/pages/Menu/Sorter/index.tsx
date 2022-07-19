import styles from './Sorter.module.scss'
import options from './options.json'
import React, { useState } from 'react'
import classNames from 'classnames'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

interface Props {
  sorter: string
  setSorter: React.Dispatch<React.SetStateAction<string>>
}

export default function Sorter({ sorter, setSorter }: Props) {
  const [open, setOpen] = useState(false)
  const sorterName =
    sorter && options.find((option) => option.value === sorter)?.name
  return (
    <button
      className={classNames({
        [styles.sorter]: true,
        [styles['sorter--active']]: sorter !== '',
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{sorterName || 'Ordenar por'}</span>
      {open ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [styles.sorter__options]: true,
          [styles['sorter__options--active']]: open,
        })}
      >
        {options.map((option) => (
          <div
            className={styles.sorter__option}
            key={option.value}
            onClick={() => setSorter(option.value)}
          >
            {option.name}
          </div>
        ))}
      </div>
    </button>
  )
}
