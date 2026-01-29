"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <footer className="bg-black text-white py-10 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 bg-linear-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* BIG BRAND */}
        <motion.h1
          initial={{ backgroundPosition: "0% 50%" }}
          animate={{ backgroundPosition: "100% 50%" }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="text-6xl md:text-8xl font-extrabold text-center
           bg-linear-to-r from-gray-300 via-gray-100 to-gray-400
            bg-size-[200%_200%] bg-clip-text text-transparent"
        >
          Propsoch
        </motion.h1>

        <p className="text-center text-gray-400 mt-6 max-w-2xl mx-auto">
          Propsoch is the most advanced real estate research platform for
          homebuyers in India
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6">
          <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition" />
          <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition" />
          <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition" />
          <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition" />
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-12 mt-10 text-sm">

          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <p className="text-gray-400">Thinkr Proptech Private Limited</p>
            <p className="text-gray-500 mt-2">
              RERA: PRM/KA/RERA/1251/446/AG/220927/003103
            </p>
            <p className="text-gray-500">GSTIN - 12314ASDAD213</p>
            <p className="text-gray-500">CIN - 21312215151661</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Top Developers</h4>
            {[
              "Prestige Developers",
              "Godrej Properties",
              "Brigade Developers",
              "Sobha Developers",
              "Assetz Developers",
            ].map((d) => (
              <p key={d} className="text-gray-400">{d}</p>
            ))}
          </div>

          <div>
            <h4 className="font-semibold mb-3">Top Areas</h4>
            {[
              "Whitefield",
              "Sarjapur Road",
              "Bellandur",
              "Yelahanka",
              "HSR Layout",
            ].map((a) => (
              <p key={a} className="text-gray-400">{a}</p>
            ))}
          </div>

          <div>
            <h4 className="font-semibold mb-3">Top Filters</h4>
            {[
              "Luxury Homes",
              "Properties < 3Cr",
              "Properties < 2Cr",
              "Ready To Move In",
              "Townships",
            ].map((f) => (
              <p key={f} className="text-gray-400">{f}</p>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
          <div className="flex justify-center gap-6 mb-2">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms & Conditions
            </span>
          </div>
          © Copyright Thinkr Proptech Pvt. Ltd. 2026
        </div>
      </div>
    </footer>
  );
}
