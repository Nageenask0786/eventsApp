// Write your code here

const EventItem = props => {
  const {eventDetails, getIndex} = props
  const {imageUrl, name, id, location} = eventDetails

  const getId = () => {
    getIndex(id)
  }
  return (
    <li>
      <button type="button">
        <img src={imageUrl} alt="event" onClick={getId} />
        <p>{name}</p>
        <p>{location}</p>
      </button>
    </li>
  )
}

export default EventItem
