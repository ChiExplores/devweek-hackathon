import * as React from "react";
import { platform } from "./platform";
let H = window.H;

export class DisplayMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // The map instance to use during cleanup
      map: null,
      city: this.props.city
    };
  }
  mapRef = React.createRef();

  componentDidUpdate(prevState) {
    // Typical usage (don't forget to compare props):
    if (this.props.city.city !== prevState.city) {
      this.changeMap(this.state.map, this.props.city.city);
      //this.setState(Object.assign({}, this.state, { city: this.props.city }));
      console.log(this.props.city);
    }
  }

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

    // var icon = new H.map.Icon(svgMarkup),
    //   coords = { lat: 39, lng: -98 },
    //   marker = new H.map.Marker(coords, { icon: icon });
    // map.addObject(marker);

    // MapEvents enables the event system
    // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
    // This variable is unused and is present for explanatory purposes
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    // Create the default UI components to allow the user to interact with them
    // This variable is unused
    const ui = H.ui.UI.createDefault(map, defaultLayers);

    this.setState(Object.assign({}, this.state, { map: map }));
  }

  changeMap = (map, city) => {
    var geocodingParams = {
      searchText: city
    };

    var onResult = function(result) {
      var locations = result.Response.View[0].Result,
        position,
        marker;
      // Add a marker for each location found
      locations.map(location => {
        position = {
          lat: location.Location.DisplayPosition.Latitude,
          lng: location.Location.DisplayPosition.Longitude
        };
        console.log(location);
        marker = new H.map.Marker(position);
        map.addObject(marker);
        map.setCenter(position);
      });
    };

    // Get an instance of the geocoding service:
    var geocoder = platform.getGeocodingService();

    geocoder.geocode(geocodingParams, onResult, function(e) {
      console.log(e);
    });
  };

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
