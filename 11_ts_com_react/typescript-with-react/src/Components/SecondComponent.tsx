

type Props = {
    name: string
}

const SecondComponent = (props: Props) => {
  return (
    <div>
        <p>Second Component</p>
        <p>His name is: {props.name}</p>
    </div>
  )
}

export default SecondComponent