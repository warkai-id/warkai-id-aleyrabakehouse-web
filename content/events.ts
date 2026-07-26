import { EventSchema, type Event } from "@/lib/schemas/event";
import { z } from "zod";

/**
 * Dummy event data — replace with real events before launch.
 * All events use generic names and "Location to be announced" per approved decision.
 */
const eventsData: Event[] = [
  {
    id: "weekend-bake-market",
    name: "Weekend Bake Market",
    location: "Location to be announced",
    date: "Coming soon",
    time: "10.00 – 21.00",
    description:
      "Aleyra hadir di Weekend Bake Market! Datang dan coba langsung burnt cheesecake favorit kami.",
    isDummy: true,
    status: "coming-soon",
  },
  {
    id: "aleyra-popup-weekend",
    name: "Aleyra Pop-Up Weekend",
    location: "Location to be announced",
    date: "Coming soon",
    time: "09.00 – 20.00",
    description:
      "Jangan lewatkan pop-up weekend Aleyra Bakehouse! Menu spesial dan surprise menanti.",
    isDummy: true,
    status: "coming-soon",
  },
  {
    id: "sweet-market-session",
    name: "Sweet Market Session",
    location: "Location to be announced",
    date: "Coming soon",
    time: "10.00 – 22.00",
    description:
      "Bergabung bersama kami di Sweet Market Session untuk pengalaman dessert yang tak terlupakan.",
    isDummy: true,
    status: "coming-soon",
  },
];

// Validate at build time
export const events = z.array(EventSchema).parse(eventsData);
