// Code Keypad Component Here

function Keypad (){
    
    function enterPass(){
        console.log("Entering password...")
    }

    return (
        <div>
            <input type="password" onChange={enterPass}/>
        </div>
    )
}

export default Keypad;