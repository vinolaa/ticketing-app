import TicketForm from "@/app/(components)/TicketForm"

const getTicketById = async (id) => {
    const res = await fetch(`http://127.0.0.1:3000/api/Tickets/${id}`, {
      cache: "no-cache",
    })

    if(!res.ok){
      throw new Error("Failed to get ticket.")
    }

    return res.json()
}

const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true
  let updateTicketData = {}

  if (EDITMODE){
    updateTicketData = await getTicketById(params.id)
    updateTicketData = updateTicketData.foundTicket
  }else{
    updateTicketData = {
      _id: "new"
    }
  }
  return <TicketForm ticket={updateTicketData}/>
}

export default TicketPage