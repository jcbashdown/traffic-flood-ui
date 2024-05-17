# Description

This app is intended to visualise data to determine the impact of heavy rains on mobility in a given city (currently Nairobi).

The motivation was to better understand some of the impacts of the heavy rains in Nairobi in April-Early May 2024 using a much simpler approach than traditional flood risk mapping (where we would combine topographic, hydrological, remote sensing etc. data to understand flood risk.) by using a potential proxy. While traffic data may not be an ideal proxy it's much quicker and cheaper to implement using easily accessible data though there are obvious downsides:

-   Traffic data is generally much more available for major roads. Roads through the worst hit areas such as informal settlements are not covered.
-   It's heavily influenced by the quality of infrastructure. A well build road in a nevertheless vulnerable area may never show traffic effects and so any attempt to draw out statistical conclusions would be flawed in some areas. An example in Nairobi is Red Hill link road running over Peponi ridge. Peponi ridge and areas of spring valley were very badly effected by the rain but this large highway passing through the area remained largely traffic free.

# Approach to data gathering/processing

-   See [separate repo](https://github.com/jcbashdown/traffic-flood)

## In this repo

-   Create a simple UI to display the data
    -   One sparkline for rainfall and another for traffic with a slider to move through time
    -   An openstreemap pane using leaflet with the traffic overlayed on top. The slider moved through the svgs and shows the traffic and rainfall for that time in the sparklines

# Getting Started

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building static assets

```bash
yarn build
```

Currently these are copied from the `out` directory to a separate repo `https://github.com/jcbashdown/traffic-flood-static` and deployed with cloudflare pages to [https://traffic-flood-static.pages.dev/](https://traffic-flood-static.pages.dev/)

# Notes

-   Some minor roads will never show traffic so don't assume that they will be traffic free

# TODO

-   24h average view
-   Fix reference line for dark mode
-   Deploy to portfolio
-   check landscape view with topbar on mobile
