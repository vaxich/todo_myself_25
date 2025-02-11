

type ButtonPropsType = {
    title: string
    onClick? : () => void
}

export const Button = (props: ButtonPropsType) => {

    const {title , onClick} = props
    return (
        <div>
            <button onClick={ onClick}>{title}</button>
        </div>
    )
}