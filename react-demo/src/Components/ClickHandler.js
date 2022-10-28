export const ClickHandler = () => {
    
    const clickHandler = (count = 1) => {
        console.log('Button Clicked', count);
    }
    
    return(
        <div>
            <button onClick={clickHandler}>Click</button>
            <button onClick={()=>clickHandler(1)}>Click 5</button>
        </div>
    );
}