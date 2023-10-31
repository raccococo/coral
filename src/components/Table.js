import React, {useState, useRef} from "react";
import Completed from "./Status/Completed";
import Pending from "./Status/Pending";
import Progress from "./Status/Progress";
import style from "../css/Table.module.css";

const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);
  
    const sortedItems = React.useMemo(() => {
      let sortableItems = [...items];
      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [items, sortConfig]);
  
    const requestSort = (key) => {
      let direction = 'ascending';
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === 'ascending'
      ) {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    };
  
    return { items: sortedItems, requestSort, sortConfig };
};
  
const Table = (props) => {
    const { items, requestSort, sortConfig } = useSortableData(props.products);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
          return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    const formattedDates = items.map(item => {
        const formattedDate = Intl.DateTimeFormat('it-IT', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }).format(item.dateAndTime);
        const statusIcon = item.status === 1 ? <Completed /> : item.status === 2 ? <Pending /> : <Progress />;
        return { ...item, formattedDate, statusIcon };
    });

    
    
    return (
        <table>
            <thead>
                <tr className={style.top_tr}>
                    <th className={style.flex_id}><button type="button" onClick={() => requestSort('id')} className={getClassNamesFor('ID')}>ID</button></th>
                    <th className={style.flex}><button type="button" onClick={() => requestSort('username')} className={getClassNamesFor('username')}>USERNAME</button></th>
                    <th className={style.flex}><button type="button" onClick={() => requestSort('dateAndTime')} className={getClassNamesFor('DateAndTime')}>DATE & TIME</button></th>
                    <th className={style.flex}><button type="button" onClick={() => requestSort('amount')} className={getClassNamesFor('amount')}>AMOUNT</button></th>
                    <th className={style.flex}><button type="button" onClick={() => requestSort('status')} className={getClassNamesFor('status')}>STATUS</button></th>
                </tr>
            </thead>
            <tbody>
                {formattedDates.map((item) => (
                <tr className={style.border_tr} key={item.id}>
                    <td className={style.flex_id}>{item.id}</td>
                    <td className={style.flex}>{item.username}</td>
                    <td className={style.th_gray}>{item.formattedDate}</td>
                    <td className={style.flex}>{item.amount}€</td>
                    <td className={style.flex}>{item.statusIcon}</td>
                </tr>
                ))}
            </tbody>
        </table>
    );
};
  
export default Table;
  
  