
const createMessage = async (message) => {
    const settings = {
        method: 'POST',
        body: JSON.stringify(message),
        headers: {
        'Content-Type': 'application/json'
        }
    }
  const res = await fetch(`http://18.188.241.122/messages`, settings);
  return res.status === 201 ? true : false;
}

export default createMessage;