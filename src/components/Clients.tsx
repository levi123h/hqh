'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Result {
  label: string;
  value: string;
  trend: 'up' | 'down';
  comparison?: string;
}

interface Client {
  id: string;
  name: string;
  role?: string;
  results: Result[];
  responsibilities?: string[];
  roles?: string[];
  images?: string[];
  thirdRowImages?: string[];
  video?: string;
  splineUrl?: string;
  puzzleImages?: string[];
  tabletImages?: string[];
}

const clients: Client[] = [
  {
    id: 'knitting-for-olive',
    name: 'Knitting For Olive',
    role: '',
    results: [
      { label: 'ROAS', value: '12x', trend: 'up' },
      { label: 'CTR', value: '7%', trend: 'up', comparison: '1.3x compared to similar brands' },
      { label: 'Cart to purchase', value: '6x', trend: 'up' }
    ],
    responsibilities: [
      'Media Plan',
      'CPAS Setup',
      'Team Management',
      'Content Plan & Optimization',
      'Analytics & Reporting'
    ],
    images: [
      '/images/Clients/01. Knitting For Olive/1.jpg',
      '/images/Clients/01. Knitting For Olive/2.jpg',
      '/images/Clients/01. Knitting For Olive/3.jpg',
      '/images/Clients/01. Knitting For Olive/4.jpg',
      '/images/Clients/01. Knitting For Olive/5.jpg',
      '/images/Clients/01. Knitting For Olive/6.png'
    ],
    thirdRowImages: [
      '/images/Clients/01. Knitting For Olive/8.jpg',
      '/images/Clients/01. Knitting For Olive/9.jpg',
      '/images/Clients/01. Knitting For Olive/10.jpg'
    ]
  },
  {
    id: 'kin-hotel',
    name: 'Kin Hotel',
    roles: [
      'Content Strategy & Planning',
      'KOL/KOC Booking Management',
      'OTA Management',
      'Team Management'
    ],
    results: [
      { 
        label: 'Booking', 
        value: '3x', 
        trend: 'up',
        comparison: 'Compared to previous summer'
      },
      { 
        label: 'Organic view', 
        value: '1.2+ Millions', 
        trend: 'up',
        comparison: 'From video campaign'
      },
      { 
        label: 'New followers', 
        value: '5000+', 
        trend: 'up'
      }
    ],
    puzzleImages: [
      '/images/Clients/Kin Hotel/477170125_485673911267525_2379767484197522165_n.jpg',
      '/images/Clients/Kin Hotel/476426698_485673854600864_5148062708292619708_n.jpg',
      '/images/Clients/Kin Hotel/475995843_483680838133499_4448812161941061320_n.jpg',
      '/images/Clients/Kin Hotel/476612026_485652501269666_402182220360096855_n.jpg',
      '/images/Clients/Kin Hotel/476338463_485652671269649_8289664242141991785_n.jpg',
      '/images/Clients/Kin Hotel/476612981_485660897935493_440718789235541456_n.jpg',
      '/images/Clients/Kin Hotel/z6467656743494_632a0b6ba9c63f4007e9359819b26cec.jpg',
      '/images/Clients/Kin Hotel/z6467656754495_e5337e056699dff38ca31c8b8eb7e0ab.jpg',
      '/images/Clients/Kin Hotel/z6467656743848_c1eefbc9db1dea6654d82cad37b65a29.jpg',
      '/images/Clients/Kin Hotel/z6467656748898_6fbddad1da98af5a4741ffed24cbb678.jpg'
    ]
  },
  {
    id: 'euroeyes',
    name: 'EuroEyes',
    role: '',
    results: [
      { label: 'Cost per Lead', value: '300%', trend: 'down', comparison: 'Compared to average benchmark' },
      { label: 'Acquisiton', value: '100', trend: 'up', comparison: 'To Online Eye Treatment Event' },
      { label: 'Organic Traffic Yearly', value: '65,000', trend: 'up', comparison: 'From SEO campaign' }
    ],
    responsibilities: [
      'Media Plan',
      'Team Management',
      'Conversion Rate Optimization',
      'SEO Optimization',
      'Lead Generation'
    ],
    video: '/images/Clients/Euroeyes/Euroeyes - Danmarks førende inden for øjenkirurgi.mp4',
    images: [],
    thirdRowImages: []
  },
  {
    id: 'gopeaks',
    name: 'Gopeaks',
    splineUrl: 'https://my.spline.design/iphone3dspinning-34b076173d56b2d14ff2414fce7c5da0/',
    roles: [
      'Media Plan',
      'Lead Generation',
      'Email Marketing Planning',
      'Conversion Rate Optimization',
      'Content Management',
      'Team Management',
      'Analytics & Reporting'
    ],
    results: [
      {
        value: '5x',
        trend: 'up',
        label: 'Conversion Rate'
      },
      {
        value: '19%',
        trend: 'up',
        label: 'Acquisition Generated from Qualified Lead'
      },
      {
        value: '1200+',
        trend: 'up',
        label: 'Lead generated'
      }
    ]
  },
  {
    id: 'mai-phu-hung',
    name: 'Mai Phú Hưng',
    roles: [
      'Media Plan',
      'Lead Generation',
      'SEO Strategy',
      'Content Creation',
      'Event Organizer',
      'Team Management',
      'Analytics & Reporting'
    ],
    results: [
      { 
        label: 'Lead generated', 
        value: '2700+', 
        trend: 'up',
        comparison: 'in 2024'
      },
      { 
        label: 'Contract with Dealers', 
        value: '500+', 
        trend: 'up'
      },
      { 
        label: 'Organic traffic', 
        value: '45,000', 
        trend: 'up',
        comparison: 'from B2B SEO content'
      }
    ],
    tabletImages: [
      '/images/Clients/Mai Phú Hưng/488036913_1438395084244423_7025148033873664745_n.jpg',
      '/images/Clients/Mai Phú Hưng/473049767_1372771454140120_8651997927050294366_n (1).jpg',
      '/images/Clients/Mai Phú Hưng/473066361_1372771177473481_6814182733254888022_n.jpg',
      '/images/Clients/Mai Phú Hưng/459923988_1283064129777520_6478028712511725283_n.jpg',
      '/images/Clients/Mai Phú Hưng/1.png',
      '/images/Clients/Mai Phú Hưng/2.png'
    ]
  }
];

const PuzzleAnimation = ({ images }: { images: string[] }) => {
  return (
    <div className="relative h-[600px] overflow-hidden rounded-2xl shadow-2xl bg-gray-100">
      <div className="grid grid-cols-3 gap-2 h-full">
        {images.slice(0, 9).map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden"
            initial={{ 
              x: (index % 3 - 1) * 200,
              y: (Math.floor(index / 3) - 1) * 200,
              opacity: 0,
              scale: 0.5,
              rotate: (index % 3 - 1) * 45
            }}
            animate={{ 
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              rotate: 0
            }}
            transition={{
              duration: 1.5,
              delay: index * 0.3,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
          >
            <Image
              src={image}
              alt={`Puzzle piece ${index + 1}`}
              fill
              className="object-cover"
              unoptimized
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const MaiPhuHungGallery = ({ images }: { images: string[] }) => {
  return (
    <div className="relative w-full max-w-[800px] mx-auto space-y-8">
      {/* First Gallery - 4 Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.slice(0, 4).map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group overflow-hidden rounded-xl shadow-lg"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={image}
                alt={`Mai Phú Hưng - Image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                unoptimized
              />
            </div>
            
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="text-white text-center p-4"
              >
                <p className="text-sm font-medium">View Project</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Second Gallery - 2 Images Stacked */}
      <div className="flex flex-col gap-1">
        {images.slice(4).map((image, index) => (
          <motion.div
            key={index + 4}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
            className="relative w-full h-[80px]"
          >
            <Image
              src={image}
              alt={`Mai Phú Hưng - Image ${index + 5}`}
              fill
              className="object-contain"
              unoptimized
            />
          </motion.div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-20 -z-10"></div>
      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-200 rounded-full opacity-20 -z-10"></div>
    </div>
  );
};

const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
        >
          Clients & Projects
        </motion.h2>

        <div className="space-y-32">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              {/* Images/Video/3D/Puzzle/Gallery Section */}
              <div className="w-full lg:w-1/2">
                {client.video ? (
                  <div className="relative">
                    {/* iMac Frame */}
                    <div className="relative mx-auto w-full max-w-[90%] md:max-w-[800px]">
                      {/* iMac Screen */}
                      <div className="bg-white rounded-2xl p-2 border-4 border-gray-200">
                        <div className="relative aspect-[16/9] md:aspect-[16/9] rounded-lg overflow-hidden">
                          <video
                            src={client.video}
                            className="w-full h-full object-cover pointer-events-none"
                            autoPlay
                            loop
                            muted
                            playsInline
                            disablePictureInPicture
                            disableRemotePlayback
                            onError={(e) => {
                              console.error("Video playback error:", e);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : client.images && client.images.length > 0 ? (
                  <div className="relative h-[600px] overflow-hidden rounded-2xl shadow-2xl">
                    {/* First Row - Moving Left */}
                    <div className="absolute top-0 left-0 w-full animate-scroll-left">
                      <div className="flex gap-4">
                        {[...client.images, ...client.images].map((image, i) => (
                          <div key={i} className="flex-shrink-0 w-[300px]">
                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                              <Image
                                src={image}
                                alt={`${client.name} - Image ${i + 1}`}
                                fill
                                className="object-cover"
                                unoptimized
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Second Row - Moving Right */}
                    <div className="absolute top-[200px] left-0 w-full animate-scroll-right">
                      <div className="flex gap-4">
                        {[...client.images, ...client.images].reverse().map((image, i) => (
                          <div key={i} className="flex-shrink-0 w-[300px]">
                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                              <Image
                                src={image}
                                alt={`${client.name} - Image ${i + 1}`}
                                fill
                                className="object-cover"
                                unoptimized
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Third Row - Moving Left */}
                    {client.thirdRowImages && client.thirdRowImages.length > 0 && (
                      <div className="absolute bottom-0 left-0 w-full animate-scroll-left">
                        <div className="flex gap-4">
                          {[...client.thirdRowImages, ...client.thirdRowImages].map((image, i) => (
                            <div key={i} className="flex-shrink-0 w-[300px]">
                              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                                <Image
                                  src={image}
                                  alt={`${client.name} - Image ${i + 1}`}
                                  fill
                                  className="object-cover"
                                  unoptimized
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : client.puzzleImages ? (
                  <PuzzleAnimation images={client.puzzleImages} />
                ) : client.tabletImages ? (
                  <MaiPhuHungGallery images={client.tabletImages} />
                ) : client.splineUrl ? (
                  <div className="w-full h-[600px] relative rounded-2xl overflow-hidden bg-gray-50">
                    <iframe
                      src={client.splineUrl}
                      frameBorder="0"
                      width="100%"
                      height="100%"
                      className="absolute inset-0"
                      title={`${client.name} 3D View`}
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/3] rounded-2xl bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300">
                    <span className="text-gray-400 text-xl">Coming Soon</span>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 space-y-8 relative">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white rounded-2xl -z-10"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full opacity-20 -z-10"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-200 rounded-full opacity-20 -z-10"></div>

                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{client.name}</h3>
                </div>

                {((client.responsibilities && client.responsibilities.length > 0) || 
                  (client.roles && client.roles.length > 0)) && (
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">My Role:</h4>
                    <ul className="space-y-2">
                      {(client.responsibilities || client.roles || []).map((item, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {client.results && client.results.length > 0 && (
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Results:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {client.results.map((result, i) => (
                        <div key={i} className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-lg border border-blue-100 shadow-sm">
                          <div className="flex items-center gap-2">
                            <span className="text-3xl font-bold text-blue-600">{result.value}</span>
                            <span className="text-xl text-green-500">
                              {result.trend === 'up' ? '↑' : '↓'}
                            </span>
                          </div>
                          <p className="text-gray-700 mt-1">{result.label}</p>
                          {result.comparison && (
                            <p className="text-sm text-gray-500 mt-1">{result.comparison}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Kin Hotel Grid */}
                {client.images && client.images.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-[250px] md:max-h-none overflow-hidden mt-8">
                    {client.images.map((image, index) => (
                      <motion.div
                        key={index}
                        className="relative aspect-square rounded-lg overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Image
                          src={image}
                          alt={`${client.name} Project Image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Mai Phu Hung Grid */}
                {client.thirdRowImages && client.thirdRowImages.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-4 md:mt-8">
                    {client.thirdRowImages.map((image, index) => (
                      <motion.div
                        key={index}
                        className="relative aspect-square rounded-lg overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Image
                          src={image}
                          alt={`Project Image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients; 