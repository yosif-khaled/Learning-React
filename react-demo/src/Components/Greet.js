export const Greet = ( props ) => {
    return (
    <div>
        <h1>{ props.name } AKA { props.heroName }</h1>
        {props.children}
    </div>

    );
}

// export default Greet;