import * as React from "react";
import { platform } from "./platform";
let H = window.H;




export class DisplayMap extends React.Component {
  constructor(props) {
    super(props);
  }
  mapRef = React.createRef();

  state = {
    // The map instance to use during cleanup
    map: null
  };


  componentDidMount() {
    const defaultLayers = platform.createDefaultLayers();

    // Create an instance of the map
    const map = new H.Map(
      this.mapRef.current,
      defaultLayers.vector.normal.map,
      {
        center: { lat: 40, lng: -98 },
        zoom: 4,
        pixelRatio: window.devicePixelRatio || 1
      }
    );

    var geocodingParams = {
      searchText: this.props.city
    };

    var onResult = function (result) {
      var locations = result.Response.View[0].Result,
        position,
        marker;
      // Add a marker for each location found
      locations.map(location => {
        position = {
          lat: location.Location.DisplayPosition.Latitude,
          lng: location.Location.DisplayPosition.Longitude
        };
        marker = new H.map.Marker(position);
        map.addObject(marker);
      })

    };

    // Get an instance of the geocoding service:
    var geocoder = platform.getGeocodingService();



    geocoder.geocode(geocodingParams, onResult, function (e) {
      alert(e);
    });

    // var icon = new H.map.Icon(svgMarkup),
    //   coords = { lat: 39, lng: -98 },
    //   marker = new H.map.Marker(coords, { icon: icon });
    // map.addObject(marker);
    // map.setCenter(coords);


    // MapEvents enables the event system
    // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
    // This variable is unused and is present for explanatory purposes
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    // Create the default UI components to allow the user to interact with them
    // This variable is unused
    const ui = H.ui.UI.createDefault(map, defaultLayers);

    this.setState({ map });
  }

  componentWillUnmount() {
    // Cleanup after the map to avoid memory leaks when this component exits the page
    this.state.map.dispose();

  }

  render() {


    return (
      // Set a height on the map so it will display
      <div
        ref={this.mapRef}
        style={{ height: "100vh", width: "66.66vw", float: "right" }}
      />
    );
  }
}

export default DisplayMap;
