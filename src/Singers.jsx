export default function Singers({singer}){
    console.log(singer)
    return (
        <div>
            <h3>Name: {singer.name}</h3>
            <h6>Age: {singer.age}</h6>
        </div>
    )
}