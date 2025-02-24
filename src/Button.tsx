

type ButtonPropsType = {
    title: string
    onClick? : () => void
    className?: string
}

export const Button = (props: ButtonPropsType) => {

    const {title , onClick , className} = props
    return (
        <div>
            <button className={className} onClick={ onClick}>{title}</button>
        </div>
    )
}