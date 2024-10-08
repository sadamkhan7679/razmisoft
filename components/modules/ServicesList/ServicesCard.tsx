"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { cn } from "@/utils/root";
import { ServiceItem } from "@/types/services";
import Image from "next/image";
import { SERVICES_ICONS } from "@/data/services";
// import { CardContent } from "@/components/ui/card";

type ServiceCardProps = {
  service: ServiceItem;
  className?: string;
};

export const ServiceCard = ({ service, className }: ServiceCardProps) => {
  let [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  const ServiceIcon =
    SERVICES_ICONS[service.key as keyof typeof SERVICES_ICONS];

  return (
    <div
      className={cn(
        // "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className,
      )}
    >
      <Link
        href={`services/${service?.slug}`}
        className="relative group  block p-2 h-full w-full"
        onMouseEnter={() => setHoveredIndex(service.key)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <AnimatePresence>
          {hoveredIndex === service.id && (
            <motion.span
              className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
              layoutId="hoverBackground"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.15 },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15, delay: 0.2 },
              }}
            />
          )}
        </AnimatePresence>
        <Card className="bg-transparent">
          <CardTitle>
            <div className="flex items-center service-card-icon text-white">
              {/*{service.Icon && (*/}
              {/*  <Image*/}
              {/*    src={service.Icon}*/}
              {/*    alt={service.title}*/}
              {/*    width={48}*/}
              {/*    height={48}*/}
              {/*    className="mr-3"*/}
              {/*  />*/}
              {/*  // <service.Icon />*/}
              {/*)}*/}
              {ServiceIcon && <ServiceIcon width={48} height={48} />}
              {service.title}
            </div>
          </CardTitle>
          <div>
            {/*<div className="relative h-60 w-full mt-3 my-5">*/}
            {/*  {serviceMeta?.image && (*/}
            {/*    <Image*/}
            {/*      src={serviceMeta?.image}*/}
            {/*      alt={service.title}*/}
            {/*      layout="fill"*/}
            {/*      fill={true}*/}
            {/*      className="rounded-2xl"*/}
            {/*    />*/}
            {/*  )}*/}
            {/*</div>*/}
            <p
              className={cn(
                "mt-8 text-zinc-400 tracking-wide leading-relaxed text-caption",
                className,
              )}
            >
              {service.summary}
            </p>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className,
      )}
    >
      {children}
    </p>
  );
};
