import {useState, useEffect} from 'react'

 
const Caculator = () => {
    const  types = ['+', '-', '*', '/'] 
    const  [numberFirst, setNumberFirst] = useState('');
    const  [numberSecond, setNumberSecond] = useState('');
    const  [result, setResult] = useState(0); 
    
    const  [Caculation, setCaculation] = useState('');
    

    useEffect(() => {

        const handleClick = () => {
            if(Caculation === '+')
            {
                setResult(Number(numberFirst) + Number(numberSecond));
            }
            if(Caculation === '-')
            {
                setResult(Number(numberFirst) - Number(numberSecond));
            }
            if(Caculation === '*')
            {
                setResult(Number(numberFirst) * Number(numberSecond));
            }
            if(Caculation === '/')
            {
                setResult(Number(numberFirst) / Number(numberSecond));
            }   
            
        }

        window.addEventListener('click', handleClick);
       return () => { 
        window.removeEventListener('click', handleClick);
       }
    },[numberFirst,numberSecond,Caculation]) 


    return (
        <div >
            <h1>Caculator</h1>
            <input type="text" value={numberFirst} onChange={(event) => setNumberFirst(event.target.value)} />
            <input type="text" value={numberSecond} onChange={(event) => setNumberSecond(event.target.value)} />
            <div>
                {
                    types.map((type) => ( 
                        <button
                            key={type}
                            style={{padding:20, margin: 10}}
                            onClick={()=> setCaculation(type)}
                        >
                            {type}
                        </button>

                    ))
                }
            </div>
            {/* <div style={{paddingTop: 20}}>
                <button> = </button>
            </div> */}
            <div>
                 Kết quả: {!isNaN(result) ? result : 'Ket qua sai'}
            </div>
            



        </div>
        


    )



}


export default Caculator;