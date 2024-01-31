import {Blog} from "../../components"

export const getServerSideProps = (async () => {
    const res = await fetch(`https://dev.to/api/articles?per_page=15&top=15&tag=design`)
    const data = await res.json()
    console.log(data)
    return {props: {data}}
})

export default function page({data}){
    return <div>{data.map((aData)=>{return <Blog aData={aData} tag="Design"/> })}</div>
}