import React, { useState, useEffect } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { X, Calendar, User, MapPin, Heart, Building2 } from 'lucide-react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    if (isModalOpen) {
      const fp = flatpickr("#dateRange", {
        mode: "range",
        minDate: "today",
        dateFormat: "Y-m-d",
        onChange: (selectedDates) => {
          if (selectedDates.length === 2) {
            setStartDate(selectedDates[0].toISOString().split('T')[0]);
            setEndDate(selectedDates[1].toISOString().split('T')[0]);
          }
        }
      });

      return () => {
        fp.destroy();
      };
    }
  }, [isModalOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Formulaire soumis avec succès !');
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Obtenez votre arrêt maladie en <span className="text-pink-300">quelques minutes</span>
            </h1>
            <p className="text-xl mb-8">Service médical en ligne rapide, sécurisé et reconnu</p>
            <button
              onClick={openModal}
              className="bg-white text-purple-600 hover:bg-purple-100 font-bold py-4 px-8 rounded-full text-lg transition"
            >
              Commander maintenant - 9,99€
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à obtenir votre arrêt maladie ?</h2>
          <p className="text-xl mb-8">Simple, rapide et reconnu par les employeurs</p>
          <button
            onClick={openModal}
            className="bg-purple-600 text-white hover:bg-purple-700 font-bold py-4 px-12 rounded-full text-lg transition"
          >
            Commander maintenant - 9,99€
          </button>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="border-b p-6 flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-800">Demande d'arrêt maladie</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Maladie */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Maladie présumée
                </label>
                <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                  <option value="">Sélectionnez une option</option>
                  <option value="rhume">Rhume / Grippe</option>
                  <option value="gastro">Gastro-entérite</option>
                  <option value="corona">Symptôme Corona</option>
                  <option value="stress">Stress</option>
                  <option value="migraine">Migraine</option>
                  <option value="dos">Mal de dos</option>
                  <option value="menstrues">Douleurs menstruelles</option>
                  <option value="cystite">Cystite</option>
                </select>
              </div>

              {/* Date Range */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Période d'arrêt
                </label>
                <div className="relative">
                  <input
                    id="dateRange"
                    type="text"
                    placeholder="Sélectionnez les dates"
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 pl-10"
                  />
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Nom</label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 pl-10"
                    />
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Prénom</label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 pl-10"
                    />
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Adresse</label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 pl-10"
                  />
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Code postal</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div className="col-span-2 space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Ville</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Social Security & Birth Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Numéro de sécurité sociale
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 pl-10"
                      placeholder="1 85 06 75 115 036 22"
                    />
                    <Heart className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Date de naissance
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Employment Status */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Situation professionnelle
                </label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="employment"
                      value="salarie"
                      className="h-5 w-5 text-indigo-600"
                      defaultChecked
                    />
                    <span className="flex items-center">
                      <Building2 className="w-5 h-5 mr-2 text-gray-400" />
                      Salarié
                    </span>
                  </label>
                  <label className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="employment"
                      value="sans-emploi"
                      className="h-5 w-5 text-indigo-600"
                    />
                    <span className="flex items-center">
                      <User className="w-5 h-5 mr-2 text-gray-400" />
                      Sans emploi
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center space-x-2"
              >
                <span>Valider la commande</span>
                <span className="font-semibold">9,99€</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;