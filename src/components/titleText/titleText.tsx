/**
 * a resuble element for text title
 * @param param0 text, size , color to modify style of text
 * @returns jsx --  a p element with required style
 */
function TitleText({ text, size, color }: { text: string, size: string, color: string }): JSX.Element {
  return (
    <p className={`${size} ${color}`} > {text}</p >
  )
}

export default TitleText