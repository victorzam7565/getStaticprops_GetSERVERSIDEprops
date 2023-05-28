import type {GetStaticPathsResult, GetStaticProps,GetStaticPaths,NextPage} from "next";
import api from "@/api";
import {useRouter } from "next/router";
import Link from "next/link";
import type { Store } from "@/types";
import StoreCard from "@/components/StoreCards";

interface Props{
    store:Store
}



const Store:NextPage<Props> =({store})=> {
   const router = useRouter();






    return  <div> hellos storage
       
<StoreCard store={store}/>
<Link href="/"> Volver al inicio con link</Link>
</div> 
    
}

export const getStaticProps : GetStaticProps = async ({params}) =>{
    const store = await api.fetch(params?.id as string);
    return {
        props:{store},
    };
};


export const getStaticPaths :GetStaticPaths =async ()=>{
    const store =await api.list()
   return{
    paths:store.map((store)=>({
        params:{id:store.id}})),
        fallback:'blocking',
   }

}


export default Store;