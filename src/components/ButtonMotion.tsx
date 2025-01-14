"use client"
import React, { ReactNode } from 'react'
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
}

export default function ButtonMotion({ children }: Props){
  return (
    <motion.div whileTap={{ scale: 0.9 }}>
      {children}
    </motion.div>
  )
}

