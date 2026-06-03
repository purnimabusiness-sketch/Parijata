import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  treatment: string;
  rating: number;
}

export function TestimonialCard({ quote, name, treatment, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-[20px] p-8 lg:p-10 shadow-testimonial max-w-[800px] mx-auto">
      <div className="border-l-[3px] border-parijata-gold pl-6 mb-8">
        <p className="text-deep-earth leading-relaxed text-base lg:text-lg">"{quote}"</p>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <p className="text-deep-earth font-medium text-lg">{name}</p>
          <p className="text-sage text-sm italic">{treatment}</p>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < rating ? 'text-parijata-gold fill-parijata-gold' : 'text-mist'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
