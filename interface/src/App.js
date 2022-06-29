import React from 'react';
import Container from './Components/Container/Index'
import AddItem from './Components/Item/AddItem'
import Item from './Components/Item/Index'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllItem, itemsSelector } from './Service/Features/Shop/ShopSlice';


export default function Index() {
  const [addItem, setAddItem] = React.useState(false);
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const  {items}   = useSelector(itemsSelector)
  const [data, setData] = React.useState()
  React.useMemo(() => {
      dispatch(fetchAllItem())
  },[data])
  React.useEffect(() => { 
    setData(items.items)
    console.log(items.items)
  },[dispatch,items,items])
  return (
    <>
      
      <Container setAddItem = {(b) => setAddItem(b)}>
        {addItem && <AddItem setAddItem = {(b) => setAddItem(b)}/>}
        {data?.length > 0 && data.map((item,index) =>
          <Item data={item} key={index} />
        )} 
       
        </Container>
    </>
  )
}

