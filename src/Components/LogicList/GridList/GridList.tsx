import React from 'react'
import {ReactNode} from 'react'
import {TCategory} from '../../../Types/category'


type GridListProps<T> = {
  records: T[];
  renderItem: (itemData: T) => ReactNode;
};

type HasId = {id?: number}

const GridList = <T extends HasId>({records, renderItem}: GridListProps<T>) => {
  
  const renderList =
    records.length >= 1
      ? records.map((itemData) => (
          <div key={itemData.id}>
           {renderItem(itemData)}
          </div>
        ))
      : "there are no records";
      
      
  return (
    <div className="flex items-center justify-center" >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      {renderList}
      </div>
    </div>
  )
};

export default GridList;