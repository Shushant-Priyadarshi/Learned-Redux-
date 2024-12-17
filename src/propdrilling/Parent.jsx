import GrandParent from "./GrandParent"


const Parent = ({name}) => {
  return (
    <GrandParent name={name}/>
  )
}

export default Parent