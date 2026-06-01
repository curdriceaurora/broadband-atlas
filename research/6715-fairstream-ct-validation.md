# Portal Accuracy Validation — 6715 Fairstream Ct, Suwanee GA 30024

**Address context:** South Forsyth County (Sharon Springs area, Suwanee mailing address), zip **30024**.
**Method:** Web-researched baseline (June 2026) — published national plan/pricing + zip-level coverage estimates (primarily BroadbandNow for 30024). **Not** address-confirmed via the gated provider eligibility checkers.
**Confidence:** Pricing & speed specs = **high**. Address-exact availability = **medium** (zip-level coverage %, not parcel-level).

---

## Per-provider: Portal claim vs. researched reality

| Provider | Portal says (availability) | Portal price | Portal speed | Researched (30024) availability | Researched price | Researched speed | Verdict |
|---|---|---|---|---|---|---|---|
| **AT&T Fiber** | "≈71% of Cumming" | $55–$245 | 5↓/5↑ Gbps sym | **94.7% of Suwanee** (BBN) | from $34 (bundle/autopay) → ~$245 (5-gig) | 300M–5G sym | Specs ✓✓; **availability framed for Cumming, understates this South-Forsyth address (~95%)** |
| **T-Mobile Fiber (Lumos)** | "Aggressive build out in South Forsyth" | $55–$80 | 2↓/2↑ Gbps sym | Lumos building in Forsyth; **not confirmed live at 30024** | $55–$80 (500M/1G/2G) | 500M–2G sym | Availability framing ✓ (in-progress, not yet broad); price/speed plausible; **needs address check** |
| **Xfinity** | "≈99% countywide" | $40–$120 | 2↓ Gbps / 200↑ | **~36.7% in this zip** (BBN) | from $40 | up to 2 Gbps | Specs ✓; **biggest miss — countywide 99% badly overstates South Forsyth (~37%)** |
| **T-Mobile 5G Home** | "≈85% mid-band" | $35–$70 | 133–498 Mbps | **71.2%** (BBN) | $35 (w/ voice line) / $50 std | 87–498 Mbps | Price/speed ✓✓; availability modestly overstated (85 vs 71) |
| **Verizon 5G Home** | "≈60% mid-band" | $35–$75 | 100–300 Mbps | **42.9%** (BBN) | $35 / $45 / $60 tiers | 300 Mbps–1 Gbps | Price ✓; availability overstated (60 vs 43); **portal cap (300) conservative vs up-to-1Gbps** |
| **AT&T Internet Air** | "Selective tower coverage" | $47–$60 | 90–300 Mbps | available (AT&T 5G) | $47 (w/ wireless) / $60 std | 90–300↓ / 8–30↑ | **Exact match on price & speed** ✓✓✓ |
| **Starlink** | "Capacity-gated by cell" | $50–$120 + hardware | 300↓/30↑ | **100%** | **$40 promo (Apr 2026) / $55 std → $130 MAX; $0-hardware rental now** | up to 400 Mbps | Price ballpark; **"+ hardware" note now stale (2026: $0 hardware rental + $15/mo price cut)** |
| **Viasat** | "Available, high latency" | $69.99 promo / $99.99 std | 150↓/3↑, ~600 ms | **Not listed for 30024** (BBN) — satellite generally available | $69.99→$99.99 (Unleashed) | up to 150 Mbps | **Pricing exact** ✓✓; speed ✓; availability uncertain (BBN omits) |
| **HughesNet** | "Available, high latency" | $50–$100 | 100↓/5↑, ~600 ms (Fusion ~100 ms) | **100%** | **$50 (Select) – $170 (Fusion 200)** | up to 100 Mbps; Fusion lower-latency | Speed/latency ✓; **portal ceiling ($100) undersells top tier ($170)**; upload 5 vs 3 Mbps minor |

---

## Closeness scorecard (judgment-based, 0–100 per axis)

| Provider | Availability | Speed | Price | Avg |
|---|---|---|---|---|
| AT&T Internet Air | 90 | 100 | 100 | **97** |
| T-Mobile 5G Home | 80 | 100 | 95 | **92** |
| HughesNet | 100 | 95 | 80 | **92** |
| Viasat | 70 | 100 | 100 | **90** |
| T-Mobile Fiber | 85* | 90 | 90 | **88*** |
| Starlink | 100 | 85 | 75 | **87** |
| AT&T Fiber | 60 | 100 | 85 | **82** |
| Verizon 5G Home | 70 | 80 | 95 | **82** |
| Xfinity | 35 | 100 | 95 | **77** |

\* T-Mobile Fiber availability unconfirmed at this address (build-out in progress).

**Overall portal alignment ≈ 87%.**

---

## Takeaways for the portal as a source of truth

1. **Pricing & speed specs are strong** — national plan data is well-maintained and largely matches reality (AT&T Internet Air and Viasat are near-exact).
2. **Availability is the systematic weak axis for this South-Forsyth address:**
   - **Xfinity** is the worst offender — "≈99% countywide" vastly overstates South Forsyth's newer subdivisions (~37% here).
   - **AT&T Fiber** is framed against *Cumming* (71%) but this address sits in a ~95%-covered Suwanee/South-Forsyth pocket — *understated*.
   - **FWA (T-Mobile/Verizon 5G)** coverage % run ~10–17 points optimistic vs zip-level estimates.
   - **Fix idea:** replace single county/Cumming figures with **South-Forsyth-specific** availability, or label them clearly as countywide aggregates.
3. **A few stale facts to refresh:**
   - **Starlink:** drop "+ hardware" — 2026 introduced $0-hardware rental and a ~$15/mo price cut.
   - **HughesNet:** raise the ceiling to reflect Fusion 200 (~$170), and note upload is 3 Mbps.
   - **Verizon 5G:** speed cap of 300 Mbps is conservative; some plans now advertise up to 1 Gbps.

---

## Sources
- [AT&T Fiber — Suwanee, GA](https://www.att.com/local/fiber/georgia/suwanee) · [AT&T Internet Air plans](https://www.att.com/internet/internet-air/)
- [T-Mobile Fiber availability](https://www.t-mobile.com/home-internet/fiber/availability) · [Lumos to expand to Georgia (DCD)](https://www.datacenterdynamics.com/en/news/lumos-to-expand-fiber-network-to-georgia/)
- [Xfinity — Suwanee, GA](https://www.xfinity.com/locations/georgia/suwanee)
- [T-Mobile 5G Home plans](https://www.t-mobile.com/home-internet/plans) · [BroadbandNow T-Mobile deals](https://broadbandnow.com/t-mobile-home-internet-deals)
- [Verizon 5G Home](https://www.verizon.com/home/internet/5g/)
- [Starlink residential](https://starlink.com/residential) · [Starlink 2026 price changes](https://www.satelliteinternet.com/resources/starlink-2026-price-increase/)
- [Viasat plans](https://www.viasat.com/satellite-internet/plans/)
- [HughesNet plans & pricing 2026](https://www.internetproviders.ai/guides/hughesnet-plans-pricing/)
- [BroadbandNow — Suwanee, GA 30024 provider list & coverage](https://broadbandnow.com/Georgia/Suwanee)
</content>
</invoke>
