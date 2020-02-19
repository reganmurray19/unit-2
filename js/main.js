var mymap = L.map('mapid').setView([43.09138102,-89.36392535], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicmVnYW5tdXJyYXkiLCJhIjoiY2s2c3EwMXRwMGpncjNsczVjdnBncGtvOSJ9.0GY5BTM-s8hVU_KB98_GZw'
}).addTo(mymap);
$.getJSON("data/data_placeholder.geojson", function(response){
            //create a Leaflet GeoJSON layer and add it to the map
            L.geoJson(response).addTo(mymap);
        });
// // ******TEST******
// var voteFeat = [{
//    "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.09192,-89.29148 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 10",
//     "2000 Total Votes":2424,
//     "2004 Total Votes":1452,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":1208,
//     "2012 Total Votes":1476,
//     "2014 Gov Total Vote":1310,
//     "2016 Total Votes":1455
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.10282,-89.29371 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 11",
//     "2000 Total Votes":2668,
//     "2004 Total Votes":2177,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":1727,
//     "2012 Total Votes":778,
//     "2014 Gov Total Vote":576,
//     "2016 Total Votes":748
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.09117,-89.30538 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 12",
//     "2000 Total Votes":1126,
//     "2004 Total Votes":990,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":675,
//     "2012 Total Votes":1782,
//     "2014 Gov Total Vote":1466,
//     "2016 Total Votes":1678
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.06592,-89.31807 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 13",
//     "2000 Total Votes":655,
//     "2004 Total Votes":443,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":400,
//     "2012 Total Votes":547,
//     "2014 Gov Total Vote":426,
//     "2016 Total Votes":511
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.07545,-89.32253 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 14",
//     "2000 Total Votes":1440,
//     "2004 Total Votes":1154,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":840,
//     "2012 Total Votes":470,
//     "2014 Gov Total Vote":405,
//     "2016 Total Votes":447
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.07921,-89.31583 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 15",
//     "2000 Total Votes":1585,
//     "2004 Total Votes":647,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":472,
//     "2012 Total Votes":1052,
//     "2014 Gov Total Vote":914,
//     "2016 Total Votes":989
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.09229,-89.32306 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 16",
//     "2000 Total Votes":1812,
//     "2004 Total Votes":540,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":478,
//     "2012 Total Votes":2280,
//     "2014 Gov Total Vote":2002,
//     "2016 Total Votes":2268
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.10232,-89.30882 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 17",
//     "2000 Total Votes":1140,
//     "2004 Total Votes":1508,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":1088,
//     "2012 Total Votes":805,
//     "2014 Gov Total Vote":614,
//     "2016 Total Votes":733
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.1227,-89.3057 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 21",
//     "2000 Total Votes":2190,
//     "2004 Total Votes":346,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":188,
//     "2012 Total Votes":892,
//     "2014 Gov Total Vote":682,
//     "2016 Total Votes":835
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.14,-89.259 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 22",
//     "2000 Total Votes":1462,
//     "2004 Total Votes":1016,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":599,
//     "2012 Total Votes":1343,
//     "2014 Gov Total Vote":1049,
//     "2016 Total Votes":1315
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.1284,-89.2851 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 23",
//     "2000 Total Votes":355,
//     "2004 Total Votes":785,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":720,
//     "2012 Total Votes":639,
//     "2014 Gov Total Vote":437,
//     "2016 Total Votes":604
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.1537,-89.2923 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 24",
//     "2000 Total Votes":1949,
//     "2004 Total Votes":1345,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":1050,
//     "2012 Total Votes":656,
//     "2014 Gov Total Vote":543,
//     "2016 Total Votes":706
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.1362,-89.305 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 25",
//     "2000 Total Votes":1938,
//     "2004 Total Votes":2669,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":2270,
//     "2012 Total Votes":1923,
//     "2014 Gov Total Vote":1502,
//     "2016 Total Votes":1819
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.14262,-89.31772 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 26",
//     "2000 Total Votes":2337,
//     "2004 Total Votes":296,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":220,
//     "2012 Total Votes":1103,
//     "2014 Gov Total Vote":900,
//     "2016 Total Votes":1020
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.13473,-89.33626 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 27",
//     "2000 Total Votes":2556,
//     "2004 Total Votes":1406,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":973,
//     "2012 Total Votes":16,
//     "2014 Gov Total Vote":6,
//     "2016 Total Votes":16
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.1017,-89.35671 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 29",
//     "2000 Total Votes":2787,
//     "2004 Total Votes":292,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":248,
//     "2012 Total Votes":2355,
//     "2014 Gov Total Vote":2131,
//     "2016 Total Votes":2293
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.11511,-89.35929 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 30",
//     "2000 Total Votes":2463,
//     "2004 Total Votes":1043,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":843,
//     "2012 Total Votes":991,
//     "2014 Gov Total Vote":802,
//     "2016 Total Votes":907
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.12684,-89.36888 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 31",
//     "2000 Total Votes":1961,
//     "2004 Total Votes":928,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":701,
//     "2012 Total Votes":1108,
//     "2014 Gov Total Vote":914,
//     "2016 Total Votes":1015
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.12559,-89.35961 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 32",
//     "2000 Total Votes":1982,
//     "2004 Total Votes":1796,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":1480,
//     "2012 Total Votes":704,
//     "2014 Gov Total Vote":579,
//     "2016 Total Votes":657
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.13235,-89.35686 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 33",
//     "2000 Total Votes":1258,
//     "2004 Total Votes":2523,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":2254,
//     "2012 Total Votes":865,
//     "2014 Gov Total Vote":635,
//     "2016 Total Votes":791
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.13774,-89.36956 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 34",
//     "2000 Total Votes":2217,
//     "2004 Total Votes":2782,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":2514,
//     "2012 Total Votes":910,
//     "2014 Gov Total Vote":725,
//     "2016 Total Votes":810
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.13598,-89.38038 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 35",
//     "2000 Total Votes":1640,
//     "2004 Total Votes":1652,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":1545,
//     "2012 Total Votes":1115,
//     "2014 Gov Total Vote":873,
//     "2016 Total Votes":1041
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.13461,-89.39823 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 36",
//     "2000 Total Votes":494,
//     "2004 Total Votes":405,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":435,
//     "2012 Total Votes":1157,
//     "2014 Gov Total Vote":992,
//     "2016 Total Votes":1054
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.10358,-89.32924 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 39",
//     "2000 Total Votes":451,
//     "2004 Total Votes":2258,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":1654,
//     "2012 Total Votes":1467,
//     "2014 Gov Total Vote":1286,
//     "2016 Total Votes":1410
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.09362,-89.34224 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 40",
//     "2000 Total Votes":1388,
//     "2004 Total Votes":1886,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":1103,
//     "2012 Total Votes":2239,
//     "2014 Gov Total Vote":2112,
//     "2016 Total Votes":2301
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.08898,-89.35666 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 41",
//     "2000 Total Votes":1942,
//     "2004 Total Votes":1450,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":843,
//     "2012 Total Votes":2372,
//     "2014 Gov Total Vote":2135,
//     "2016 Total Votes":2404
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.08146,-89.36764 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 42",
//     "2000 Total Votes":2429,
//     "2004 Total Votes":2449,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":1278,
//     "2012 Total Votes":2506,
//     "2014 Gov Total Vote":2127,
//     "2016 Total Votes":2467
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.07657,-89.37846 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 43",
//     "2000 Total Votes":478,
//     "2004 Total Votes":1543,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":1475,
//     "2012 Total Votes":392,
//     "2014 Gov Total Vote":282,
//     "2016 Total Votes":399
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.09174,-89.36816 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 44",
//     "2000 Total Votes":2569,
//     "2004 Total Votes":2918,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":2414,
//     "2012 Total Votes":1673,
//     "2014 Gov Total Vote":1387,
//     "2016 Total Votes":1692
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.08447,-89.37605 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 45",
//     "2000 Total Votes":2739,
//     "2004 Total Votes":2562,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":1358,
//     "2012 Total Votes":2504,
//     "2014 Gov Total Vote":2253,
//     "2016 Total Votes":2782
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.07908,-89.38429 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 46",
//     "2000 Total Votes":1571,
//     "2004 Total Votes":2080,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":1171,
//     "2012 Total Votes":2321,
//     "2014 Gov Total Vote":1613,
//     "2016 Total Votes":2251
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.07757,-89.39116 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 47",
//     "2000 Total Votes":1421,
//     "2004 Total Votes":1521,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":912,
//     "2012 Total Votes":1764,
//     "2014 Gov Total Vote":1030,
//     "2016 Total Votes":1932
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.07582,-89.39425 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 48",
//     "2000 Total Votes":2511,
//     "2004 Total Votes":2061,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":1319,
//     "2012 Total Votes":869,
//     "2014 Gov Total Vote":409,
//     "2016 Total Votes":820
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.07344,-89.39511 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 49",
//     "2000 Total Votes":1744,
//     "2004 Total Votes":926,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":608,
//     "2012 Total Votes":2039,
//     "2014 Gov Total Vote":1282,
//     "2016 Total Votes":2562
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.07976,-89.30676 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 5",
//     "2000 Total Votes":1999,
//     "2004 Total Votes":1456,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":2155,
//     "2012 Total Votes":965,
//     "2014 Gov Total Vote":826,
//     "2016 Total Votes":943
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.07055,-89.39339 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 50",
//     "2000 Total Votes":1083,
//     "2004 Total Votes":2446,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":1740,
//     "2012 Total Votes":1850,
//     "2014 Gov Total Vote":1205,
//     "2016 Total Votes":2402
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.07469,-89.38687 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 51",
//     "2000 Total Votes":1342,
//     "2004 Total Votes":1062,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":822,
//     "2012 Total Votes":1154,
//     "2014 Gov Total Vote":943,
//     "2016 Total Votes":1451
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.06804,-89.3891 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 53",
//     "2000 Total Votes":720,
//     "2004 Total Votes":544,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":388,
//     "2012 Total Votes":2465,
//     "2014 Gov Total Vote":1905,
//     "2016 Total Votes":2986
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.06867,-89.3996 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 54",
//     "2000 Total Votes":1734,
//     "2004 Total Votes":1046,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":797,
//     "2012 Total Votes":638,
//     "2014 Gov Total Vote":554,
//     "2016 Total Votes":701
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.07055,-89.40475 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 55",
//     "2000 Total Votes":2177,
//     "2004 Total Votes":122,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":52,
//     "2012 Total Votes":2694,
//     "2014 Gov Total Vote":1967,
//     "2016 Total Votes":3190
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.07206,-89.39871 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 56",
//     "2000 Total Votes":2319,
//     "2004 Total Votes":1457,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":889,
//     "2012 Total Votes":1982,
//     "2014 Gov Total Vote":1322,
//     "2016 Total Votes":2093
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.07544,-89.3982 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 57",
//     "2000 Total Votes":1917,
//     "2004 Total Votes":502,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":315,
//     "2012 Total Votes":933,
//     "2014 Gov Total Vote":487,
//     "2016 Total Votes":1046
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.07582,-89.40664 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 58",
//     "2000 Total Votes":2412,
//     "2004 Total Votes":559,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":278,
//     "2012 Total Votes":966,
//     "2014 Gov Total Vote":784,
//     "2016 Total Votes":1033
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.0777,-89.41694 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 59",
//     "2000 Total Votes":2542,
//     "2004 Total Votes":1119,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":904,
//     "2012 Total Votes":1108,
//     "2014 Gov Total Vote":982,
//     "2016 Total Votes":1340
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.08051,-89.29148 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 6",
//     "2000 Total Votes":1455,
//     "2004 Total Votes":1527,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":1205,
//     "2012 Total Votes":1672,
//     "2014 Gov Total Vote":1485,
//     "2016 Total Votes":1660
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.08673,-89.4329 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 60",
//     "2000 Total Votes":422,
//     "2004 Total Votes":507,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":319,
//     "2012 Total Votes":607,
//     "2014 Gov Total Vote":415,
//     "2016 Total Votes":536
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.07068,-89.41659 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 61",
//     "2000 Total Votes":2036,
//     "2004 Total Votes":2367,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":1521,
//     "2012 Total Votes":2254,
//     "2014 Gov Total Vote":1630,
//     "2016 Total Votes":2241
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.06603,-89.42621 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 62",
//     "2000 Total Votes":736,
//     "2004 Total Votes":1169,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":790,
//     "2012 Total Votes":808,
//     "2014 Gov Total Vote":757,
//     "2016 Total Votes":831
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.05889,-89.42844 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 65",
//     "2000 Total Votes":1502,
//     "2004 Total Votes":1506,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":1352,
//     "2012 Total Votes":2451,
//     "2014 Gov Total Vote":2195,
//     "2016 Total Votes":2570
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.0624,-89.4135 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 66",
//     "2000 Total Votes":1277,
//     "2004 Total Votes":1657,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":1466,
//     "2012 Total Votes":2335,
//     "2014 Gov Total Vote":1818,
//     "2016 Total Votes":2418
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.06026,-89.40372 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 68",
//     "2000 Total Votes":1805,
//     "2004 Total Votes":813,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":484,
//     "2012 Total Votes":1008,
//     "2014 Gov Total Vote":874,
//     "2016 Total Votes":1068
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.05863,-89.39016 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 69",
//     "2000 Total Votes":0,
//     "2004 Total Votes":1516,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":1393,
//     "2012 Total Votes":1737,
//     "2014 Gov Total Vote":1534,
//     "2016 Total Votes":1769
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.08009,-89.2767 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 7",
//     "2000 Total Votes":1596,
//     "2004 Total Votes":1665,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":1336,
//     "2012 Total Votes":968,
//     "2014 Gov Total Vote":842,
//     "2016 Total Votes":1010
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.03243,-89.40082 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 73",
//     "2000 Total Votes":0,
//     "2004 Total Votes":1480,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":1293,
//     "2012 Total Votes":717,
//     "2014 Gov Total Vote":502,
//     "2016 Total Votes":700
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.04484,-89.42655 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 75",
//     "2000 Total Votes":0,
//     "2004 Total Votes":2309,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":1982,
//     "2012 Total Votes":1258,
//     "2014 Gov Total Vote":950,
//     "2016 Total Votes":1152
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.05295,-89.46186 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 79",
//     "2000 Total Votes":0,
//     "2004 Total Votes":918,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":716,
//     "2012 Total Votes":2545,
//     "2014 Gov Total Vote":2367,
//     "2016 Total Votes":2570
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.05646,-89.44538 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 81",
//     "2000 Total Votes":43,
//     "2004 Total Votes":1666,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":1435,
//     "2012 Total Votes":1533,
//     "2014 Gov Total Vote":1384,
//     "2016 Total Votes":1592
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.06353,-89.44852 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 82",
//     "2000 Total Votes":107,
//     "2004 Total Votes":1823,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":1525,
//     "2012 Total Votes":1280,
//     "2014 Gov Total Vote":1152,
//     "2016 Total Votes":1307
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.06504,-89.46019 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 83",
//     "2000 Total Votes":9,
//     "2004 Total Votes":2219,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":2149,
//     "2012 Total Votes":1492,
//     "2014 Gov Total Vote":1319,
//     "2016 Total Votes":1435
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.07256,-89.45968 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 84",
//     "2000 Total Votes":115,
//     "2004 Total Votes":1100,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":1003,
//     "2012 Total Votes":1658,
//     "2014 Gov Total Vote":1325,
//     "2016 Total Votes":1738
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.0831,-89.4765 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 86",
//     "2000 Total Votes":0,
//     "2004 Total Votes":2014,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":1547,
//     "2012 Total Votes":1866,
//     "2014 Gov Total Vote":1632,
//     "2016 Total Votes":1944
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.07557,-89.49075 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 87",
//     "2000 Total Votes":0,
//     "2004 Total Votes":1733,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":1267,
//     "2012 Total Votes":2052,
//     "2014 Gov Total Vote":1784,
//     "2016 Total Votes":1995
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.05885,-89.49401 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 89",
//     "2000 Total Votes":104,
//     "2004 Total Votes":702,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":589,
//     "2012 Total Votes":1907,
//     "2014 Gov Total Vote":1678,
//     "2016 Total Votes":1906
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//        "type": "Point",
//        "coordinates":  [ 43.09555,-89.2774 ]
//     },
//     "properties": {
//     "Ward":"City Of Madison Ward 9",
//     "2000 Total Votes":1346,
//     "2004 Total Votes":769,
//     "2008 Total Votes":"",
//     "2010 Gov Total Votes":489,
//     "2012 Total Votes":1652,
//     "2014 Gov Total Vote":1565,
//     "2016 Total Votes":2133
//     }
//   }
// ];
// var geojsonMarkerOptions = {
//     radius: 20,
//     fillColor: "#ff7800",
//     color: "#000",
//     weight: 1,
//     opacity: 1,
//     fillOpacity: 0.8
// };
// L.geoJSON(voteFeat, {
//     pointToLayer: function (feature, latlng) {
//         return L.circleMarker(latlng, geojsonMarkerOptions);
//     }
// }).addTo(mymap);
