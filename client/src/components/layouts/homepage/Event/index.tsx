import { events } from "../../../data/event";
import { ArrowUpRight,Clock } from "phosphor-react";
import {CalendarDays,MapPin } from "lucide-react"
import { Backgroud } from "../../../../assets/images";
import {Link} from 'react-router-dom'

export default function EventSection() {
  return (
    <section
      className="w-full relative overflow-hidden py-12 px-4"
      style={{ backgroundImage: `url(${Backgroud})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#00420C] mix-blend-multiply opacity-100 pointer-events-none z-0" />
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-green-200 text-sm font-semibold tracking-widest">OUR EVENTS</span>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">Save the Schedule</h2>
        </div>
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {events.slice(0, 2).map(event => (
            <div key={event.id} className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full md:w-72 h-48 md:h-auto object-cover"
              />
              <div className="flex-1 flex flex-col md:flex-row items-center justify-between p-6">
                <div>
                  <div className="flex flex-wrap items-center gap-4 text-[#00420C] text-sm mb-2">
                    <span className="flex items-center gap-1">
                      <span role="img" aria-label="calendar"><CalendarDays size={20} /></span> {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <span role="img" aria-label="location"><MapPin size={20} /></span> {event.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <span role="img" aria-label="clock"><Clock size={20} /></span> {event.time}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#535353] mb-1">{event.title}</h3>
                  <p className="text-gray-600 mb-2">{event.description}</p>
                </div>
                <div className="flex  items-center w-[9rem] gap-2 mt-4">
                  <a
                    href={event.link}
                    className="flex flex-col items-center gap-1 text-green-700 font-semibold "
                  >
                    <ArrowUpRight size={64} className="hidden sm:block md:block " />
                    Book Seat
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            to="/events"
            className="bg-green-400 hover:bg-green-500 text-green-900 font-bold py-3 px-8 rounded-full flex items-center gap-2 transition"
          >
            VISIT EVENTS PAGE <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
