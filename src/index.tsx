import React from 'react'
import {createRoot} from 'react-dom'

const root = createRoot(document.getElementById('root'))

const App = ()=>{
    const [count,setCount] = React.useState(0)

    return (
        <div>
            <h1>Helloo Friends</h1>
            <h2>Count :{count}</h2>
            <button onClick={()=>setCount(count+1)}>Inctrement</button>
        </div>
    )
}

root.render(<App/>)