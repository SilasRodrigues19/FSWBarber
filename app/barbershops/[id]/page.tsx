import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";

interface BarbershopDetailsPageParams {
  params: {
    id?: string;
  };
}

const BarbershopDetailsPage = async ({
  params,
}: BarbershopDetailsPageParams) => {
  if (!params.id) return null;

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  });

  if (!barbershop) {
    // TODO: redirect to home page
    return null;
  }

  return (
    <div className="flex flex-col px-5 gap-4 py-6">
      <BarbershopInfo barbershop={barbershop} />

      {barbershop.services.map((service) => (
        <ServiceItem key={service.id} service={service} />
      ))}
    </div>
  );
};

export default BarbershopDetailsPage;
