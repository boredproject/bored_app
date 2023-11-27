'use client'

import React from 'react'
import SelectionPage from './selection page/SelectionPage'
import { motion } from 'framer-motion'

const OptionPage = () => {
  return (
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
      >
            <SelectionPage />
      </motion.div>
  )
}

export default OptionPage