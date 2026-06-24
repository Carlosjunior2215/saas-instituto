'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { TESTIMONIALS } from '@/constants';
import { FaStar } from 'react-icons/fa6';

export function TestimonialsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-gradient-to-b from-primary-50 to-white">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Depoimentos</h2>
            <p className="text-xl text-gray-600">
              Ouça o que nossos pacientes dizem sobre a experiência com o Instituto.
            </p>
          </motion.div>

          {/* Swiper Testimonials */}
          <motion.div variants={itemVariants} className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              navigation={true}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              className="swiper-testimonials"
            >
              {TESTIMONIALS.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <motion.div
                    className="bg-white rounded-2xl border border-gray-200 p-8 h-full shadow-sm hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ y: -5 }}
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.2 }}
                          className="text-yellow-400"
                        >
                          <FaStar className="w-5 h-5" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Comment */}
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      "{testimonial.comment}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">Paciente</p>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8"
          >
            {[
              { label: 'Pacientes Satisfeitos', value: '98%' },
              { label: 'Avaliação Média', value: '4.9★' },
              { label: 'Anos de Confiança', value: '15+' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 bg-white rounded-xl border border-gray-200"
              >
                <p className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .swiper-testimonials {
          padding-bottom: 60px !important;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: #0f4c81;
          background: rgba(15, 76, 129, 0.1);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(15, 76, 129, 0.2);
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px;
        }

        .swiper-pagination-bullet {
          background-color: #0f4c81;
          opacity: 0.3;
        }

        .swiper-pagination-bullet-active {
          background-color: #0f4c81;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
