import MiniHex from './MiniHex';
import { mapDict } from '../../auxiliar/getBoard';

function Map(props) {
  return (
    <div className="map-container">
      <ol className="map-row map-row-1">
        {[...Array(5).keys()].map(key => {
          return <MiniHex
            type={mapDict[key]}
            id={`mini-hex-${key}`}
            key={key}
          />;
        })}
      </ol>  
      <ol className="map-row map-row-2">
        {[...Array(6).keys()].map(key => {
          return <MiniHex
            type={mapDict[key + 5]}
            id={`mini-hex-${key + 5}`}
            key={key + 5}
          />;
        })}
      </ol>
      <ol className="map-row map-row-3">
        {[...Array(7).keys()].map(key => {
          return <MiniHex
            type={mapDict[key + 11]}
            id={`mini-hex-${key + 11}`}
            key={key + 11}
          />;
        })}
      </ol>
      <ol className="map-row map-row-4">
        {[...Array(8).keys()].map(key => {
          return <MiniHex
            type={mapDict[key + 18]}
            id={`mini-hex-${key + 18}`}
            key={key + 18}
          />;
        })}
      </ol>
      <ol className="map-row">
        {[...Array(9).keys()].map(key => {
          return <MiniHex
            type={mapDict[key + 26]}
            id={`mini-hex-${key + 26}`}
            key={key + 26}
          />;
        })}
      </ol>
      <ol className="map-row map-row-4">
        {[...Array(8).keys()].map(key => {
          return <MiniHex
            type={mapDict[key + 35]}
            id={`mini-hex-${key + 35}`}
            key={key + 35}
          />;
        })}
      </ol>
      <ol className="map-row map-row-3">
        {[...Array(7).keys()].map(key => {
          return <MiniHex
            type={mapDict[key + 43]}
            id={`mini-hex-${key + 43}`}
            key={key + 43}
          />;
        })}
      </ol>
      <ol className="map-row map-row-2">
        {[...Array(6).keys()].map(key => {
          return <MiniHex
            type={mapDict[key + 50]}
            id={`mini-hex-${key + 50}`}
            key={key + 50}
          />;
        })}
      </ol>
      <ol className="map-row map-row-9">
        {[...Array(5).keys()].map(key => {
          return <MiniHex
            type={mapDict[key + 56]}
            id={`mini-hex-${key + 56}`}
            key={key + 56}
          />;
        })}
      </ol>
    </div>
    
  );
}

export default Map;
export { mapDict };