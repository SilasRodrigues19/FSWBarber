import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface BarbershopDetailsPageParams {
  params: {
    id?: string;
  };
}

const BarbershopDetailsPage = async ({
  params,
}: BarbershopDetailsPageParams) => {
  const session = await getServerSession(authOptions);

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
        <ServiceItem
          key={service.id}
          service={service}
          isAuthenticated={!!session?.user}
        />
      ))}
    </div>
  );
};

export default BarbershopDetailsPage;
