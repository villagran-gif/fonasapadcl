import React from 'react';
import { Check, Scissors, GitBranch } from 'lucide-react';

interface SurgeryCardProps {
  title: string;
  description: string;
  benefits: string[];
  iconType: 'manga' | 'bypass';
}

const SurgeryCard: React.FC<SurgeryCardProps> = ({ 
  title, 
  description, 
  benefits,
  iconType
}) => {
  return (
    <div className="card hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="flex justify-center mb-6">
        {iconType === 'manga' ? (
          <div className="bg-secondary-600/20 p-4 rounded-full">
            <Scissors size={50} className="text-accent" />
          </div>
        ) : (
          <div className="bg-secondary-600/20 p-4 rounded-full">
            <GitBranch size={50} className="text-accent" />
          </div>
        )}
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 text-center">
        {title}
      </h3>
      
      <p className="text-gray-300 mb-6 text-center">
        {description}
      </p>
      
      <div className="bg-primary-800/50 p-6 rounded-lg">
        <h4 className="font-semibold mb-4">Beneficios:</h4>
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <Check size={20} className="text-accent mr-2 mt-1 flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SurgeryCard;