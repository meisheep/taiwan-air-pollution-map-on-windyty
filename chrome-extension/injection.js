// L is leaflet.js
// W is main module of Windyty
{
  console.log('JS Injected');

  const script = document.createElement('script');
  script.textContent = `
    {
      const createIndexIcon = function(idx) {
        const markerColor = function(idx) {
          let color = '#9CFF9C';
          if (idx > 70) {
            color = '#CE30FF';
          } else if (idx > 64) {
            color = '#990000';
          } else if (idx > 58) {
            color = '#FF0000';
          } else if (idx > 53) {
            color = '#FF6464';
          } else if (idx > 47) {
            color = '#FF9A00';
          } else if (idx > 41) {
            color = '#FFCF00';
          } else if (idx > 35) {
            color = '#FFFF00';
          } else if (idx > 23) {
            color = '#31CF00'
          } else if (idx > 11) {
            color = '#31FF00'
          }

          return color;
        };

        const idxNum = parseInt(idx);
        return L.divIcon({
          html: \`
            <div style="
                text-align: center;
                font-weight: bold;
                line-height: 2em;
                font-size: 1.5em;
                width: 2em;
                height: 2em;
                border-radius: 50%;
                background-color: \${markerColor(idxNum)};
                opacity: .75;
              ">
              \${idxNum}
            </div>
          \`
        });
      };
      const AIRBOX_DATA = ${JSON.stringify(AIRBOX_DATA)};
      AIRBOX_DATA.feeds.forEach((item) => {
        const { device, timestamp, s_d0: dirt, s_t0: temp, s_h0: humi, gps_lat: lat, gps_lon: lon } = item;
        L.marker(new L.LatLng(lat, lon), {
            icon: createIndexIcon(dirt)
          })
          .addTo(W.maps)
          .bindPopup('test');
      });

      const titleDiv = document.createElement('div');

      titleDiv.innerHTML = \`
        <div style="
            position: absolute;
            left: 32px;
            bottom: 120px;
            font-size: 48px;
            text-align: center;
            padding-left: 1em;
            padding-right: 1em;
            background-color: rgba(0, 0, 0, .75);
            box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
            color: white;
            line-height: 72px;
          ">
          空污污流流
        </div>
      \`;
      document.body.appendChild(titleDiv);
    }
  `;
  document.body.appendChild(script);
}
