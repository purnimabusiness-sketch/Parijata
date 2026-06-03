import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      className="group bg-white rounded-2xl p-8 lg:p-10 border border-mist transition-all duration-400 hover:border-mist-dark hover:-translate-y-1 hover:shadow-card-hover"
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" as const } },
      }}
    >
      <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center mb-5">
        <Icon className="w-5 h-5 text-sage" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-medium text-deep-earth mb-3">{title}</h3>
      <p className="text-sm text-sage leading-relaxed">{description}</p>
    </motion.div>
  );
}
