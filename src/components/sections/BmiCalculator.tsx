import React, { useState, useEffect } from 'react';

interface BmiCategory {
  range: string;
  risk: string;
  color: string;
}

const BmiCalculator = () => {
  const [height, setHeight] = useState<number>(170);
  const [weight, setWeight] = useState<number>(70);
  const [bmi, setBmi] = useState<number>(0);

  const categories: BmiCategory[] = [
    { range: 'Bajo peso', risk: 'Riesgo leve', color: 'bg-blue-400' },
    { range: 'Normal', risk: 'Riesgo bajo', color: 'bg-green-400' },
    { range: 'Sobrepeso', risk: 'Riesgo moderado', color: 'bg-yellow-400' },
    { range: 'Obesidad I', risk: 'Riesgo alto', color: 'bg-orange-400' },
    { range: 'Obesidad II', risk: 'Riesgo muy alto', color: 'bg-red-400' },
    { range: 'Obesidad III', risk: 'Riesgo extremo', color: 'bg-red-600' }
  ];

  const getBmiCategory = (bmi: number): BmiCategory => {
    if (bmi < 18.5) return categories[0];
    if (bmi < 25) return categories[1];
    if (bmi < 30) return categories[2];
    if (bmi < 35) return categories[3];
    if (bmi < 40) return categories[4];
    return categories[5];
  };

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue);
  };

  useEffect(() => {
    calculateBMI();
  }, [height, weight]);

  const getIndicatorPosition = (bmi: number): string => {
    const position = Math.min(Math.max((bmi - 15) * (100 / 30), 0), 100);
    return `${position}%`;
  };

  const currentCategory = getBmiCategory(bmi);

  return (
    <section className="section bg-primary-950">
      <div className="container-custom max-w-4xl">
        <h2 className="section-title">Calcula tu Índice de Masa Corporal (IMC)</h2>
        <p className="text-center text-gray-300 mb-8">
          Ingresa tus datos para saber si puedes calificar para una cirugía.
        </p>

        <div className="bg-primary-900 rounded-2xl p-8 shadow-xl">
          <div className="mb-12 text-center">
            <div className="text-5xl font-bold mb-4">{bmi.toFixed(1)}</div>
            <div className="text-xl text-gray-300">
              {currentCategory.range} - {currentCategory.risk}
            </div>
          </div>

          <div className="mb-12">
            <div className="flex mb-2">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={`h-3 flex-1 ${category.color}`}
                  title={`${category.range} - ${category.risk}`}
                />
              ))}
            </div>
            <div className="relative h-0">
              <div
                className="absolute w-0 h-0 -mt-4"
                style={{ left: getIndicatorPosition(bmi) }}
              >
                <div className="w-4 h-4 -ml-2 bg-white rounded-full shadow-lg" />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <label className="font-medium">Altura: {height} cm</label>
                <span className="text-gray-300">{height} cm</span>
              </div>
              <input
                type="range"
                min="130"
                max="210"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full h-2 bg-primary-800 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="font-medium">Peso: {weight} kg</label>
                <span className="text-gray-300">{weight} kg</span>
              </div>
              <input
                type="range"
                min="30"
                max="200"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full h-2 bg-primary-800 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BmiCalculator;