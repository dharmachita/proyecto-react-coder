export default function CardPosition({pos}) {
    return(
        <div className='card position'>
            <span className={`number ${pos===1&&'active'}`}>1</span>
            <span className={`number ${pos===2&&'active'}`}>2</span>
            <span className={`number ${pos===3&&'active'}`}>3</span>
        </div>
    )
}