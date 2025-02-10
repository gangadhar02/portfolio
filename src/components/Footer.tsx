import { useState, useEffect } from 'react';
import { FiMail, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { SiThreads } from 'react-icons/si';

export default function Footer() {
  const [time, setTime] = useState('');
  const [temp, setTemp] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }));
    };

    const getLocationAndTemp = async () => {
      try {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const { latitude, longitude } = position.coords;
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&timezone=auto`
        );
        const data = await response.json();
        const currentHour = new Date().getHours();
        const currentTemp = Math.round(data.hourly.temperature_2m[currentHour]);
        setTemp(currentTemp.toString());

        const geoResponse = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        );
        const geoData = await geoResponse.json();
        setCity(geoData.city || 'Unknown');
      } catch (error) {
        console.error('Error:', error);
        setTemp('22');
        setCity('Bengaluru');
      }
    };

    updateTime();
    getLocationAndTemp();

    const timeTimer = setInterval(updateTime, 60000);
    const tempTimer = setInterval(getLocationAndTemp, 3600000);

    return () => {
      clearInterval(timeTimer);
      clearInterval(tempTimer);
    };
  }, []);

  return (
    <footer className="fixed bottom-0 left-0 right-0 py-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between px-4 py-2 rounded-2xl bg-white dark:bg-[#111111]/90 border border-gray-200 dark:border-none backdrop-blur-sm shadow-sm">
          <div className="flex items-center space-x-2 text-sm font-mono text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>v2.0</span>
            </div>
            <span className="text-gray-500">|</span>
            <span>{time}</span>
            <span className="text-gray-500">|</span>
            <span>{temp}°C</span>
            <span className="text-gray-500">|</span>
            <span>{city}</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="mailto:gangadhar@growthschool.io" 
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiMail />
            </a>
            <a 
              href="https://github.com/gangadharKorrapati" 
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub />
            </a>
            <a 
              href="https://twitter.com/gangadhartwt" 
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiTwitter />
            </a>
            <a 
              href="https://linkedin.com/in/gangadhark" 
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin />
            </a>
            <a 
              href="https://threads.net/@gangadhargram" 
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiThreads />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}