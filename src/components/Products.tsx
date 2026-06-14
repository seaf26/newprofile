"use client";
import React from "react";
import { Heading } from "./Heading";
import { Product } from "@/types/products";
import { products } from "@/constants/products";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";
import { StackBadges } from "./StackBadges";

const featuredMobileSlugs = [
  "taggz-ai-event-photography-platform",
  "jawad-horse-riding-booking-platform",
];

const isPortraitThumbnail = (thumbnail: Product["thumbnail"]) =>
  typeof thumbnail === "object" &&
  "height" in thumbnail &&
  "width" in thumbnail &&
  thumbnail.height > thumbnail.width;

export const Products = () => {
  const sortedProducts = [...products].sort((a, b) => {
    const aIndex = featuredMobileSlugs.indexOf(a.slug ?? "");
    const bIndex = featuredMobileSlugs.indexOf(b.slug ?? "");

    if (aIndex === -1 && bIndex === -1) return 0;
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;

    return aIndex - bIndex;
  });

  const content = (
    <div>
      <div className="grid grid-cols-1  gap-10">
        {sortedProducts.map((product: Product, idx: number) => {
          const portraitThumbnail = isPortraitThumbnail(product.thumbnail);

          return (
            <motion.div
              key={product.href}
              initial={{
                opacity: 0,
                x: -50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 0.2, delay: idx * 0.1 }}
            >
              <Link
                href={product.slug ? `/projects/${product.slug}` : product.href}
                key={product.href}
                className="group grid gap-5 rounded-2xl p-3 transition duration-200 hover:bg-gray-50 md:grid-cols-[18rem_minmax(0,1fr)] md:gap-6"
              >
                <div className="flex h-64 w-full items-center justify-center overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50 p-2 md:h-56 md:w-72">
                  <div
                    className={
                      portraitThumbnail
                        ? "relative h-full w-[7.4rem] overflow-hidden rounded-[1.35rem] bg-white shadow-sm ring-1 ring-black/10 md:w-[7.5rem]"
                        : "relative h-full w-full overflow-hidden rounded-lg bg-white"
                    }
                  >
                    <Image
                      src={product.thumbnail}
                      alt={`${product.title} thumbnail`}
                      fill
                      sizes={
                        portraitThumbnail
                          ? "(min-width: 768px) 120px, 120px"
                          : "(min-width: 768px) 240px, 100vw"
                      }
                      className={
                        portraitThumbnail
                          ? "object-contain object-center transition duration-200 ease-out group-hover:scale-[1.02]"
                          : "object-contain object-center transition duration-200 ease-out group-hover:scale-[1.02]"
                      }
                    />
                  </div>
                </div>
                <div className="flex min-w-0 flex-col justify-center">
                  <div>
                    <Heading
                      as="h4"
                      className="font-black text-lg md:text-lg lg:text-lg "
                    >
                      {product.title}
                    </Heading>
                    <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                      {product.description}
                    </Paragraph>
                  </div>
                  <StackBadges
                    stack={product.stack}
                    compact
                    className="mt-4"
                  />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
  return <>{content}</>;
};
