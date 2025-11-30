<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html"/>

  <xsl:template match="/">
    <html>
    <head>
      <title><xsl:value-of select="rss/channel/title"/></title>
     <?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html"/>

  <xsl:template match="/">
    <xsl:text disable-output-escaping="yes">&lt;!DOCTYPE html&gt;</xsl:text>
    <html>
    <head>
      <title><xsl:value-of select="rss/channel/title"/></title>
      
      <link rel="stylesheet" type="text/css" href="feed-style.css"/>
      
    </head>
    <body>
      <h1><xsl:value-of select="rss/channel/title"/></h1>
      <div class="feed-description"><xsl:value-of select="rss/channel/description"/></div>

      <xsl:apply-templates select="rss/channel/item"/>
      
    </body>
    </html>
  </xsl:template>

  <xsl:template match="item">
    <div class="item">
      <h2><a href="{link}"><xsl:value-of select="title"/></a></h2>
      <div class="item-date">Broadcast Date: <xsl:value-of select="pubDate"/></div>
      <div class="item-desc"><xsl:value-of select="description"/></div>
    </div>
  </xsl:template>

</xsl:stylesheet>
    </head>
    <body>
      <h1><xsl:value-of select="rss/channel/title"/></h1>
      <div class="feed-description"><xsl:value-of select="rss/channel/description"/></div>

      <xsl:apply-templates select="rss/channel/item"/>
      
    </body>
    </html>
  </xsl:template>

  <xsl:template match="item">
    <div class="item">
      <h2><a href="{link}"><xsl:value-of select="title"/></a></h2>
      <div class="item-date">Broadcast Date: <xsl:value-of select="pubDate"/></div>
      <div class="item-desc"><xsl:value-of select="description"/></div>
    </div>
  </xsl:template>

</xsl:stylesheet>
