// components/About.tsx
import React from 'react';
import { Target, Building2, Users, Lightbulb, Briefcase, Calendar } from 'lucide-react';
import { 
  missionData, 
  visionData, 
  servicesData, 
  testimonialsData,
  aboutContent,
  type MissionItem,
  type VisionItem,
  type ServiceItem,
  type Testimonial
} from '../../data/about';
import { Background1 } from '../../../assets/images';

const iconMap = {
  target: Target,
  building: Building2,
  users: Users,
  lightbulb: Lightbulb,
  briefcase: Briefcase,
  calendar: Calendar
};

const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap] || Target;
    return <IconComponent className="w-8 h-8 text-green-600" />;
  };

  return (
    <div className="bg-white">
      {/* Mission Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 py-16 lg:py-24 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
         style={{ backgroundImage: `url(${Background1})`, backgroundSize: "cover", backgroundPosition: "top" }}></div>
         <div className="absolute inset-0 bg-[#065a15] mix-blend-multiply opacity-100 pointer-events-none z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
              <span className="text-green-200 text-sm font-medium tracking-wider uppercase">ABOUT</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8">
              Inside Our Mission
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {missionData.map((item: MissionItem, index: number) => (
              <div key={item.id} className="relative">
                {/* Connection Lines */}
                {index < missionData.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-white/30 z-10"></div>
                )}
                
                {/* Number */}
                <div className="text-center mb-6">
                  <span className="text-white/60 text-sm font-medium">{item.number}</span>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl p-8 text-center h-full shadow-xl">
                  <div className="flex justify-center mb-6">
                    {getIcon(item.icon)}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 py-16 lg:py-24 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{ backgroundImage: `url(${Background1})`, backgroundSize: "cover", backgroundPosition: "top" }}>
         </div>
         <div className="absolute inset-0 bg-[#065a15] mix-blend-multiply opacity-100 pointer-events-none z-0" />
        
        {/* Background Earth Effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-96 h-96 bg-green-400 rounded-full blur-3xl absolute -left-48 top-1/2 transform -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              From Vision To Action
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {visionData.map((item: VisionItem, index: number) => (
              <div key={item.id} className={`${index === 1 ? 'lg:col-span-1 lg:row-span-2' : ''}`}>
                {item.image ? (
                  <div className="bg-white rounded-2xl overflow-hidden shadow-xl h-full">
                    {index === 1 && (
                      <div className="h-48 lg:h-64">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6 lg:p-8">
                      <div className="flex justify-center mb-4">
                        {getIcon(item.icon)}
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 text-center">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-center">
                        {item.description}
                      </p>
                    </div>
                    {index === 2 && (
                      <div className="h-48">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl p-6 lg:p-8 text-center shadow-xl h-full">
                    <div className="flex justify-center mb-4">
                      {getIcon(item.icon)}
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Story */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-green-800 mb-8 leading-tight">
                From the Classroom, Our Story Grows
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                {aboutContent.storyText}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center justify-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  Join Our Team
                </button>
                <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-xl font-semibold hover:bg-green-50 transition-colors flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Our Events
                </button>
              </div>
            </div>

            {/* Right Column - Services */}
            <div className="space-y-6">
              {servicesData.map((service: ServiceItem) => (
                <div key={service.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-start">
                    <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                      {service.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-800 mb-8">
              Voices that Drive Change
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial: Testimonial, index: number) => (
              <div key={testimonial.id} className={`${index === 1 ? 'lg:col-span-2 xl:col-span-1' : ''}`}>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full border border-gray-100">
                  <div className="flex flex-col lg:flex-row h-full">
                    <div className="w-full lg:w-1/2 h-64 lg:h-auto">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-full lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center bg-gradient-to-br from-green-50 to-white">
                      <div className="mb-4">
                        <svg className="w-8 h-8 text-green-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                        </svg>
                      </div>
                      <blockquote className="text-gray-600 leading-relaxed mb-6 italic">
                        {testimonial.quote}
                      </blockquote>
                      <cite className="text-green-700 font-semibold not-italic">
                        {testimonial.author}
                      </cite>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;