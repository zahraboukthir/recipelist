import Recard from './Recard'
function Reliste ({data}) {
   console.log(data)
    return (
        <div style= {{display : 'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
           { data.map(
                (recette,i)=> <Recard key={i} el={recette} />
            )}
        </div>
    )
    
}
export default Reliste ;