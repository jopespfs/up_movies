export const Button = (props) => {

    return (
        <button
            type={props.tipo}
            className={`btn btn-primary col-md-${props.width}`}
            style={{ marginRight: '1rem' }} 
            //onClick={props.click}
        >
            {props.nome}
        </button>
    )
}
