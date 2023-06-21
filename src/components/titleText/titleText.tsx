
function TitleText({ text, size, color }: { text: string, size: string, color: string }): JSX.Element {
  return (
    <p className={`${size} ${color}`} > {text}</p >
  )
}

export default TitleText