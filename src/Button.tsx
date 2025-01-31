

type ButtonPropsType = {
    title: string
}

export const Button = (props: ButtonPropsType) => {

    const {title} = props
    return (
        <div>
            <button>{title}</button>
        </div>
    )
}