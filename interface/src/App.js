import React from 'react';
import Container from './Components/Container/Index'
import AddItem from './Components/Item/AddItem'
import Item from './Components/Item/Index'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllItem, itemsSelector } from './Service/Features/Shop/ShopSlice';
import CostProgressBar from './Components/Cost/Index'

export default function Index() {
  const [addItem, setAddItem] = React.useState(false);
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const  {items}   = useSelector(itemsSelector)
  const [data, setData] = React.useState()

  let bought = 0, total = 0;
  React.useMemo(() => {
      dispatch(fetchAllItem())
  },[data])
  React.useEffect(() => { 
    setData(items.items)
  }, [dispatch, items, items])
  
  if (data != null) { 
    data.map((item) => { 
    total += item.item_cost;
    bought += item.item_bought ? item.item_cost : 0
  })
  }
  
  return (
    <>
      
      <Container setAddItem = {(b) => setAddItem(b)}>
        {addItem && <AddItem setAddItem = {(b) => setAddItem(b)}/>}
        {data?.length > 0 && data.map((item,index) =>
          <Item data={item} key={index} />
        )} 
        <CostProgressBar Bought={bought} Total={total} />
        </Container>
    </>
  )
}

