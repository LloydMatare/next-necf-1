// _components/ServiceList.tsx
import { connectToDB } from '@/lib/connectToDB';
import Service from '@/models/(home)/service';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ArrowUpRight, Package } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  title2: string;
  description2: string;
  title3: string;
  description3: string;
  image: string;
}

export async function loadSection(): Promise<Service[]> {
  await connectToDB();
  const services = await Service.find().lean();
  return services.map(service => ({
    ...service,
    id: service._id.toString()
  }));
}

async function ServiceList() {
  const services = await loadSection();

  if (!services || services.length === 0) {
    return (
      <div className="text-center py-16 bg-gray-50 rounded-2xl">
        <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-500">No services added yet</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      {services.map((service) => (
        <Link
          key={service.id}
          href={`/dashboard/home/service/${service.id}`}
          className="group block"
        >
          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col md:flex-row gap-6 p-6">
              <div className="relative w-full md:w-48 h-48 flex-shrink-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 192px"
                />
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{service.title2}</h4>
                    <p className="text-sm text-gray-600">{service.description2}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{service.title3}</h4>
                    <p className="text-sm text-gray-600">{service.description3}</p>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <span className="inline-flex items-center gap-1 text-sm text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    Edit service
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ServiceList;