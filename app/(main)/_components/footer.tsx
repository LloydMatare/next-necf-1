"use client";
import Image from "next/image";
import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";

function Footer() {
  return (
    <footer className="mt-20 border-t border-border/60 bg-emerald-950 text-white">
      <div className="w-full px-4 py-12 md:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <Image
                src="/necf_new.png"
                width={120}
                height={120}
                alt="NECF"
                className="h-16 w-16 rounded-2xl object-contain ring-1 ring-white/10"
              />
              <div>
                <p className="text-xs font-semibold tracking-widest text-white/70">
                  NECF
                </p>
                <p className="mt-1 font-[var(--font-display)] text-2xl leading-tight">
                  Together we make Zimbabwe Great
                </p>
              </div>
            </div>

            <p className="text-sm text-white/75">
              A platform for dialogue, consensus, and practical pathways for national
              progress.
            </p>

            <div className="flex items-center gap-3">
              <Link
                className="inline-flex size-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10"
                href={"https://www.facebook.com/necfpage"}
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook className="text-xl text-white/90" />
              </Link>
              <Link
                href={"https://x.com/FofficialNec"}
                target="_blank"
                className="inline-flex size-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10"
                aria-label="X"
              >
                <BsTwitterX className="text-lg text-white/90" />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/necf-national-economic-consultative-forum"}
                target="_blank"
                className="inline-flex size-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl text-white/90" />
              </Link>
            </div>
          </div>

          <div className="space-y-4 text-sm">
            <p className="text-xs font-semibold tracking-widest text-white/70">
              QUICK LINKS
            </p>
            <div className="grid gap-2">
              <Link href={"/"} className="text-white/80 hover:text-white">
                Home
              </Link>
              <Link
                href={
                  "https://zim.gov.zw/index.php/en/my-government/government-ministries/opc"
                }
                target="_blank"
                className="text-white/80 hover:text-white"
              >
                Office of the President and Cabinet
              </Link>
              <Link
                href={"https://veritaszim.net/node/684"}
                target="_blank"
                className="text-white/80 hover:text-white"
              >
                Ministry of Finance, Economic Development and Investment Promotion
              </Link>
              <Link
                href={"https://mic.gov.zw/"}
                target="_blank"
                className="text-white/80 hover:text-white"
              >
                Ministry of Industry and Commerce
              </Link>
              <Link
                href={"https://rbz.co.zw/"}
                target="_blank"
                className="text-white/80 hover:text-white"
              >
                Reserve Bank of Zimbabwe
              </Link>
              <Link
                href={"https://czi.co.zw/"}
                target="_blank"
                className="text-white/80 hover:text-white"
              >
                Confederation of Zimbabwe Industries
              </Link>
              <Link
                href={"https://tradezimbabwe.com/"}
                target="_blank"
                className="text-white/80 hover:text-white"
              >
                Zim Trade
              </Link>
              <Link
                href={"https://zncc.co.zw/"}
                target="_blank"
                className="text-white/80 hover:text-white"
              >
                Zimbabwe National Chamber of Commerce
              </Link>
              <Link
                href={"https://nangozim.org/"}
                target="_blank"
                className="text-white/80 hover:text-white"
              >
                National Association of NGOs (NANGO)
              </Link>
              <Link href={"/contact"} className="text-white/80 hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-4 text-sm">
            <p className="text-xs font-semibold tracking-widest text-white/70">
              CONTACT
            </p>
            <div className="space-y-2 text-white/80">
              <p>34 Elizabeth Windsor Road, Marlborough</p>
              <p>Tel: +263 8612 701 094</p>
              <p>info@necf.org.zw</p>
              <p>www.necf.org.zw</p>
            </div>
            <div className="pt-2">
              <Link href={"https://www.herald.co.zw/"} target="_blank">
                <div className="inline-flex items-center gap-3 rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 hover:bg-white/10">
                  <Image
                    src={"/logo.webp"}
                    alt="The Herald"
                    width={90}
                    height={40}
                    className="h-8 w-auto object-contain"
                  />
                  <span className="text-xs text-white/70">Media partner</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-emerald-950">
        <div className="flex w-full flex-wrap items-center justify-between gap-3 px-4 py-4 text-xs text-white/70 md:px-8 lg:px-12">
          <p>
            © 2025 NECF. Built by{" "}
            <Link href={"http://compulink.co.zw/"} target="_blank" className="text-white/80 hover:text-white">
              Compulink
            </Link>
            .
          </p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
