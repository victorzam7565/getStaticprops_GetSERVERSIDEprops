
import type {GetServerSideProps,NextPage} from "next";
import type {Store} from "../types";
import { useEffect,useState } from "react";
import StoreCard from "@/components/StoreCards";
import Link from "next/link";
import api from "@/api";

interface Props{
  stores:Store[]
}


const Home :NextPage<Props> =({stores})=> {

  //getserversideprops obviamos todo esto
  {/*const [stores,setStores]= useState<Store[]>([]);

useEffect(() =>{
   fetch("/api/stores")
   .then((res) =>  res.json())
   .then((stores:Store[])=>setStores(stores));

},[]);

if(!stores.length){
    return <span> cargando</span>
}*/}

    return ( 
    <main style={{display:"flex", flexDirection:"column",gap:"12"}}>
    {stores.map((store) =>( 
      <Link key={store.id} href={`/${store.id}`} legacyBehavior>
      <a>
    <StoreCard  store={store}/>
    </a>
    </Link>
    ))} 
    </main>  
  );
};

//con este code actuo mas rapido sin peticion a la appi
export const getServerSideProps: GetServerSideProps = async () =>{ 
const stores = await api.list();

return {
   props:{stores},
};
}


export default Home;









 














