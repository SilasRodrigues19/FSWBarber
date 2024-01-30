import { Header } from "../_components/header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Search } from "./_components/search";
import { BookingItem } from "../_components/booking-item";

export default function Home() {
  const dayOfWeek = format(new Date(), "EEEE', ' dd 'de' MMMM", {
    locale: ptBR,
  });

  const capitalizedDayOfWeek =
    dayOfWeek.charAt(0).toLocaleUpperCase() + dayOfWeek.slice(1);

  const month = format(new Date(), "MMMM", {
    locale: ptBR,
  });

  const capitalizedMonth = month.charAt(0).toLocaleUpperCase() + month.slice(1);

  const formattedDate = capitalizedDayOfWeek.replace(month, capitalizedMonth);

  return (
    <div>
      <Header />

      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Silas!</h2>
        <p className="text-sm">{formattedDate}</p>
      </div>

      <div className="px-5 mt-6">
        <Search />
      </div>

      <div className="px-5 mt-6">
        <h2 className="text-xs uppercase text-gray-400 font-bold mb-3">
          Agendamentos
        </h2>
        <BookingItem />
      </div>
    </div>
  );
}
