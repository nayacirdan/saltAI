import React from 'react'
import styles from './Table.module.scss'
import { inter, metrophobic } from '@/fonts'
import cs from 'classnames'
import arrowUp from '../../assets/arrowUp.png'
import arrowDown from '../../assets/arrowDown.png'
import dash from '../../assets/dash.png'
import Image from 'next/image'
const Table = ({ tableData }) => {
    const formatNumber = (number)=> {
        let nf = new Intl.NumberFormat('en-US')
        return nf.format(number)
    }
    const renderCellLabel=(cellText)=>{
        switch (cellText) {
            case 'up': return <Image alt ='arrowUp' height={14} src={arrowUp.src} width={12} />
            case 'down': return <Image alt ='arrowDown' height={14} src={arrowDown.src} width={12}/>
            case 'none': return <Image alt ='dash' height={1} src={dash.src} width={12}/>
            default: return Number.isNaN(Number(cellText)) ? cellText : formatNumber(cellText)
        }
    }
    const renderCell =(cell, cellIndex) => {
        const cellText =   renderCellLabel(cell)
        const cellClass = cs(
            { [inter.className]: Number.isNaN(Number(cell)),
            [metrophobic.className]: !Number.isNaN(Number(cell)),
            [styles.text]:  Number.isNaN(Number(cell)),
            [styles.number]:  !Number.isNaN(Number(cell)),
            [styles.leftAligned]: cellIndex <= 2,
            [styles.rightAligned]: cellIndex > 2,
            }
        )
       return  (<td className={cellClass}
         key={cellIndex}>
         {cellText}
       </td>)
    }
    const { data, headers } = tableData
    return (
      <div className={styles.tableContainer}>

        <table className={styles.table}>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th className={cs(inter.className, {
                            [styles.leftAligned]: index <= 2,
                            [styles.rightAligned]: index > 2,
                        })}
                  key={index}>
                  {header}
                </th>
                    ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr className={rowIndex % 2 === 0 ? styles.evenRow : styles.oddRow} key={rowIndex}>
                {row.map((cell, cellIndex) => (
                renderCell(cell, cellIndex)
                        ))}
              </tr>
                ))}
          </tbody>
        </table>

      </div>
    )
}

export default Table
