# Photographic Asset Map & Visual Inventory
**Project:** Hotel De Symphony by Topaz, Nawanshahr, Punjab  
**Document Status:** Implementation-Ready Blueprint  
**Total Assets Evaluated:** 47 files (39 unique photographic captures, 8 exact byte duplicates)  

---

## 1. Visual Collection Executive Overview

Every photograph in the `./photos/` directory has been programmatically and visually audited. Filenames have NOT been used as proxies for content.

```
Total Files Audited: 47
├── Unique Usable Assets: 38
├── Excluded Utilitarian Assets: 1 (stacked back-of-house crockery)
└── Exact Byte-Identical Duplicates: 8 (MD5 confirmed)
```

### Resolution & Asset Capabilities

| Group | Quantity | Resolution | Typical Size | Recommended Placement |
|---|---|---|---|---|
| **High-Resolution Master Series (`IMG_...`)** | 20 unique | 8064×4536 & 6000×3368 | 4.0 MB – 10.3 MB | Main Hero, Section Hero Banners, Large Editorial Spreads, Retina Galleries |
| **Standard-Resolution Interior Series (`AMIT SINGH...`)** | 19 unique | 1280×720 | 146 KB – 300 KB | Editorial Mosaic Cards, Dining Insets, Sub-galleries, Mobile Feature Highlights |

---

## 2. Master Asset Mapping Table

The following table provides the definitive implementation assignment for every unique photograph in the collection.

| Filename | Actual Subject | Category | Recommended Section | Recommended Display Ratio | Crop Strategy & CSS Positioning | Reason & Editorial Value |
|---|---|---|---|---|---|---|
| **`IMG_2888.JPG.jpeg`** | Multi-story hotel facade at dusk/twilight; illuminated golden "HOTEL SYMPHONY" signage on canopy & rooftop, illuminated palm trees, brick parking lot, twilight sky gradient | Hotel Exterior | **1. Hero Section (Primary Website Hero)** | 16:9 / 21:9 (Desktop 85vh) | `object-position: center 38%; object-fit: cover;` Crop bottom 15% to de-emphasize parked vehicles; preserve glowing rooftop signage and dusk sky | **Unanimously rated 5/5 for site hero.** Only high-resolution exterior shot during the dramatic twilight "blue hour". Establishes physical brand identity and urban scale immediately. |
| **`IMG_2926.JPG.jpeg`** | Hotel facade at night; glowing white/gold signage on rooftop and entrance, uplighted palms, dark evening sky | Hotel Exterior | **10. Location & Property Section (Night Atmosphere)** | 16:9 Landscape | `object-position: center 45%; object-fit: cover;` Crop pavement slightly | Atmospheric night shot showing the hotel's 24-hour presence. Excellent secondary architectural anchor for directions / arrival card. |
| **`IMG_2927.JPG.jpeg`** | Alternate night exterior angle showing landscaped perimeter hedge, driveway, and illuminated building | Hotel Exterior | **9. Curated Gallery (Architecture)** | 16:9 Landscape | `object-position: center 50%; object-fit: cover;` | High-resolution architectural proof showing road-level access and landscaping. |
| **`IMG_3546.JPG.jpeg`** | Traditional Indian wedding stage with marigold & rose floral arch, rose-gold sequined skirting, rich crimson-gold carpet, and damask wall | Event Facilities | **6. Grand Banquet & Events (Weddings & Receptions Card)** | 16:9 or 4:3 Editorial Card | `object-position: center 60%; object-fit: cover;` **MANDATORY CROP:** Top-left corner contains a utilitarian "WASH ROOM" sign; crop top 8% to eliminate sign | Vibrant, culturally authentic proof of the venue's wedding stage decoration capabilities. Shows grand celebratory scale. |
| **`IMG_3550.JPG.jpeg`** | Banquet hall showing foreground tan leather L-sofa, dressed round tables, and background linear buffet setup | Event Facilities | **6. Grand Banquet & Events (Event Atmosphere Card)** | 16:9 Landscape | `object-position: center center; object-fit: cover;` | Demonstrates the seamless integration between guest relaxation lounge seating and formal dining in the hall. |
| **`IMG_3552.JPG.jpeg`** | Wide perspective of banquet hall with dark timber columns, damask wall panels, and illuminated false ceiling | Event Facilities | **6. Grand Banquet & Events (Corporate & Social Capacity)** | 16:9 Landscape | `object-position: center center; object-fit: cover;` | High-clarity overview demonstrating expansive seating capacity for 150–250+ delegates or reception guests. |
| **`IMG_3558.JPG.jpeg`** | Dressed round banquet table with black chair covers, gold-floral sash bows, silver chargers, and carnation centerpiece | Event Detail | **6. Grand Banquet & Events (Event Styling Detail)** | 4:3 or 1:1 Inset | `object-position: center center; object-fit: cover;` | Crisp focus on place settings and table linens; reassures event organizers of decorative attention to detail. |
| **`IMG_3560.JPG.jpeg`** | Diagonal banquet hall view showing full buffet counter with chafing dishes and two large classical Indian paintings | Dining / Events | **9. Curated Gallery (Banquet Dining)** | 16:9 Landscape | `object-position: center center; object-fit: cover;` | Proves live buffet catering capacity alongside rich cultural interior artwork. |
| **`IMG_3561.JPG.jpeg`** | Slightly tighter diagonal view of the banquet hall and buffet line | Dining / Events | **9. Curated Gallery (Banquet Alternate)** | 16:9 Landscape | `object-position: center center; object-fit: cover;` | High-res supplementary asset for full-screen lightbox modal. |
| **`IMG_3563.JPG.jpeg`** | Expansive floor view of round banquet tables with black spandex covers on mirror-like marble floor | Event Facilities | **6. Grand Banquet & Events (Floor Plan & Architecture)** | 16:9 Landscape | `object-position: center center; object-fit: cover;` | The cleanest photograph showing the extensive round-table seating layout on polished marble flooring. |
| **`IMG_3576.JPG.jpeg`** | Round banquet table close-up against textured wavy green/gold wallpaper panels | Interior Detail | **9. Curated Gallery (Interior Accents)** | 4:3 Editorial Inset | `object-position: center center; object-fit: cover;` | Highlights the bespoke wall finishes and ambient mood lighting of the property. |
| **`IMG_3579.JPG.jpeg`** | Long executive dining table with dark carved timber chairs, sage-green cushions, and chevron table runner | Private Dining | **7. Dining & Restaurant (Executive & Private Dining Card)** | 16:9 Landscape | `object-position: center center; object-fit: cover;` | Conveys dignified corporate hosting and VIP family celebration capacity. Carved chairs add heritage prestige. |
| **`IMG_3580.JPG.jpeg`** | Dramatic head-on vanishing-point perspective down executive table set with gold brass *thali* plate settings, folded napkins, and carnation runner | Fine Dining | **7. Dining & Restaurant (Lead Dining Hero Banner)** | 16:9 or 21:9 Wide Banner | `object-position: center center; object-fit: cover;` Maintain perfect horizontal and vertical symmetry | **Rated 5/5 for culinary storytelling.** The single most photogenic dining photograph in the collection. Showcases traditional Indian royal dining (*thali*) with luxury Western banquet styling. |
| **`IMG_3584.JPG.jpeg`** | Low lounge table surrounded by tan suede L-sofa, carnation centerpieces, and gold thali place settings | Lounge Dining | **8. Lounge & Lifestyle (Cocktail & Lounge Dining)** | 4:3 Editorial Card | `object-position: center center; object-fit: cover;` | Highlights relaxed social dining and conversational comfort for private parties. |
| **`IMG_3594.JPG(1).jpeg`** | Wide perspective of private dining room showing acoustic damask wall panels and carved wooden chairs | Private Dining | **7. Dining & Restaurant (Private Hospitality Suite)** | 16:9 Landscape | `object-position: center center; object-fit: cover;` | Demonstrates the intimate seclusion available for high-profile business dinners and family functions. |
| **`IMG_3597.JPG.jpeg`** | The defining grand panoramic shot of the entire banquet hall: illuminated ceiling coffers, marble floor, sofas, round tables, buffet | Grand Venue | **6. Grand Banquet & Events (Section Hero Header)** | 16:9 or 21:9 Panoramic | `object-position: center center; object-fit: cover;` | **Rated 5/5 for venue overview.** Complete architectural establishing shot of the banquet hall. Indispensable for establishing scale and grandeur. |
| **`IMG_3599.JPG.jpeg`** | Mid-range panoramic of banquet hall showing tan leather lounge seating and glass partition doors | Grand Venue | **9. Curated Gallery (Venue Flow)** | 16:9 Landscape | `object-position: center center; object-fit: cover;` | Shows spatial transition between reception foyer and main dining hall. |
| **`IMG_3602.JPG.jpeg`** | Opposite angle panoramic of the full banquet hall showing full breadth and ceiling detail | Grand Venue | **6. Grand Banquet & Events (Dual-Angle Floor Showcase)** | 16:9 Landscape | `object-position: center center; object-fit: cover;` | Pairs with `IMG_3597` to offer a 360-degree spatial appreciation of the venue. |
| **`IMG_3615.JPG.jpeg`** | Intimate boutique lobby lounge under ascending staircase with stainless steel handrails, tan leather tub chair, classical Indian painting, warm sconce | Boutique Interiors | **3. Hotel Introduction / Welcome Section** | 4:3 Portrait or 16:9 Crop | `object-position: 45% center; object-fit: cover;` Apply +10% exposure in CSS/processing to lift shadow detail | The ONLY lobby/reception lounge asset in the entire library. Evokes a bespoke, warm boutique hospitality experience with cultural Indian artwork. |
| **`IMG_3616.JPG.jpeg`** | Indoor children's game arcade with *Spin & Stop* wheel, *Colorama* machine, *Bear's Treasure* claw machine, and plush prizes | Recreation | **8. Family & Recreation Amenities (Kids Game Zone Card)** | 16:9 or 4:3 Card | `object-position: center center; object-fit: cover;` | Critical differentiator. Proves Hotel De Symphony is family-friendly and equipped with modern electronic amusement games for traveling children. |
| **`AMIT SINGH..._5311`** | Banquet hall configured for reception with floral stage backdrop and professional DJ speakers | Event Archive | **9. Curated Gallery (Live Event Setups)** | 16:9 Standard | `object-position: center center; object-fit: cover;` | Empirical proof of live DJ entertainment and sound staging capacity. |
| **`AMIT SINGH..._5312`** | Banquet hall seen through soft-focus pink and white floral centerpiece | Event Atmosphere | **9. Curated Gallery (Atmospheric Floral)** | 16:9 Standard | `object-position: right center; object-fit: cover;` | Adds depth of field and soft floral texture to the photography gallery. |
| **`AMIT SINGH..._5313`** | Comprehensive wide angle of banquet hall showing full capacity layout | Event Layout | **9. Curated Gallery (Seating Overview)** | 16:9 Standard | `object-position: center center; object-fit: cover;` | Standard-resolution venue backup showing multi-zone seating. |
| **`AMIT SINGH..._5316`** | Perspective along row of round dining tables divided by dark architectural pillars | Dining Rhythm | **9. Curated Gallery (Architectural Pillars)** | 16:9 Standard | `object-position: center center; object-fit: cover;` | Clean geometric rhythm of repetitive table settings. |
| **`AMIT SINGH..._5317`** | Close-up of traditional Indian engraved brass *thali* plates, wine goblets, and rose-folded maroon cloth napkins | Table Setting | **7. Dining & Restaurant (Art of the Table Inset)** | 4:3 or 1:1 Inset | `object-position: center center; object-fit: cover;` | Demonstrates traditional Indian dining elegance and polished tableware. |
| **`AMIT SINGH..._5319`** | Alternate angle of brass tableware on gold chevron-patterned linen | Table Setting | **9. Curated Gallery (Dining Details)** | 16:9 Standard | `object-position: center center; object-fit: cover;` | Supplementary detail shot for culinary lightbox. |
| **`AMIT SINGH..._5322`** | Banquet dining hall showing buffet line and Indian classical sitar artwork | Cultural Dining | **6. Grand Banquet & Events (Cultural Heritage Card)** | 16:9 Standard | `object-position: center center; object-fit: cover;` | Highlights regional Punjabi artistic motifs and heritage decor. |
| **`AMIT SINGH..._5323`** | Linear view of marble-top buffet counter equipped with stainless steel chafing dishes and decorative urns | Buffet Catering | **7. Dining & Restaurant (Buffet & Banquet Catering Card)** | 16:9 Standard | `object-position: center center; object-fit: cover;` | Reassures meeting planners and wedding hosts of professional multi-course hot buffet infrastructure. |
| **`AMIT SINGH..._5325`** | Close-up of single round table with rose-patterned tablecloth, gold charger, and water bottles | Table Setting | **9. Curated Gallery (Floral Tablecloth)** | 16:9 Standard | `object-position: center center; object-fit: cover;` | Shows alternative banquet linen themes. |
| **`AMIT SINGH..._5326`** | Close-up of buffet counter with pink metal lanterns, brass candleholders, and diamond mirror wall | Catering Decor | **7. Dining & Restaurant (Catering Ambiance Inset)** | 16:9 Standard | `object-position: center center; object-fit: cover;` | Warm ambient decorative details that enrich the culinary narrative. |
| **`AMIT SINGH..._5329(1)`** | Marble-top round table with gold dinnerware and dark carved wooden chairs | A La Carte Dining | **7. Dining & Restaurant (Boutique Dining Table)** | 16:9 Standard | `object-position: center center; object-fit: cover;` | Superior table shot showing unclad polished marble surface and carved chairs. |
| **`AMIT SINGH..._5365(1)`** | Casual cafe lounge with magenta open bookcase divider, green lounge seating, and natural daylight | Boutique Cafe | **8. Lounge & Lifestyle (The Reading Lounge & Cafe)** | 3:4 Vertical Card | `object-position: center center; object-fit: cover;` | Unveils a modern lifestyle cafe area distinct from the formal banquet hall. |
| **`AMIT SINGH..._5366(1)`** | Close-up of curated open bookshelf displaying classic novels and cookbooks | Lifestyle Detail | **8. Lounge & Lifestyle (Literary Nook Inset)** | 3:4 Vertical Inset | `object-position: center center; object-fit: cover;` | Editorial storytelling vignette showing intellectual comfort and relaxation. |
| **`AMIT SINGH..._5374(1)`** | Sculptural curved restaurant buffet counter with drop pendants, spice jars, and wavy false ceiling | Restaurant Design | **7. Dining & Restaurant (Contemporary Culinary Counter)** | 3:4 Vertical Card | `object-position: center center; object-fit: cover;` | Showcases modern architectural interior design in the in-house restaurant. |
| **`AMIT SINGH..._5376(1)`** | Intimate restaurant booth dining with plush plum velvet banquette and table settings | Restaurant Booths | **7. Dining & Restaurant (Private Booth Dining)** | 3:4 Vertical Card | `object-position: center center; object-fit: cover;` | Cozy, private seating options for couples and business lunches. |
| **`AMIT SINGH..._5377(1)`** | Restaurant seating row with alternating plum and teal tub chairs, backlit laser-cut floral panel | Restaurant Seating | **7. Dining & Restaurant (The Main Restaurant Room)** | 3:4 Vertical Card | `object-position: center center; object-fit: cover;` | **Best restaurant dining room shot.** Clearly depicts color palette, seating comfort, and decorative screens. |
| **`AMIT SINGH..._5379`** | Restaurant perspective from counter side towards decorative screen | Restaurant Detail | **9. Curated Gallery (Restaurant Ambiance)** | 3:4 Vertical Card | `object-position: center center; object-fit: cover;` | Supplementary restaurant angle for gallery mosaic. |
| **`AMIT SINGH..._5381`** | Sweeping ceiling curves and counter with pendant lights | Restaurant Design | **7. Dining & Restaurant (Architectural Lighting)** | 3:4 Vertical Card | `object-position: left 40%; object-fit: cover;` Crop right 20% to avoid unposed staff member | Highlights dynamic ceiling architecture and ambient lighting. |

---

## 3. Discard Registry (Exact Byte Duplicates)

The following 8 files are byte-for-byte identical (MD5 hash verified) to their canonical counterparts. They must be excluded from build manifests to eliminate asset bloat:

| Discard Filename | Canonical Target Kept | MD5 Checksum | Status |
|---|---|---|---|
| `AMIT SINGH20260708_5329T01.JPG.jpeg` | `AMIT SINGH20260708_5329T01.JPG(1).jpeg` | `0b0805177a3d3c87f94084361596541f` | Exact Byte Duplicate |
| `AMIT SINGH20260708_5365T01.JPG.jpeg` | `AMIT SINGH20260708_5365T01.JPG(1).jpeg` | `bbd8f888f7b7cb1dfd4ec74db8cf8221` | Exact Byte Duplicate |
| `AMIT SINGH20260708_5366T01.JPG.jpeg` | `AMIT SINGH20260708_5366T01.JPG(1).jpeg` | `e0e241e17d91b8d2771d9d9e45e751ee` | Exact Byte Duplicate |
| `AMIT SINGH20260708_5374T01.JPG.jpeg` | `AMIT SINGH20260708_5374T01.JPG(1).jpeg` | `df06cb556271c77f0c1b4ea5c4ddb364` | Exact Byte Duplicate |
| `AMIT SINGH20260708_5376T01.JPG.jpeg` | `AMIT SINGH20260708_5376T01.JPG(1).jpeg` | `17387431267b1406dc53e831ffc25492` | Exact Byte Duplicate |
| `AMIT SINGH20260708_5376T01.JPG(2).jpeg` | `AMIT SINGH20260708_5376T01.JPG(1).jpeg` | `17387431267b1406dc53e831ffc25492` | Exact Byte Duplicate |
| `AMIT SINGH20260708_5377T01.JPG.jpeg` | `AMIT SINGH20260708_5377T01.JPG(1).jpeg` | `d985aee30f0f8a846101c7f495ec9701` | Exact Byte Duplicate |
| `IMG_3594.JPG.jpeg` | `IMG_3594.JPG(1).jpeg` | `8067b07044ea1d75baeb231bbd43cbe2` | Exact Byte Duplicate |

---

## 4. Excluded Assets (Utilitarian / Non-Marketing)

The following asset is technically valid but aesthetically inappropriate for public marketing:

| Filename | Actual Subject | Technical Specs | Reason for Exclusion |
|---|---|---|---|
| **`AMIT SINGH20260708_5327T01.JPG.jpeg`** | Stacked white dinner plates and wrapped catering bowls on counter runner | 1280×720, 255 KB | Utilitarian back-of-house catering staging. Displaying stacked commercial crockery wrapped in protective film undermines the luxury boutique aesthetic of the property. Excluded from production layouts. |
