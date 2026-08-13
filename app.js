/**
 * BrewGeoguesser | 3-Try Craft Beer Triangulation & Discovery
 * Main Application Logic (Vanilla ES6 JavaScript)
 */

(function () {
  'use strict';

  // ==========================================================================
  // Craft & Microbrewery Discovery Databases (Untappd-Inspired Library)
  // ==========================================================================
  const BEER_DATABASE = {
    // 🌎 NORTH AMERICA (US, Canada, Mexico Microbreweries & Craft Taprooms)
    NA: [
      {
        id: 'na-treehouse-julius',
        beerName: 'Julius IPA',
        breweryName: 'Tree House Brewing Company',
        city: 'Charlton',
        region: 'Massachusetts, USA',
        lat: 42.1287,
        lon: -72.0195,
        style: 'American IPA',
        abv: '6.8%',
        glassType: 'Tulip Glass',
        packageType: 'can',
        imageUrl: 'assets/julius.jpg',
        liquidColor: '#facc15',
        description: 'Julius is Tree House\'s flagship IPA and an Untappd legend. Bursting with bright tropical fruit, mango, and peach flavors with a soft, pillowy mouthfeel from Charlton, Massachusetts.'
      },
      {
        id: 'na-trillium-congress',
        beerName: 'Congress Street IPA',
        breweryName: 'Trillium Brewing Company',
        city: 'Canton / Boston',
        region: 'Massachusetts, USA',
        lat: 42.1764,
        lon: -71.1396,
        style: 'New England IPA',
        abv: '7.2%',
        glassType: 'Tulip Glass',
        packageType: 'can',
        imageUrl: 'assets/hazy.jpg',
        liquidColor: '#f59e0b',
        description: 'Brewed in Canton and Boston, Massachusetts. Congress Street is Trillium\'s flagship Australian Galaxy-hopped IPA, overflowing with dank pine, passion fruit, and citrus zest.'
      },
      {
        id: 'na-otherhalf-allgreen',
        beerName: 'All Green Everything',
        breweryName: 'Other Half Brewing Co.',
        city: 'Brooklyn',
        region: 'New York, USA',
        lat: 40.6738,
        lon: -73.9991,
        style: 'Imperial IPA',
        abv: '10.5%',
        glassType: 'Snifter',
        packageType: 'can',
        imageUrl: 'assets/hazy.jpg',
        liquidColor: '#eab308',
        description: 'Brewed under the BQE in Brooklyn, New York. Other Half\'s "All Green Everything" is a colossal Triple IPA packed with Motueka, Amarillo, Citra, and Mosaic hops.'
      },
      {
        id: 'na-monkish-foggier',
        beerName: 'Foggier Window',
        breweryName: 'Monkish Brewing Co.',
        city: 'Torrance',
        region: 'California, USA',
        lat: 33.8361,
        lon: -118.3114,
        style: 'Double IPA',
        abv: '8.1%',
        glassType: 'Tulip Glass',
        packageType: 'can',
        imageUrl: 'assets/hazy.jpg',
        liquidColor: '#facc15',
        description: 'Cult microbrewery Monkish Brewing in Torrance, Southern California is famous for draw-the-line hazy DIPA releases. Foggier Window is double dry-hopped with Nelson Sauvin and Citra.'
      },
      {
        id: 'na-toppling-pseudosue',
        beerName: 'Pseudo Sue',
        breweryName: 'Toppling Goliath Brewing Co.',
        city: 'Decorah',
        region: 'Iowa, USA',
        lat: 43.3089,
        lon: -91.7958,
        style: 'Single-Hop Pale Ale',
        abv: '5.8%',
        glassType: 'Pint Glass',
        packageType: 'can',
        imageUrl: 'assets/hazy.jpg',
        liquidColor: '#facc15',
        description: 'Brewed in Decorah, Iowa and named after the famous T-Rex fossil. Pseudo Sue is a single-hop Citra pale ale roaring with grapefruit, mango, and evergreen aromas.'
      },
      {
        id: 'na-equilibrium-mc2',
        beerName: 'MC² (Energy)',
        breweryName: 'Equilibrium Brewery',
        city: 'Middletown',
        region: 'New York, USA',
        lat: 41.4457,
        lon: -74.4231,
        style: 'Double IPA',
        abv: '8.0%',
        glassType: 'Tulip Glass',
        packageType: 'can',
        imageUrl: 'assets/hazy.jpg',
        liquidColor: '#fbbf24',
        description: 'Equilibrium was founded by MIT scientists in Middletown, New York. MC² is their flagship DIPA using mass-balance water chemistry to achieve extreme citrus hop saturation.'
      },
      {
        id: 'na-weldwerks-medianoche',
        beerName: 'Medianoche Stout',
        breweryName: 'WeldWerks Brewing Co.',
        city: 'Greeley',
        region: 'Colorado, USA',
        lat: 40.4267,
        lon: -104.6931,
        style: 'Bourbon Barrel Stout',
        abv: '13.5%',
        glassType: 'Snifter',
        packageType: 'bottle',
        imageUrl: 'assets/stout.jpg',
        liquidColor: '#1e1b18',
        description: 'WeldWerks in Greeley, Colorado is world-famous for Medianoche, a viscous imperial stout aged for over 18 months in premium bourbon barrels, overflowing with fudge, vanilla, and toasted coconut.'
      },
      {
        id: 'na-pliny-elder',
        beerName: 'Pliny the Elder',
        breweryName: 'Russian River Brewing Company',
        city: 'Santa Rosa',
        region: 'California, USA',
        lat: 38.4405,
        lon: -122.7141,
        style: 'Double IPA',
        abv: '8.0%',
        glassType: 'Tulip Glass',
        packageType: 'bottle',
        imageUrl: 'assets/pliny.jpg',
        liquidColor: '#f59e0b',
        description: 'Pliny the Elder is a world-renowned Double IPA packed with piney, resinous, and citrus hop aromas. Named after the Roman naturalist who first wrote about hops.'
      },
      {
        id: 'na-heady-topper',
        beerName: 'Heady Topper',
        breweryName: 'The Alchemist',
        city: 'Stowe',
        region: 'Vermont, USA',
        lat: 44.4578,
        lon: -72.6841,
        style: 'New England Double IPA',
        abv: '8.0%',
        glassType: 'Tulip / Can Drink',
        packageType: 'can',
        imageUrl: 'assets/hazy.jpg',
        liquidColor: '#facc15',
        description: 'The Alchemist\'s Heady Topper in Stowe, Vermont launched the New England Hazy IPA revolution. Unfiltered, extremely aromatic, and famously instructed to "Drink from the Can!"'
      },
      {
        id: 'na-unibroue-finmonde',
        beerName: 'La Fin du Monde',
        breweryName: 'Unibroue',
        city: 'Chambly',
        region: 'Quebec, Canada',
        lat: 45.4485,
        lon: -73.2878,
        style: 'Belgian-Style Tripel',
        abv: '9.0%',
        glassType: 'Chalice / Tulip',
        packageType: 'bottle',
        imageUrl: 'assets/duvel.jpg',
        liquidColor: '#fbbf24',
        description: 'Brewed in Chambly, Quebec, La Fin du Monde ("End of the World") is an internationally acclaimed 9% ABV Belgian-style Tripel boasting champagne-like carbonation and floral spice notes.'
      },
      {
        id: 'na-driftwood-fattug',
        beerName: 'Fat Tug IPA',
        breweryName: 'Driftwood Brewery',
        city: 'Victoria',
        region: 'British Columbia, Canada',
        lat: 48.4328,
        lon: -123.3768,
        style: 'Pacific Northwest IPA',
        abv: '7.0%',
        glassType: 'Nonic Pint',
        packageType: 'bottle',
        imageUrl: 'assets/pliny.jpg',
        liquidColor: '#d97706',
        description: 'Fat Tug IPA is a legendary West Coast IPA from Victoria, BC. It delivers intense grapefruit, melon, and pine aromas with a robust malt backbone that defines Canadian craft brewing.'
      },
      {
        id: 'na-superflux-craft',
        beerName: 'Superflux Craft IPA',
        breweryName: 'Superflux Beer Company',
        city: 'Vancouver',
        region: 'British Columbia, Canada',
        lat: 49.2827,
        lon: -123.0874,
        style: 'Hazy IPA',
        abv: '6.5%',
        glassType: 'Tulip Glass',
        packageType: 'can',
        imageUrl: 'assets/hazy.jpg',
        liquidColor: '#facc15',
        description: 'Superflux Beer Co. operates out of Vancouver\'s Eastside Craft District. Famous for ultra-fresh, experimental Hazy IPAs packed with modern Australian and New Zealand hop varieties.'
      },
      {
        id: 'na-bellwoods-jellyking',
        beerName: 'Jelly King Sour',
        breweryName: 'Bellwoods Brewery',
        city: 'Toronto',
        region: 'Ontario, Canada',
        lat: 43.6472,
        lon: -79.4197,
        style: 'Dry-Hopped Sour Ale',
        abv: '5.6%',
        glassType: 'Tulip Glass',
        packageType: 'bottle',
        liquidColor: '#fef08a',
        description: 'Bellwoods Brewery on Ossington Ave in Toronto is a Canadian craft icon. Jelly King is a dry-hopped sour ale combining juicy tropical fruit funk with tart, refreshing acidity.'
      },
      {
        id: 'na-minerva-stout',
        beerName: 'Minerva Imperial Stout',
        breweryName: 'Cervecería Minerva',
        city: 'Guadalajara',
        region: 'Jalisco, Mexico',
        lat: 20.6767,
        lon: -103.3475,
        style: 'Imperial Stout',
        abv: '9.0%',
        glassType: 'Snifter',
        packageType: 'bottle',
        imageUrl: 'assets/stout.jpg',
        liquidColor: '#1e1b18',
        description: 'Crafted in Guadalajara, Jalisco, Minerva is a pioneer of Mexico\'s modern craft beer movement. Their Imperial Stout offers rich roasted cocoa, espresso, and silky dark chocolate flavors.'
      },
      {
        id: 'na-aguamala-astillero',
        beerName: 'Astillero Imperial IPA',
        breweryName: 'Cervecería Agua Mala',
        city: 'Ensenada',
        region: 'Baja California, Mexico',
        lat: 31.8742,
        lon: -116.6631,
        style: 'Imperial West Coast IPA',
        abv: '7.1%',
        glassType: 'Pint Glass',
        packageType: 'can',
        imageUrl: 'assets/hazy.jpg',
        liquidColor: '#f59e0b',
        description: 'Agua Mala is a multi-award-winning coastal craft brewery in Ensenada, Baja California. Astillero is a crisp, resinous Imperial IPA brewed right on the Pacific ocean shore.'
      },
      {
        id: 'na-bells-twohearted',
        beerName: 'Two Hearted Ale',
        breweryName: 'Bell\'s Brewery',
        city: 'Comstock',
        region: 'Michigan, USA',
        lat: 42.2858,
        lon: -85.5097,
        style: 'American IPA',
        abv: '7.0%',
        glassType: 'Nonic Pint',
        packageType: 'bottle',
        imageUrl: 'assets/pliny.jpg',
        liquidColor: '#f59e0b',
        description: 'Bell\'s Two Hearted Ale is a staple of Midwest craft brewing. Brewed in Michigan with 100% Centennial hops, it is celebrated for its grapefruit aromas and clean malt structure.'
      },
      {
        id: 'na-3floyds-zombiedust',
        beerName: 'Zombie Dust',
        breweryName: '3 Floyds Brewing',
        city: 'Munster',
        region: 'Indiana, USA',
        lat: 41.5361,
        lon: -87.5163,
        style: 'Single-Hop Pale Ale',
        abv: '6.2%',
        glassType: 'Pint Glass',
        packageType: 'bottle',
        imageUrl: 'assets/pliny.jpg',
        liquidColor: '#fbbf24',
        description: 'Zombie Dust is an intensely hopped pale ale crafted in Munster, Indiana. It showcases the bright, tropical, and citrusy flavors of 100% Citra hops with an apocalyptic cult following.'
      },
      {
        id: 'na-allagash-white',
        beerName: 'Allagash White',
        breweryName: 'Allagash Brewing Company',
        city: 'Portland',
        region: 'Maine, USA',
        lat: 43.7032,
        lon: -70.3179,
        style: 'Belgian Witbier',
        abv: '5.2%',
        glassType: 'Wheat Glass',
        packageType: 'bottle',
        imageUrl: 'assets/duvel.jpg',
        liquidColor: '#fef08a',
        description: 'Allagash White is an interpretation of a traditional Belgian wheat beer. Brewed in Portland, Maine, it features complex spice notes of coriander, Curaçao orange peel, and Belgian yeast.'
      }
    ],

    // 🌍 EUROPE (UK, Germany, Belgium, Czechia, Netherlands, Ireland Microbreweries)
    EU: [
      {
        id: 'eu-cantillon-fou',
        beerName: 'Fou\' Foune Lambic',
        breweryName: 'Brasserie Cantillon',
        city: 'Brussels',
        region: 'Brussels-Capital, Belgium',
        lat: 50.8416,
        lon: 4.3353,
        style: 'Apricot Lambic (Gueuze)',
        abv: '5.0%',
        glassType: 'Tulip Glass',
        packageType: 'bottle',
        imageUrl: 'assets/cantillon.jpg',
        liquidColor: '#fbbf24',
        description: 'Brasserie Cantillon in Anderlecht, Brussels is the holy grail of spontaneous fermentation. Fou\' Foune is a world-renowned lambic aged on Bergeron apricots in oak casks.'
      },
      {
        id: 'eu-duvel-golden',
        beerName: 'Duvel Belgian Strong Ale',
        breweryName: 'Duvel Moortgat',
        city: 'Puurs-Sint-Amands',
        region: 'Antwerp, Belgium',
        lat: 51.0569,
        lon: 4.3314,
        style: 'Belgian Strong Golden Ale',
        abv: '8.5%',
        glassType: 'Tulip Glass',
        packageType: 'bottle',
        imageUrl: 'assets/duvel.jpg',
        liquidColor: '#fde047',
        description: 'Duvel ("Devil") is an iconic 8.5% ABV Belgian golden ale. Re-fermented in the bottle in Puurs, Belgium, it is celebrated for its huge rocky head, effervescence, and subtle hop bitterness.'
      },
      {
        id: 'eu-guinness-stout',
        beerName: 'Guinness Extra Stout',
        breweryName: 'St. James\'s Gate Brewery',
        city: 'Dublin',
        region: 'Leinster, Ireland',
        lat: 53.3431,
        lon: -6.2868,
        style: 'Irish Dry Stout',
        abv: '5.6%',
        glassType: 'Guinness Pint Glass',
        packageType: 'bottle',
        imageUrl: 'assets/guinness.jpg',
        liquidColor: '#18120c',
        description: 'Brewed at historic St. James\'s Gate in Dublin, Ireland under a famous 9,000-year lease signed in 1759. Iconic for its dark ruby color, roasted barley, and velvety creamy head.'
      },
      {
        id: 'eu-rothaus-pils',
        beerName: 'Rothaus Tannenzäpfle Pils',
        breweryName: 'Badische Staatsbrauerei Rothaus',
        city: 'Grafenhausen',
        region: 'Black Forest, Germany',
        lat: 47.7953,
        lon: 8.2464,
        style: 'German Pilsner',
        abv: '5.1%',
        glassType: 'Pilsner Flute',
        packageType: 'bottle',
        imageUrl: 'assets/pilsner.jpg',
        liquidColor: '#fef08a',
        description: 'Brewed high in Germany\'s Black Forest since 1791. Tannenzäpfle ("Little Pine Cone") is a legendary German Pilsner brewed with spring water and Tettnang and Hallertau hops.'
      },
      {
        id: 'eu-3fonteinen-geuze',
        beerName: 'Oude Geuze Vintage',
        breweryName: 'Brouwerij 3 Fonteinen',
        city: 'Beersel',
        region: 'Flemish Brabant, Belgium',
        lat: 50.7681,
        lon: 4.3015,
        style: 'Oude Geuze',
        abv: '6.0%',
        glassType: 'Tulip Glass',
        packageType: 'bottle',
        imageUrl: 'assets/cantillon.jpg',
        liquidColor: '#facc15',
        description: 'Brouwerij 3 Fonteinen in Beersel, Belgium blends 1, 2, and 3-year-old lambics aged in oak barrels. Highly prized by Untappd sours enthusiasts for wild funk and crisp tart acidity.'
      },
      {
        id: 'eu-deya-steady',
        beerName: 'Steady Rolling Man',
        breweryName: 'DEYA Brewing Company',
        city: 'Cheltenham',
        region: 'Gloucestershire, England',
        lat: 51.8953,
        lon: -2.0885,
        style: 'Pale Ale',
        abv: '5.2%',
        glassType: 'Nonic Pint',
        packageType: 'can',
        imageUrl: 'assets/hazy.jpg',
        liquidColor: '#facc15',
        description: 'DEYA in Cheltenham, England produces Untappd\'s highest-rated British pale ale. Steady Rolling Man is soft, juicy, and immensely drinkable with Mosaic and Citra hop saturation.'
      },
      {
        id: 'eu-verdant-lightbulb',
        beerName: 'Lightbulb Pale Ale',
        breweryName: 'Verdant Brewing Co.',
        city: 'Penryn',
        region: 'Cornwall, England',
        lat: 50.1685,
        lon: -5.1092,
        style: 'Extra Pale Ale',
        abv: '4.5%',
        glassType: 'Craft Pint',
        packageType: 'can',
        imageUrl: 'assets/hazy.jpg',
        liquidColor: '#fef08a',
        description: 'Brewed on the coast of Cornwall, England. Verdant is famed for hazy, hop-saturated craft beers. Lightbulb is an extra pale ale with citrus pith and tropical fruit notes.'
      },
      {
        id: 'eu-cloudwater-chubbles',
        beerName: 'Chubbles DIPA',
        breweryName: 'Cloudwater Brew Co.',
        city: 'Manchester',
        region: 'Greater Manchester, England',
        lat: 53.4756,
        lon: -2.2281,
        style: 'Double IPA',
        abv: '8.0%',
        glassType: 'Tulip Glass',
        packageType: 'can',
        imageUrl: 'assets/hazy.jpg',
        liquidColor: '#f59e0b',
        description: 'Cloudwater in Manchester, England is a global craft beer titan. Chubbles is a collaboration DIPA loaded with oats, wheat, and massive dry hops for an intensely juicy texture.'
      },
      {
        id: 'eu-westvleteren-12',
        beerName: 'Westvleteren XII',
        breweryName: 'Brouwerij De Sint-Sixtus',
        city: 'Vleteren',
        region: 'West Flanders, Belgium',
        lat: 50.8959,
        lon: 2.7214,
        style: 'Belgian Quadrupel',
        abv: '10.2%',
        glassType: 'Trappist Chalice',
        packageType: 'bottle',
        imageUrl: 'assets/stout.jpg',
        liquidColor: '#451a03',
        description: 'Brewed by Trappist monks at Saint Sixtus Abbey in Vleteren, Belgium. Frequently voted the #1 beer in the world, featuring notes of dark fig, raisin, plum, and dark sugar.'
      },
      {
        id: 'eu-moersleutel-motoroil',
        beerName: 'Motor Oil Imperial Stout',
        breweryName: 'Moersleutel Craft Brewery',
        city: 'Alkmaar',
        region: 'North Holland, Netherlands',
        lat: 52.6458,
        lon: 4.7731,
        style: 'Russian Imperial Stout',
        abv: '12.0%',
        glassType: 'Snifter',
        packageType: 'can',
        imageUrl: 'assets/stout.jpg',
        liquidColor: '#18120c',
        description: 'Moersleutel ("Wrench") in Alkmaar, Netherlands was founded by four engineer brothers. Motor Oil is a pitch-black, thick 12% stout brimming with dark chocolate and espresso roast.'
      },
      {
        id: 'eu-urquell-pilsner',
        beerName: 'Pilsner Urquell',
        breweryName: 'Plzeňský Prazdroj',
        city: 'Plzeň',
        region: 'Bohemia, Czech Republic',
        lat: 49.7475,
        lon: 13.3878,
        style: 'Czech Lager (Original Pilsner)',
        abv: '4.4%',
        glassType: 'Czech Glass Mug',
        packageType: 'bottle',
        imageUrl: 'assets/pilsner.jpg',
        liquidColor: '#eab308',
        description: 'The world\'s first golden pilsner lager, created in Plzeň, Czech Republic in 1842. Brewed with Czech Saaz hops and soft Bohemian spring water.'
      }
    ],

    // 🌐 THE WORLD (Global Microbrewery Discovery - NA, EU + Asian Craft Beers)
    WORLD: []
  };

  BEER_DATABASE.WORLD = [
    ...BEER_DATABASE.NA,
    ...BEER_DATABASE.EU,

    // 🇯🇵 JAPAN CRAFT BEERS
    {
      id: 'asia-japan-yonayona',
      beerName: 'Yona Yona Ale',
      breweryName: 'Yo-Ho Brewing',
      city: 'Karuizawa',
      region: 'Nagano, Japan',
      lat: 36.3400,
      lon: 138.6000,
      style: 'American Pale Ale',
      abv: '5.5%',
      glassType: 'Pint Glass',
      packageType: 'can',
      imageUrl: 'assets/yona_yona.jpg',
      liquidColor: '#f59e0b',
      description: 'Yona Yona ("Every Night") Ale is Japan\'s #1 iconic craft pale ale brewed in the mountains of Nagano. Packed with floral Cascade hop aromas, medium body, and crisp caramel malt balance.'
    },
    {
      id: 'asia-japan-hitachino',
      beerName: 'Hitachino Nest White Ale',
      breweryName: 'Kiuchi Brewery',
      city: 'Naka',
      region: 'Ibaraki, Japan',
      lat: 36.4526,
      lon: 140.4851,
      style: 'Japanese Witbier',
      abv: '5.5%',
      glassType: 'Chalice',
      packageType: 'bottle',
      imageUrl: 'assets/duvel.jpg',
      liquidColor: '#fef08a',
      description: 'Brewed by Kiuchi Brewery in Ibaraki, Japan (originally a sake brewery founded in 1823). Hitachino Nest White Ale is spiced with nutmeg, orange juice, coriander, and native Japanese citrus.'
    },
    {
      id: 'asia-japan-minoh',
      beerName: 'Minoh Imperial Stout',
      breweryName: 'Minoh Beer',
      city: 'Minoh / Osaka',
      region: 'Kansai, Japan',
      lat: 34.8267,
      lon: 135.4705,
      style: 'Imperial Stout',
      abv: '8.5%',
      glassType: 'Snifter',
      packageType: 'bottle',
      imageUrl: 'assets/stout.jpg',
      liquidColor: '#1e1b18',
      description: 'Founded in Minoh, Osaka by the Ohshita sisters. Minoh Stout is a multi-time World Beer Cup gold medal winner brimming with espresso roast and velvety dark cocoa.'
    },
    {
      id: 'asia-japan-baird',
      beerName: 'Rising Sun Pale Ale',
      breweryName: 'Baird Brewing Company',
      city: 'Izu / Shizuoka',
      region: 'Chubu, Japan',
      lat: 34.9750,
      lon: 138.9300,
      style: 'Japanese Craft Pale Ale',
      abv: '5.5%',
      glassType: 'Pint Glass',
      packageType: 'bottle',
      imageUrl: 'assets/pliny.jpg',
      liquidColor: '#f59e0b',
      description: 'Brewed with pristine subterranean spring water from Mount Fuji in Shizuoka, Japan. Unfiltered, crisp, and single-hopped with citrusy Cascade hops.'
    },

    // 🇻🇳 VIETNAM CRAFT BEERS
    {
      id: 'asia-vietnam-pasteur',
      beerName: 'Jasmine IPA',
      breweryName: 'Pasteur Street Brewing Co.',
      city: 'Ho Chi Minh City',
      region: 'Saigon, Vietnam',
      lat: 10.7769,
      lon: 106.7009,
      style: 'Jasmine IPA',
      abv: '6.5%',
      glassType: 'Pint Glass',
      packageType: 'bottle',
      imageUrl: 'assets/pasteur.jpg',
      liquidColor: '#f59e0b',
      description: 'Crafted in Ho Chi Minh City, Vietnam. Infused with dried jasmine flowers harvested in Northern Vietnam alongside American Centennial and Citra hops for an intoxicating floral aroma.'
    },

    // 🇹🇭 THAILAND CRAFT BEERS
    {
      id: 'asia-thailand-chalawan',
      beerName: 'Chalawan Pale Ale',
      breweryName: 'FullMoon Brewworks',
      city: 'Phuket',
      region: 'Southern Thailand',
      lat: 7.8804,
      lon: 98.3923,
      style: 'Thai Pale Ale',
      abv: '4.7%',
      glassType: 'Tulip Glass',
      packageType: 'bottle',
      imageUrl: 'assets/chalawan.jpg',
      liquidColor: '#fbbf24',
      description: 'Brewed on Patong Beach in Phuket, Thailand. Named after a legendary Thai crocodile king, featuring lychee, citrus, and bold tropical fruit flavors.'
    },

    // 🇮🇳 INDIA CRAFT BEERS
    {
      id: 'asia-india-bira91',
      beerName: 'Bira 91 White Ale',
      breweryName: 'Bira 91 (B9 Beverages)',
      city: 'Bengaluru',
      region: 'Karnataka, India',
      lat: 12.9716,
      lon: 77.5946,
      style: 'Wheat Ale',
      abv: '4.9%',
      glassType: 'Chalice',
      packageType: 'bottle',
      imageUrl: 'assets/duvel.jpg',
      liquidColor: '#fef08a',
      description: 'Crafted in Bengaluru, India. A low-bitterness wheat beer brewed with orange peel, coriander, and Indian wheat for a refreshing citrus finish.'
    },

    // 🇦🇺 AUSTRALIA & NEW ZEALAND CRAFT BEERS
    {
      id: 'world-garageproject-pernicious',
      beerName: 'Pernicious Weed IPA',
      breweryName: 'Garage Project',
      city: 'Wellington',
      region: 'North Island, New Zealand',
      lat: -41.2952,
      lon: 174.7725,
      style: 'New Zealand IPA',
      abv: '8.0%',
      glassType: 'Tulip Glass',
      packageType: 'can',
      imageUrl: 'assets/hazy.jpg',
      liquidColor: '#f59e0b',
      description: 'Garage Project operates out of a converted 1970s petrol station in Wellington, NZ. Pernicious Weed is packed with Nelson Sauvin and Riwaka hops for intense passion fruit aromas.'
    },
    {
      id: 'world-coopers-pale',
      beerName: 'Coopers Original Pale Ale',
      breweryName: 'Coopers Brewery',
      city: 'Adelaide',
      region: 'South Australia, Australia',
      lat: -34.8872,
      lon: 138.5661,
      style: 'Australian Pale Ale',
      abv: '4.5%',
      glassType: 'Australian Pint',
      packageType: 'bottle',
      imageUrl: 'assets/pliny.jpg',
      liquidColor: '#f59e0b',
      description: 'Coopers is Australia\'s largest family-owned brewery, located in Adelaide. Original Pale Ale is naturally conditioned in the bottle with a signature cloudy yeast sediment.'
    },
    {
      id: 'world-balter-xpa',
      beerName: 'Balter XPA',
      breweryName: 'Balter Brewing Company',
      city: 'Currumbin',
      region: 'Queensland, Australia',
      lat: -28.1345,
      lon: 153.4795,
      style: 'Extra Pale Ale',
      abv: '5.0%',
      glassType: 'Tulip Glass',
      packageType: 'can',
      imageUrl: 'assets/hazy.jpg',
      liquidColor: '#facc15',
      description: 'Founded by world champion pro surfers on Australia\'s Gold Coast. Balter XPA is a multi-award-winning tropical pale ale bursting with floral, citrus, and passion fruit hop aromas.'
    },
    {
      id: 'world-wals-petroleum',
      beerName: 'Wäls Petroleum Stout',
      breweryName: 'Cervejaria Wäls',
      city: 'Belo Horizonte',
      region: 'Minas Gerais, Brazil',
      lat: -19.8647,
      lon: -43.9621,
      style: 'Imperial Oatmeal Stout',
      abv: '12.0%',
      glassType: 'Snifter',
      packageType: 'bottle',
      imageUrl: 'assets/stout.jpg',
      liquidColor: '#18120c',
      description: 'Cervejaria Wäls is a world-renowned craft brewery in Belo Horizonte, Brazil. Petroleum is a viscous 12% ABV Imperial Stout infused with Belgian cocoa nibs and roasted coffee.'
    }
  ];

  // ==========================================================================
  // Global Game State & Session Duplicate Prevention Tracker
  // ==========================================================================
  const state = {
    map: null,
    selectedRegion: 'NA',
    currentRoundIndex: 0,
    totalScore: 0,
    roundsData: [],
    currentBeer: null,
    
    playedBeerIds: new Set(),
    
    attemptIndex: 1,
    currentPinLatLng: null,
    activeTryMarker: null,
    tryMarkers: [],
    attemptsData: [],
    actualMarker: null,
    connectorLines: [],
    audioCtx: null
  };

  // ==========================================================================
  // DOM Elements
  // ==========================================================================
  const elements = {
    regionScreen: document.getElementById('region-screen'),
    gameHud: document.getElementById('game-hud'),
    roundNum: document.getElementById('round-num'),
    totalScoreDisplay: document.getElementById('total-score-display'),
    targetBeerStyle: document.getElementById('target-beer-style'),
    targetBeerName: document.getElementById('target-beer-name'),
    
    tryPill1: document.getElementById('try-pill-1'),
    tryPill2: document.getElementById('try-pill-2'),
    tryPill3: document.getElementById('try-pill-3'),
    attemptHistory: document.getElementById('attempt-history'),
    
    guessPromptText: document.getElementById('guess-prompt-text'),
    btnSubmitGuess: document.getElementById('btn-submit-guess'),
    submitBtnText: document.getElementById('submit-btn-text'),
    btnChangeCountry: document.getElementById('btn-change-country'),
    
    mapToast: document.getElementById('map-toast'),
    toastMessage: document.getElementById('toast-message'),
    
    revealModal: document.getElementById('reveal-modal'),
    beerVisualContainer: document.getElementById('beer-visual-container'),
    revealBeerAbv: document.getElementById('reveal-beer-abv'),
    revealBeerGlassType: document.getElementById('reveal-beer-glass-type'),
    roundPointsEarned: document.getElementById('round-points-earned'),
    roundDistanceText: document.getElementById('round-distance-text'),
    revealBeerName: document.getElementById('reveal-beer-name'),
    revealBreweryName: document.getElementById('reveal-brewery-name'),
    revealLocation: document.getElementById('reveal-location'),
    revealDescriptionText: document.getElementById('reveal-description-text'),
    btnNextRound: document.getElementById('btn-next-round'),
    
    summaryModal: document.getElementById('summary-modal'),
    summaryMedalImg: document.getElementById('summary-medal-img'),
    summaryRankTitle: document.getElementById('summary-rank-title'),
    summarySubtitle: document.getElementById('summary-subtitle'),
    summaryFinalScore: document.getElementById('summary-final-score'),
    summaryRoundList: document.getElementById('summary-round-list'),
    btnPlayAgain: document.getElementById('btn-play-again'),
    btnShareScore: document.getElementById('btn-share-score')
  };

  // ==========================================================================
  // Web Audio Synthesizer
  // ==========================================================================
  function getAudioContext() {
    if (!state.audioCtx) {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      if (AudioCtxClass) state.audioCtx = new AudioCtxClass();
    }
    if (state.audioCtx && state.audioCtx.state === 'suspended') {
      state.audioCtx.resume();
    }
    return state.audioCtx;
  }

  function playSound(type) {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'pin') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(550, now);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        osc.start(now);
        osc.stop(now + 0.15);
      } else if (type === 'trySubmit') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.setValueAtTime(660, now + 0.1);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      } else if (type === 'bullseye') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.1);
        osc.frequency.setValueAtTime(783.99, now + 0.2);
        osc.frequency.setValueAtTime(1046.50, now + 0.3);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        osc.start(now);
        osc.stop(now + 0.5);
      }
    } catch (e) {
      console.warn('Audio playback error:', e);
    }
  }

  // ==========================================================================
  // Haversine Distance & Tighter Scoring Engine
  // ==========================================================================
  function toRad(degrees) {
    return degrees * (Math.PI / 180);
  }

  function calculateDistanceMiles(lat1, lon1, lat2, lon2) {
    const R = 3958.8;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  function calculateScore(bestDistanceMiles, attemptsData) {
    let points = 0;

    if (bestDistanceMiles <= 5) points = 5000;
    else if (bestDistanceMiles <= 25) points = 4400;
    else if (bestDistanceMiles <= 50) points = 3600;
    else if (bestDistanceMiles <= 100) points = 2500;
    else if (bestDistanceMiles <= 250) points = 1200;
    else if (bestDistanceMiles <= 500) points = 400;
    else points = 0;

    if (attemptsData.length > 0 && attemptsData[0].distanceMiles <= 50) {
      points += 250;
    }

    return Math.min(5000, points);
  }

  // ==========================================================================
  // Beer Showcase Renderer: Real Photographic Image OR Dynamic SVG Pair
  // ==========================================================================
  function renderBeerVisual(beer) {
    if (beer.imageUrl) {
      return `
        <div class="photo-showcase-wrapper">
          <img src="${beer.imageUrl}" alt="${beer.beerName} Bottle/Can & Glass" class="beer-showcase-img" onError="this.style.display='none';">
        </div>
      `;
    }

    const color = beer.liquidColor || '#f59e0b';
    const isCan = beer.packageType === 'can';
    const isDark = color === '#1e1b18' || color === '#18120c' || color === '#451a03';
    const foamColor = isDark ? '#d97706' : '#ffffff';

    let packageSVG = '';
    if (isCan) {
      packageSVG = `
        <g class="beer-can">
          <rect x="25" y="45" width="45" height="110" rx="8" fill="url(#canGradient)" stroke="#94a3b8" stroke-width="2"/>
          <rect x="30" y="40" width="35" height="5" rx="2" fill="#cbd5e1"/>
          <rect x="26" y="60" width="43" height="75" fill="${color}" opacity="0.85"/>
          <text x="47" y="102" font-size="9" font-weight="bold" fill="#fff" text-anchor="middle" font-family="sans-serif">CRAFT CAN</text>
        </g>
      `;
    } else {
      packageSVG = `
        <g class="beer-bottle">
          <path d="M40,25 L55,25 L55,55 L65,75 L65,155 L30,155 L30,75 L40,55 Z" fill="#451a03" stroke="#f59e0b" stroke-width="1.5" opacity="0.95"/>
          <rect x="38" y="20" width="19" height="7" rx="2" fill="#d97706"/>
          <rect x="32" y="85" width="31" height="55" rx="3" fill="${color}" opacity="0.9"/>
          <text x="47.5" y="116" font-size="9" font-weight="bold" fill="#fff" text-anchor="middle" font-family="sans-serif">BOTTLE</text>
        </g>
      `;
    }

    let glassSVG = `
      <g class="beer-glass">
        <path d="M110,40 L150,40 L142,150 L118,150 Z" fill="${color}" opacity="0.9"/>
        <path d="M108,35 L152,35 L144,155 L116,155 Z" fill="none" stroke="#e2e8f0" stroke-width="2" opacity="0.6"/>
        <ellipse cx="130" cy="155" rx="16" ry="4" fill="#cbd5e1"/>
        <path d="M107,38 Q120,25 130,35 Q140,25 153,38 Z" fill="${foamColor}"/>
        <circle cx="125" cy="110" r="1.5" fill="#fff" opacity="0.6"/>
        <circle cx="135" cy="85" r="2" fill="#fff" opacity="0.7"/>
        <circle cx="120" cy="65" r="1.5" fill="#fff" opacity="0.6"/>
      </g>
    `;

    return `
      <svg class="svg-beer-pair" viewBox="0 0 180 170" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="canGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#64748b"/>
            <stop offset="50%" stop-color="#334155"/>
            <stop offset="100%" stop-color="#1e293b"/>
          </linearGradient>
        </defs>
        ${packageSVG}
        ${glassSVG}
      </svg>
    `;
  }

  // ==========================================================================
  // Initialization & Leaflet Setup
  // ==========================================================================
  function initApp() {
    initMap();
    bindEvents();
  }

  function initMap() {
    state.map = L.map('map', {
      center: [45.0, -95.0],
      zoom: 4,
      zoomControl: false
    });

    L.control.zoom({ position: 'bottomright' }).addTo(state.map);

    // CartoDB Voyager Tile Layer (Inverted by CSS into Obsidian & Multi-Shaded Gold Theme)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(state.map);

    state.map.on('click', (e) => {
      if (!state.currentBeer || elements.revealModal.classList.contains('hidden') === false) return;
      onMapClick(e.latlng);
    });
  }

  function bindEvents() {
    document.querySelectorAll('.region-card').forEach(card => {
      card.addEventListener('click', () => {
        const region = card.getAttribute('data-region');
        startNewGame(region);
      });
    });

    elements.btnSubmitGuess.addEventListener('click', submitAttempt);
    elements.btnChangeCountry.addEventListener('click', resetToRegionSelection);
    elements.btnNextRound.addEventListener('click', advanceToNextRound);

    elements.btnPlayAgain.addEventListener('click', () => {
      elements.summaryModal.classList.add('hidden');
      startNewGame(state.selectedRegion);
    });

    elements.btnShareScore.addEventListener('click', shareFinalScore);
  }

  // ==========================================================================
  // Game Setup & Session No-Duplicate Pool Selector
  // ==========================================================================
  function startNewGame(region) {
    state.selectedRegion = region;
    state.currentRoundIndex = 0;
    state.totalScore = 0;

    let availablePool = BEER_DATABASE[region].filter(b => !state.playedBeerIds.has(b.id));

    if (availablePool.length < 5) {
      state.playedBeerIds.clear();
      availablePool = [...BEER_DATABASE[region]];
    }

    shuffleArray(availablePool);
    state.roundsData = availablePool.slice(0, 5);

    state.roundsData.forEach(b => state.playedBeerIds.add(b.id));

    if (region === 'NA') {
      state.map.setView([42.0, -96.0], 4);
    } else if (region === 'EU') {
      state.map.setView([51.5, 10.0], 4);
    } else {
      state.map.setView([20.0, 10.0], 2);
    }

    elements.regionScreen.classList.add('hidden');
    elements.gameHud.classList.remove('hidden');
    elements.totalScoreDisplay.textContent = '0';

    setupRound(0);
  }

  function setupRound(roundIndex) {
    state.currentRoundIndex = roundIndex;
    state.currentBeer = state.roundsData[roundIndex];
    state.attemptIndex = 1;
    state.attemptsData = [];
    state.currentPinLatLng = null;

    clearMapLayers();

    elements.roundNum.textContent = (roundIndex + 1).toString();
    elements.targetBeerName.textContent = state.currentBeer.beerName;
    elements.targetBeerStyle.textContent = state.currentBeer.style;

    elements.tryPill1.className = 'try-pill active';
    elements.tryPill2.className = 'try-pill';
    elements.tryPill3.className = 'try-pill';
    elements.attemptHistory.innerHTML = '';

    elements.btnSubmitGuess.disabled = true;
    elements.submitBtnText.textContent = 'Submit Try #1';
    elements.guessPromptText.innerHTML = `<span>📍 Click anywhere on the map to place your pin for <strong>Try #1</strong>!</span>`;

    showToast(`Round ${roundIndex + 1}: Find the brewery for "${state.currentBeer.beerName}"!`, 3500);
  }

  // ==========================================================================
  // 3-Try Pin Placement & Submission
  // ==========================================================================
  function onMapClick(latlng) {
    state.currentPinLatLng = latlng;
    playSound('pin');

    if (state.activeTryMarker) {
      state.map.removeLayer(state.activeTryMarker);
    }

    const tryClass = `marker-try-${state.attemptIndex}`;
    const pinIcon = L.divIcon({
      className: 'custom-pin-wrapper',
      html: `<div class="custom-pin ${tryClass}" title="Try #${state.attemptIndex}">#${state.attemptIndex}</div>`,
      iconSize: [34, 34],
      iconAnchor: [17, 17]
    });

    state.activeTryMarker = L.marker(latlng, { icon: pinIcon }).addTo(state.map);

    elements.btnSubmitGuess.disabled = false;
    elements.guessPromptText.innerHTML = `<span style="color: #10b981; font-weight: 700;">✅ Pin Placed for Try #${state.attemptIndex}! Click Submit below.</span>`;
  }

  function submitAttempt() {
    if (!state.currentPinLatLng || !state.currentBeer) return;

    const targetLat = state.currentBeer.lat;
    const targetLon = state.currentBeer.lon;

    const distanceMiles = calculateDistanceMiles(
      state.currentPinLatLng.lat,
      state.currentPinLatLng.lng,
      targetLat,
      targetLon
    );

    const attemptRecord = {
      tryNum: state.attemptIndex,
      latlng: state.currentPinLatLng,
      distanceMiles: distanceMiles
    };
    state.attemptsData.push(attemptRecord);
    state.tryMarkers.push(state.activeTryMarker);
    state.activeTryMarker = null;

    const historyItem = document.createElement('div');
    historyItem.className = 'history-item';
    historyItem.innerHTML = `
      <span class="history-num">Attempt #${state.attemptIndex}</span>
      <span class="history-dist">${distanceMiles.toFixed(1)} miles away</span>
    `;
    elements.attemptHistory.appendChild(historyItem);

    const isBullseye = distanceMiles <= 5;
    const isLastTry = state.attemptIndex >= 3;

    if (isBullseye || isLastTry) {
      finishRound(isBullseye);
    } else {
      playSound('trySubmit');
      
      if (state.attemptIndex === 1) {
        elements.tryPill1.className = 'try-pill done';
        elements.tryPill2.className = 'try-pill active';
      } else if (state.attemptIndex === 2) {
        elements.tryPill2.className = 'try-pill done';
        elements.tryPill3.className = 'try-pill active';
      }

      state.attemptIndex++;
      state.currentPinLatLng = null;
      elements.btnSubmitGuess.disabled = true;
      elements.submitBtnText.textContent = `Submit Try #${state.attemptIndex}`;
      elements.guessPromptText.innerHTML = `<span>📍 Click map to place your pin for <strong>Try #${state.attemptIndex}</strong>!</span>`;

      showToast(`Try #${state.attemptIndex - 1}: ${distanceMiles.toFixed(1)} miles away! Place Try #${state.attemptIndex} pin.`, 3000);
    }
  }

  function finishRound(isBullseye) {
    let bestDistance = Math.min(...state.attemptsData.map(a => a.distanceMiles));
    const roundPoints = calculateScore(bestDistance, state.attemptsData);

    state.totalScore += roundPoints;
    elements.totalScoreDisplay.textContent = state.totalScore.toLocaleString();

    state.currentBeer.userBestDistance = bestDistance;
    state.currentBeer.userPoints = roundPoints;

    const actualIcon = L.divIcon({
      className: 'custom-pin-wrapper',
      html: `<div class="custom-pin marker-actual" title="${state.currentBeer.breweryName}">🍺</div>`,
      iconSize: [44, 44],
      iconAnchor: [22, 22]
    });

    state.actualMarker = L.marker([state.currentBeer.lat, state.currentBeer.lon], { icon: actualIcon }).addTo(state.map);

    state.attemptsData.forEach(att => {
      const line = L.polyline([
        [att.latlng.lat, att.latlng.lng],
        [state.currentBeer.lat, state.currentBeer.lon]
      ], {
        color: '#d4af37',
        weight: 3,
        dashArray: '6, 6',
        opacity: 0.95
      }).addTo(state.map);
      state.connectorLines.push(line);
    });

    const allPoints = state.attemptsData.map(a => a.latlng);
    allPoints.push([state.currentBeer.lat, state.currentBeer.lon]);
    state.map.fitBounds(L.latLngBounds(allPoints), { padding: [80, 80], duration: 1.2 });

    if (isBullseye) {
      playSound('bullseye');
      if (window.confetti) confetti({ particleCount: 70, spread: 80, origin: { y: 0.6 } });
    } else {
      playSound('trySubmit');
    }

    setTimeout(() => {
      showRevealModal(bestDistance, roundPoints);
    }, 1200);
  }

  // ==========================================================================
  // Reveal Modal & Visual Showcase
  // ==========================================================================
  function showRevealModal(bestDistance, roundPoints) {
    const beer = state.currentBeer;

    elements.roundPointsEarned.textContent = `+${roundPoints.toLocaleString()} Pts`;
    elements.roundDistanceText.textContent = `Best Try: ${bestDistance.toFixed(1)} miles off`;

    elements.beerVisualContainer.innerHTML = renderBeerVisual(beer);
    elements.revealBeerAbv.textContent = `⚡ ${beer.abv} ABV`;
    elements.revealBeerGlassType.textContent = `🍺 Glass: ${beer.glassType}`;

    elements.revealBeerName.textContent = beer.beerName;
    elements.revealBreweryName.textContent = beer.breweryName;
    elements.revealLocation.textContent = `📍 ${beer.city}, ${beer.region}`;
    elements.revealDescriptionText.textContent = beer.description;

    elements.revealModal.classList.remove('hidden');
  }

  function advanceToNextRound() {
    elements.revealModal.classList.add('hidden');

    if (state.currentRoundIndex + 1 < 5) {
      setupRound(state.currentRoundIndex + 1);
    } else {
      triggerEndGameSummary();
    }
  }

  function triggerEndGameSummary() {
    clearMapLayers();

    const score = state.totalScore;
    let medalImg = 'assets/medal_bronze.jpg';
    let rankTitle = 'Bronze Craft Apprentice';

    if (score >= 18000) {
      medalImg = 'assets/medal_gold.jpg';
      rankTitle = 'Gold Master Brewmaster';
    } else if (score >= 12000) {
      medalImg = 'assets/medal_silver.jpg';
      rankTitle = 'Silver Ale Explorer';
    } else {
      medalImg = 'assets/medal_bronze.jpg';
      rankTitle = 'Bronze Craft Apprentice';
    }

    if (elements.summaryMedalImg) {
      elements.summaryMedalImg.src = medalImg;
    }
    elements.summaryRankTitle.textContent = rankTitle;
    elements.summarySubtitle.textContent = `Completed 5 Rounds in ${getRegionName(state.selectedRegion)}`;
    elements.summaryFinalScore.textContent = score.toLocaleString();

    elements.summaryRoundList.innerHTML = '';
    state.roundsData.forEach((b, index) => {
      const li = document.createElement('li');
      li.className = 'summary-round-item';
      li.innerHTML = `
        <span class="round-item-title">R${index + 1}: ${b.beerName} (${b.city})</span>
        <span class="round-item-score">+${(b.userPoints || 0).toLocaleString()} pts (${(b.userBestDistance || 0).toFixed(0)} mi)</span>
      `;
      elements.summaryRoundList.appendChild(li);
    });

    if (score >= 16000 && window.confetti) {
      confetti({ particleCount: 110, spread: 90, origin: { y: 0.5 } });
    }

    elements.summaryModal.classList.remove('hidden');
  }

  function getRegionName(code) {
    if (code === 'NA') return 'North America';
    if (code === 'EU') return 'Europe';
    return 'The World';
  }

  function resetToRegionSelection() {
    clearMapLayers();
    elements.gameHud.classList.add('hidden');
    elements.regionScreen.classList.remove('hidden');
    elements.revealModal.classList.add('hidden');
    elements.summaryModal.classList.add('hidden');
  }

  function clearMapLayers() {
    if (state.activeTryMarker) {
      state.map.removeLayer(state.activeTryMarker);
      state.activeTryMarker = null;
    }
    state.tryMarkers.forEach(m => state.map.removeLayer(m));
    state.tryMarkers = [];

    if (state.actualMarker) {
      state.map.removeLayer(state.actualMarker);
      state.actualMarker = null;
    }

    state.connectorLines.forEach(l => state.map.removeLayer(l));
    state.connectorLines = [];
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function shareFinalScore() {
    const text = `🍺 BrewGeoguesser (${getRegionName(state.selectedRegion)}): I scored ${state.totalScore.toLocaleString()} / 25,000 pts with 3-try triangulation! Can you beat my score?`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        showToast('Result copied to clipboard!', 3000);
      });
    } else {
      showToast(text, 5000);
    }
  }

  function showToast(message, duration = 3000) {
    elements.toastMessage.textContent = message;
    elements.mapToast.classList.remove('hidden');

    setTimeout(() => {
      elements.mapToast.classList.add('hidden');
    }, duration);
  }

  document.addEventListener('DOMContentLoaded', initApp);

})();
