import './button.scss'

type ButtonProps = {
  onClick?: () => void
}

export const Button = ({onClick}: ButtonProps) => {
  return (
    <>
      <button className="button" type="submit" onClick={onClick}>
        Send
      </button>
    </>
  )
}
