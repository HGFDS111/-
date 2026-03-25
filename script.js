const eventsStore = [
  {
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    description: "Being an INFJ",
    date: new Date(2024, 2, 23, 15),
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "offline",
    attendees: 99,
    category: "Hobbies and Passions",
    distance: 50,
  },
  {
    title: "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
    description: "New York AI Users",
    date: new Date(2024, 2, 23, 11, 30),
    image:
      "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "offline",
    attendees: 43,
    category: "Technology",
    distance: 25,
  },
  {
    title: "Book 40+ Appointments Per Month Using AI and Automation",
    description: "New Jersey Business Network",
    date: new Date(2024, 2, 16, 14),
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    category: "Technology",
    distance: 10,
  },
  {
    title: "Dump writing group weekly meetup",
    description: "Dump writing group",
    date: new Date(2024, 2, 13, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 77,
    category: "Business",
    distance: 100,
  },
  {
    title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
    description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 140,
    category: "Social Activities",
    distance: 75,
  },
  {
    title: "All Nations - Manhattan Missions Church Bible Study",
    description: "Manhattan Bible Study Meetup Group",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "offline",
    category: "Health and Wellbeing",
    distance: 15,
  },
];

const eventsList = document.getElementById("eventsList");
const typeFilter = document.getElementById("typeFilter");
const categoryFilter = document.getElementById("categoryFilter");
const distanceFilter = document.getElementById("distanceFilter");
const dayFilter = document.getElementById("dayFilter");

function formatDayValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

function formatEventDate(date) {
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  };

  return date.toLocaleString("en-US", options).replace(",", "").toUpperCase();
}

function renderEvents(events) {
  if (!eventsList) return;

  eventsList.innerHTML = "";

  events.forEach((event) => {
    const distanceText =
      event.type === "offline" ? ` (${event.distance} km)` : "";

    const attendeesText = event.attendees
      ? `<p class="event_row_attendees">${event.attendees} attendees</p>`
      : "";

    const card = document.createElement("article");
    card.className = "event_row";

    card.innerHTML = `
      <img src="${event.image}" alt="${event.title}">
      <div class="event_row_content">
        <p class="event_row_date">${formatEventDate(event.date)}</p>
        <h3 class="event_row_title">${event.title}</h3>
        <p class="event_row_meta">${event.category}${distanceText}</p>
        ${attendeesText}
      </div>
    `;

    eventsList.appendChild(card);
  });
}

function filterEvents() {
  if (!typeFilter || !categoryFilter || !distanceFilter || !dayFilter) return;

  const selectedType = typeFilter.value;
  const selectedCategory = categoryFilter.value;
  const selectedDistance = distanceFilter.value;
  const selectedDay = dayFilter.value;

  const filteredEvents = eventsStore.filter((event) => {
    const matchesType =
      selectedType === "all" || event.type === selectedType;

    const matchesCategory =
      selectedCategory === "all" || event.category === selectedCategory;

    const matchesDistance =
      selectedDistance === "all" ||
      (event.type === "offline" &&
        event.distance === Number(selectedDistance));

    const matchesDay =
      selectedDay === "all" || formatDayValue(event.date) === selectedDay;

    return (
      matchesType &&
      matchesCategory &&
      matchesDistance &&
      matchesDay
    );
  });

  renderEvents(filteredEvents);
}

[typeFilter, categoryFilter, distanceFilter, dayFilter].forEach((select) => {
  if (select) {
    select.addEventListener("change", filterEvents);
  }
});

renderEvents(eventsStore);