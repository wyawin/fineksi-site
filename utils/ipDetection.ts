export interface CountryInfo {
    country: string;
    countryCode: string;
  }
  
  export async function detectCountryFromIP(): Promise<CountryInfo> {
    // Check if running on localhost and return Indonesia as default
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname.startsWith('192.168.') || hostname.startsWith('10.') || hostname.startsWith('172.')) {
        return {
          country: 'Indonesia',
          countryCode: 'ID'
        };
      }
    }

    try {
      // Try multiple IP geolocation services for reliability
      const services = [
        'https://ipinfo.io/json',
        'https://ipapi.co/json/',
        'https://ip-api.com/json/',
      ];
  
      for (const service of services) {
        try {
          const response = await fetch(service, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
            },
          });
  
          if (response.ok) {
            const data = await response.json();
            
            // Handle different API response formats
            let countryCode = '';
            let country = '';
  
            if (service.includes('ipapi.co')) {
              countryCode = data.country_code || data.country || '';
              country = data.country_name || data.country || '';
            } else if (service.includes('ip-api.com')) {
              countryCode = data.countryCode || '';
              country = data.country || '';
            } else if (service.includes('ipinfo.io')) {
              countryCode = data.country || '';
              country = data.country || '';
            }
  
            if (countryCode) {
              return {
                country: country || countryCode,
                countryCode: countryCode.toUpperCase()
              };
            }
          }
        } catch (serviceError) {
          console.warn(`IP detection service ${service} failed:`, serviceError);
          continue;
        }
      }
  
      // Fallback: return default (non-Indonesia)
      return {
        country: 'Unknown',
        countryCode: 'SG' // Default to Singapore entity
      };
    } catch (error) {
      console.error('IP country detection failed:', error);
      // Fallback to Singapore entity
      return {
        country: 'Unknown',
        countryCode: 'SG'
      };
    }
  }
  
  export function isIndonesia(countryCode: string): boolean {
    return countryCode.toUpperCase() === 'ID';
  }