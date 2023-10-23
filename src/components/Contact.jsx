import { motion } from 'framer-motion';
import React from 'react'
import { useState, useRef } from 'react';
import { styles } from '../style'
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false)
  return (
    <div>Contact</div>
  )
}

export default Contact