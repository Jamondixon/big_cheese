import QuesoCard from "./QuesoCard"

export default function QuesoContainer({ quesos, clickAction }) {
    
    const displayQuesos = () => quesos.map(queso => {
        return <QuesoCard key={queso.id} queso={queso}  clickAction={clickAction}/>
    })

    return (
        <div className="queso-container">
            {displayQuesos()}
        </div>
    )
}
