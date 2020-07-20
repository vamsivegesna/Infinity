var participants = [];

const MAX_PARTICIPANTS_LIMIT = 5;
const PARTICIPANTS_KEY = "participants";

function addParticipant() {
  let participantsJson = localStorage.getItem(PARTICIPANTS_KEY);
  if (participantsJson != null && typeof participantsJson !== undefined) {
    let participantsTemp = JSON.parse(participantsJson);
    // if (typeof participantsTemp !== Array) {
    //   localStorage.removeItem(PARTICIPANTS_KEY);
    //   localStorage.setItem(PARTICIPANTS_KEY, participants);
    // } else {

    // }
    participants = JSON.parse(participantsJson);
    if (participants.length >= MAX_PARTICIPANTS_LIMIT) {
      alert(
        "We're Sorry! Registrations are closed as number of participants reached maximum limit."
      );
      return;
    }
  }
  let newParticipant = document.getElementById("name").value;
  participants.push(newParticipant);
  localStorage.setItem(PARTICIPANTS_KEY, JSON.stringify(participants));
  alert("Registration successful!");
  return;
}

function getAllParticipants() {
  participants = JSON.parse(localStorage.getItem(PARTICIPANTS_KEY));
  // Create the list element:
  let list = document.createElement("ul");

  for (let i = 0; i < participants.length; i++) {
    // Create the list item:
    let item = document.createElement("li");

    // Set its contents:
    item.appendChild(document.createTextNode(participants[i]));

    // Add it to the list:
    list.appendChild(item);
  }

  // Finally, return the constructed list:
  return list;
}
