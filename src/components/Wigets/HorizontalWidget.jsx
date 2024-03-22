import React, { useEffect } from 'react';

const HorizontalWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.text = `
      {
        "symbols": [
          {
            "proName": "FOREXCOM:SPXUSD",
            "title": "S&P 500"
          },
          {
            "proName": "FOREXCOM:NSXUSD",
            "title": "US 100"
          },
          {
            "proName": "FX_IDC:EURUSD",
            "title": "EUR to USD"
          },
          {
            "description": "US 500",
            "proName": "CAPITALCOM:US500"
          },
          {
            "description": "S&P Bank",
            "proName": "BSE:BANK"
          },
          {
            "description": "Bitcoin",
            "proName": "CRYPTO:BTCUSD"
          }
        ],
        "showSymbolLogo": true,
        "isTransparent": false,
        "largeChartUrl": "http:///",
        "displayMode": "adaptive",
        "colorTheme": "dark",
        "locale": "in"
      }
    `;
    document.getElementById('tradingview-widget-script').appendChild(script);

    return () => {
      // Cleanup script when the component unmounts
      document.getElementById('tradingview-widget-script').removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview-widget-script" className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://in.tradingview.com/">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default HorizontalWidget;
