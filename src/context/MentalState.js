import MentalContext from "./MetalContext";

const MentalState=(props)=>{
  const host = "http://localhost:5000";

  const  getPsychiatrist= async () => {
    //API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
    });
    const json = await response.json();
    setNotes(json);
  }
}