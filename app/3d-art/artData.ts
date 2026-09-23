export interface ArtAsset {
  type: "image" | "video" | "youtube" | "sketchfab";
  src: string;
  lossless?: boolean;
  width?: number;
  height?: number;
  poster?: string;
  caption?: string;
}

export interface ArtWorkflow {
  title: string;
  introduction: string;
  stages: {
    title: string;
    summary: string;
    paragraphs: string[];
  }[];
  takeaway: string;
}

export interface ArtProject {
  slug: string;
  title: string;
  category: "characters" | "creatures" | "hardsurface" | "gamedev" | "sculpts" | "commercial";
  description: string;
  software: string[];
  tags: string[];
  cover: string;
  coverAspect: number;
  /** CSS object-position for the 4:3 card crop. Defaults to center. */
  coverPosition?: string;
  /** Asset src to feature after the opening paragraph, with its caption above. */
  introAsset?: string;
  /** Asset src to display above the project description. */
  leadAsset?: string;
  workflow?: ArtWorkflow;
  assets: ArtAsset[];
}

export const artProjects: ArtProject[] = [
  {
    slug: "off-road-mustang",
    title: "Off Road Mustang",
    category: "hardsurface",
    description:
      "An off-road Mustang concept developed through an AI-assisted Blender-to-Unreal workflow. I directed refinements to the vehicle's proportions, body surfaces, interior, wheels, and automotive finishes, then resolved shading and panel-seam defects while preserving the original concept's character.\n\nThe Unreal-ready asset includes four levels of detail, a 30-bone vehicle skeleton, textures, organized materials, and a Control Rig built with a custom-coded Unreal Engine plugin. A Follow Terrain checkbox lets the suspension and body conform to uneven ground as the vehicle crawls over rocks. Wheelspin can be tuned to match vehicle speed with the Wheel Spin Multiplier, with a manual wheel-spin adjustment also available. Turning follows the steering controls with an adjustable Steering Response, alongside a ride-height control.\n\nThe demo and rig breakdown show the Move and Steer controls, exposed attributes, and suspension articulation in a rocky desert environment. The gallery also explores lighting, automotive materials, and camera compositions in Unreal Engine. The concept and reference sheets at the end of the gallery are AI-generated development images.",
    software: ["Blender", "Unreal Engine", "AI-assisted workflow"],
    tags: ["automotive", "vehicle", "hard surface", "AI-assisted", "Blender", "Unreal Engine", "Control Rig", "custom plugin", "suspension", "visualization"],
    cover: "/images/artstation/off-road-mustang/01.webp",
    coverAspect: 5120 / 2960,
    introAsset: "/images/artstation/off-road-mustang/terrain-02.webp",
    leadAsset: "/videos/artstation/mustang-canyon-crawl-45s.mp4",
    workflow: {
      title: "From concept to an editable vehicle",
      introduction:
        "The central challenge was carrying the Mustang's character from an AI concept into a 3D asset that could withstand close inspection, design changes, and animation. I used AI-assisted construction in Blender while directing the proportions, part relationships, surface quality, and final appearance. These selected process notes focus on the decisions that shaped the result.",
      stages: [
        {
          title: "Establish the visual target",
          summary: "Keep the silhouette, stance, and design language consistent as the work moves into 3D.",
          paragraphs: [
            "The concept established the lifted stance, muscular bodywork, oversized tires, exposed hardware, and green-and-black finish. Generated reference views and an initial 3D reconstruction helped explore how those features related in space. I used the original concept to judge whether later interpretations were still the same vehicle.",
            "The reference images also required judgment: a convincing image can contain inconsistent forms or ambiguous construction. The wireframe-style sheet in the gallery is an AI-generated development image, not a capture of the finished model's topology.",
          ],
        },
        {
          title: "Rebuild for control in Blender",
          summary: "Turn the initial reference into surfaces and parts that can be revised deliberately.",
          paragraphs: [
            "The generated mesh provided a starting point for volume and proportion. The Blender work developed editable body surfaces, separate panels, openings, returns, and thickness. Those decisions matter when a hood needs a credible edge, a door needs a continuous gap, or a quarter panel needs to hold its curvature around an intake.",
            "AI assisted with the construction work. I directed what to preserve, what to rebuild, and how each revision should fit the larger design. Breaking the vehicle into manageable assemblies made it possible to refine one area while retaining the accepted work around it.",
          ],
        },
        {
          title: "Resolve the vehicle as an assembly",
          summary: "Give the body, cockpit, wheels, and mechanical details coherent relationships.",
          paragraphs: [
            "The cockpit developed into modeled seats, dashboard, controls, trim, and floor surfaces. Wheels and tires received their own shape and finish revisions, while brakes, suspension, and exterior hardware were treated as distinct components. Hidden details required design interpretation where the concept offered no clear answer.",
            "Fit and movement influenced the asset structure. A brake caliper needs to follow steering without spinning with the tire; a wheel that looks right in a still also needs room in an articulated pose. These relationships informed the transition from a visual model to a rigged vehicle.",
          ],
        },
        {
          title: "Use review to guide the next revision",
          summary: "Check both the geometry and how the vehicle reads under changing light.",
          paragraphs: [
            "Geometry checks and visual review answered different questions. A part could pass a structural check and still have an awkward silhouette, a harsh reflection, or an unconvincing seam. I used both kinds of feedback to decide which changes actually improved the model.",
            "Two examples were the rear-quarter intake area and the door edges. The quarter panels needed fuller haunches while retaining a continuous curved surface around the vents. Dark artifacts at the doors required a shading correction that preserved the panel shape. Reviewing the vehicle in outdoor lighting exposed issues that were less obvious in the studio.",
          ],
        },
        {
          title: "Build a coherent material finish",
          summary: "Make each surface read at the scale and distance of the final presentation.",
          paragraphs: [
            "The finish brings together metallic green paint, black stripes, powder-coated wheels, molded rubber, glass, and varied cockpit materials. I refined their response as a group so that painted metal, fabric, plastic, and tire surfaces remained distinct in close views.",
            "Material detail had to stay consistent across differently sized parts. Surface mapping and texture scale were part of the asset work, alongside the modeling and shading revisions. Unreal lighting then provided another context for judging the overall result.",
          ],
        },
        {
          title: "Carry the asset into Unreal",
          summary: "Preserve editability while preparing the vehicle for rigging and presentation.",
          paragraphs: [
            "I retained the editable Blender assembly alongside the rigged export version. The handoff included multiple levels of detail, a shared vehicle skeleton, textures, and organized material assignments. Export checks helped catch changes in scale, shading, and part assignments before the asset moved downstream.",
            "The Unreal stage extended that work into the terrain-following rig and desert presentation shown here. Steering, wheel rotation, and suspension articulation give the asset another level of scrutiny beyond a static render. The exported detail levels are part of the delivery; the gallery and demo show the presentation and rig behavior.",
          ],
        },
      ],
      takeaway:
        "The result is a vehicle I can continue to art-direct across modeling, surfacing, and motion. The value of the workflow is in that continuity: keeping the concept recognizable while making the asset increasingly editable, coherent, and useful in a scene.",
    },
    assets: [
      { type: "video", src: "/videos/artstation/mustang-canyon-crawl-45s.mp4", poster: "/images/artstation/off-road-mustang/canyon-crawl-poster.webp", width: 1920, height: 1080, caption: "Canyon crawl — a 45-second Unreal Engine film featuring five camera views, terrain-following suspension, and tire-driven dirt and gravel effects." },
      { type: "image", src: "/images/artstation/off-road-mustang/01.webp", width: 5120, height: 2960, caption: "Off Road Mustang in Unreal Engine — front three-quarter view." },
      { type: "video", src: "/videos/artstation/mustang-rig-demo-web.mp4", poster: "/images/artstation/off-road-mustang/rig-demo-poster.webp", width: 1920, height: 1080, caption: "Custom Unreal Engine plugin rig demo: moving and steering the Mustang over rocky terrain, with adjustable wheelspin, steering response, and terrain following." },
      { type: "image", src: "/images/artstation/off-road-mustang/terrain-01.webp", width: 2575, height: 1495, caption: "Side three-quarter view on uneven desert rock, showing the raised off-road stance, exposed suspension, and rear-mounted spare tire." },
      { type: "image", src: "/images/artstation/off-road-mustang/control-curves.webp", lossless: true, width: 1566, height: 1044, caption: "Control Rig viewport: a yellow movement control surrounds the vehicle, with a cyan steering control above the hood." },
      { type: "image", src: "/images/artstation/off-road-mustang/control-hierarchy.webp", lossless: true, width: 631, height: 172, caption: "CR_Mustang control hierarchy, with Steer nested beneath Move for vehicle placement and steering." },
      { type: "image", src: "/images/artstation/off-road-mustang/control-attributes.webp", lossless: true, width: 619, height: 253, caption: "Exposed rig attributes: Wheel Spin Multiplier, manual wheel spin in degrees, Steering Response, the Follow Terrain checkbox, and ride height in centimeters. Terrain following is enabled in this view." },
      { type: "image", src: "/images/artstation/off-road-mustang/terrain-02.webp", width: 1570, height: 1043, caption: "Low front three-quarter view with rig controls visible, highlighting tire tread, wheel clearance, and the suspension beneath the raised body." },
      { type: "image", src: "/images/artstation/off-road-mustang/terrain-03.webp", width: 1570, height: 1043, caption: "Front view with the nearest wheel turned outward, showing the steering pose and suspension stance on uneven ground." },
      { type: "image", src: "/images/artstation/off-road-mustang/terrain-04.webp", width: 1570, height: 1043, caption: "Close view of the steered front wheel, riveted fender flare, hood scoop, and metallic green bodywork under desert lighting." },
      { type: "image", src: "/images/artstation/off-road-mustang/terrain-05.webp", width: 1570, height: 1043, caption: "Rock-crawling pose with the front of the Mustang elevated over a ledge, showing body pitch and suspension articulation." },
      { type: "image", src: "/images/artstation/off-road-mustang/terrain-06.webp", width: 1570, height: 1043, caption: "Side view of the climb: the front wheels sit higher than the rear wheels as the body follows the rocky slope." },
      { type: "image", src: "/images/artstation/off-road-mustang/terrain-07.webp", width: 1570, height: 1043, caption: "Ground-level view beneath the front bumper, revealing the skid plate, suspension, and underbody clearance over the rocks." },
      { type: "image", src: "/images/artstation/off-road-mustang/terrain-08.webp", width: 1570, height: 1043, caption: "Wide front three-quarter view of the Mustang straddling a rocky step, showing the terrain-following stance in context." },
      { type: "image", src: "/images/artstation/off-road-mustang/02.webp", width: 2560, height: 1480, caption: "Unreal Engine vehicle view." },
      { type: "image", src: "/images/artstation/off-road-mustang/03.webp", width: 5120, height: 2960, caption: "Front view in the desert environment, Unreal Engine." },
      { type: "image", src: "/images/artstation/off-road-mustang/04.webp", width: 5120, height: 2960, caption: "Elevated three-quarter view, Unreal Engine." },
      { type: "image", src: "/images/artstation/off-road-mustang/05.webp", width: 2560, height: 1480, caption: "Rear view, Unreal Engine." },
      { type: "image", src: "/images/artstation/off-road-mustang/06.webp", width: 2560, height: 1480, caption: "Overhead rear view, Unreal Engine." },
      { type: "image", src: "/images/artstation/off-road-mustang/07.webp", width: 5120, height: 2960, caption: "Vehicle and wheel detail, Unreal Engine." },
      { type: "image", src: "/images/artstation/off-road-mustang/08.webp", width: 5120, height: 2960, caption: "Wide environment composition, Unreal Engine." },
      { type: "image", src: "/images/artstation/off-road-mustang/09.webp", width: 1536, height: 1024, caption: "AI-generated initial Mustang concept sheet." },
      { type: "image", src: "/images/artstation/off-road-mustang/10.webp", width: 1536, height: 1024, caption: "AI-generated orthographic concept views." },
      { type: "image", src: "/images/artstation/off-road-mustang/11.webp", width: 1536, height: 1024, caption: "AI-generated wireframe-style concept sheet." },
    ],
  },
{
    slug: "dearfoams-3d-product-animations",
    title: "Dearfoams 3D product Animations",
    category: "commercial",
    description:
      "Contract work for Dearfoams. 3D product animations created using Maya for modeling and rigging, Substance 3D Painter for textures, and Unreal Engine for lookdev, rendering, and animation. After Effects was used for callouts and branding, and Premiere was used for edits.",
    software: ["Maya", "Substance 3D Painter", "Unreal Engine", "After Effects", "Premiere"],
    tags: ["commercial", "product", "animation", "dearfoams", "easymellow", "maya", "substance", "unreal", "after effects", "premiere"],
    cover: "/images/artstation/easymellow/cover.webp",
    coverAspect: 1.7778,
    assets: [
      {
        type: "video",
        src: "/videos/artstation/easymellow-16x9.mp4",
        poster: "/images/artstation/easymellow/cover.webp",
        width: 1920,
        height: 1080,
        caption: "EasyMellow Animation",
      },
      {
        type: "video",
        src: "/videos/artstation/dearfoams-product-2.mp4",
        poster: "/images/artstation/easymellow/product-2-poster.webp",
        width: 1920,
        height: 1080,
        caption: "MarshMellow Animation",
      },
    ],
  },
  {
    slug: "batman",
    title: "Batman",
    category: "characters",
    description:
      "Decided I wanted to create a Batman character. I wanted to try a combination of a Frank Miller style that sort of mixed with the style in the Justice League films. I liked the idea of pressed steel armor with a kevlar coating. I was looking at all the inspiring versions of batman on Artstation and some various comic book covers. The pose is based on a cover by Jim Lee. This scene was modeled in ZBrush, Unwraps were done in Blender. Baked and painted in Substance. Beard scruff was created in Maya xGen. Then did a simple lighting and atmosphere setup in UE5.",
    software: ["ZBrush", "Blender", "Substance 3D Painter", "Unreal Engine", "Maya"],
    tags: ["batman", "character", "character art", "anatomy", "xgen", "modo", "maya", "zbrush", "real-time", "hard surface", "game art"],
    cover: "/images/artstation/batman/01.avif",
    coverAspect: 1.7778,
    assets: [
      { type: "image", src: "/images/artstation/batman/01.avif", lossless: true, width: 3840, height: 2160 },
      { type: "image", src: "/images/artstation/batman/02.avif", lossless: true, width: 3840, height: 2160 },
      { type: "image", src: "/images/artstation/batman/03.avif", lossless: true, width: 3840, height: 2160 },
      { type: "image", src: "/images/artstation/batman/04.avif", lossless: true, width: 3840, height: 2160 },
      { type: "image", src: "/images/artstation/batman/05.avif", lossless: true, width: 3840, height: 2160 },
      { type: "image", src: "/images/artstation/batman/06.avif", lossless: true, width: 3840, height: 2160 },
      { type: "image", src: "/images/artstation/batman/07.avif", lossless: true, width: 3840, height: 2160 },
      { type: "image", src: "/images/artstation/batman/08.avif", lossless: true, width: 3840, height: 2160 },
      { type: "image", src: "/images/artstation/batman/09.avif", lossless: true, width: 3840, height: 2160 },
      { type: "image", src: "/images/artstation/batman/10.webp", width: 2560, height: 1440 },
      { type: "image", src: "/images/artstation/batman/11.webp", width: 2560, height: 1733 },
      { type: "image", src: "/images/artstation/batman/12.webp", width: 2560, height: 1733 },
      { type: "image", src: "/images/artstation/batman/13.webp", width: 1318, height: 892 },
    ],
  },
  {
    slug: "space-explorer",
    title: "Space Explorer",
    category: "characters",
    description:
      "This is a character I've created for real-time. I've been working on getting better at hair in Maya's XGen, creating better skin textures, and rendering in UE5. I've been following Jay Hill's really nice tutorials on YouTube to help get a better understanding of the process. I started with a sculpt in ZBrush. Working from overall forms and proportions to sculpting out pores and wrinkles with JHills fantastic skin brushes.\n\nI built up the textures for the head in Substance Painter starting with a blood layer and working through the different layers of the skin and then finishing up with a make up layer to see if I could get a convincing result. The hair was crated in XGen with guides.. This is where I settled after multiple hairstyle attempts. The renders were created in UE5. I used the eye shader and subsurface profile from a metahuman project. The subsurface shader looked pretty smooth and stylized until I added a cavity map from ZBrush to break up the roughness of the surface. I also double up the normal map after intensifying the sculpt with a slight deformer inflate to get some better detail on the skin. The UE5 scene consisted of a few images on an emissive material, some box lights and a couple illuminated halos meshes via an emissive material. The space suit was retopologized and unwrapped in Modo. Then sculpted in ZBrush and painted in Substance painter.",
    software: ["Unreal Engine", "Maya", "ZBrush", "Substance 3D Painter", "Photoshop", "Modo"],
    tags: ["space", "scfi", "characer", "anatomy", "xgen", "modo", "maya", "zbrush", "portrait", "real-time", "hard surface", "game art"],
    cover: "/images/artstation/space-explorer/01.webp",
    coverAspect: 1.7778,
    assets: [
      { type: "video", src: "/videos/artstation/space-explorer-lightpan.mp4", poster: "/images/artstation/space-explorer/lightpan_poster.webp", caption: "Light pan animation" },
      { type: "image", src: "/images/artstation/space-explorer/01.webp", width: 2560, height: 1440, caption: "With makeup." },
      { type: "image", src: "/images/artstation/space-explorer/02.webp", width: 2560, height: 1440, caption: "Without makeup." },
      { type: "image", src: "/images/artstation/space-explorer/03.webp", width: 2560, height: 1440, caption: "Helmet no respirator." },
      { type: "image", src: "/images/artstation/space-explorer/04.webp", width: 1920, height: 1080 },
      { type: "image", src: "/images/artstation/space-explorer/05.webp", width: 2560, height: 1440, caption: "Helmet with respirator." },
      { type: "image", src: "/images/artstation/space-explorer/06.webp", width: 2560, height: 1440, caption: "No Makeup Detail." },
      { type: "image", src: "/images/artstation/space-explorer/07.webp", width: 2560, height: 1440, caption: "Makeup detail." },
      { type: "image", src: "/images/artstation/space-explorer/08.webp", width: 1055, height: 772, caption: "Generated Hairs from Guides." },
      { type: "image", src: "/images/artstation/space-explorer/09.webp", width: 1122, height: 771, caption: "xGen Guides." },
      { type: "image", src: "/images/artstation/space-explorer/10.webp", width: 1521, height: 967, caption: "skin textures no makeup." },
      { type: "image", src: "/images/artstation/space-explorer/11.webp", width: 1521, height: 967, caption: "skin textures without makeup." },
      { type: "image", src: "/images/artstation/space-explorer/12.webp", width: 1318, height: 892, caption: "ZBrush sculpt detail." },
      { type: "image", src: "/images/artstation/space-explorer/13.webp", width: 1318, height: 892, caption: "ZBrush sculpt detail." },
      { type: "image", src: "/images/artstation/space-explorer/14.webp", width: 1288, height: 1620 },
      { type: "image", src: "/images/artstation/space-explorer/15.webp", width: 1360, height: 1620 },
      { type: "image", src: "/images/artstation/space-explorer/16.webp", width: 1920, height: 1080 },
      { type: "image", src: "/images/artstation/space-explorer/17.webp", width: 1920, height: 1080 },
      { type: "image", src: "/images/artstation/space-explorer/18.webp", width: 1926, height: 1026 },
      { type: "image", src: "/images/artstation/space-explorer/19.webp", width: 1918, height: 1032 },
      { type: "image", src: "/images/artstation/space-explorer/20.webp", width: 1920, height: 1080, caption: "lighting setup." },
      { type: "image", src: "/images/artstation/space-explorer/21.webp", width: 933, height: 822, caption: "UE5 skin material. I used a Metahuman subsurface profile." },
      { type: "image", src: "/images/artstation/space-explorer/22.webp", width: 1318, height: 892 },
      { type: "image", src: "/images/artstation/space-explorer/23.webp", width: 1318, height: 892 },
      { type: "image", src: "/images/artstation/space-explorer/24.webp", width: 1318, height: 892 },
      { type: "image", src: "/images/artstation/space-explorer/25.webp", width: 1920, height: 1080 },
      { type: "image", src: "/images/artstation/space-explorer/26.webp", width: 1920, height: 1080 },
      { type: "image", src: "/images/artstation/space-explorer/27.webp", width: 1920, height: 1080 },
      { type: "image", src: "/images/artstation/space-explorer/28.webp", width: 1318, height: 892 },
      { type: "image", src: "/images/artstation/space-explorer/29.webp", width: 1318, height: 892 },
    ],
  },
  {
    slug: "iggy-pop",
    title: "Iggy Pop",
    category: "characters",
    description:
      "A real-time likeness of Iggy Pop, rebuilt for UE5 with subsurface scattering and strand-based hair. I resculpted the head with pores and finer skin detail, groomed the hair, brows, lashes and facial hair in Maya's XGen, repainted the textures in Substance 3D Painter, and rendered the final images with the UE5 path tracer.\n\nThe character began as a portrait study after seeing Iggy perform live in Chicago: sculpted in ZBrush, retopologized in Silo, textured in Photoshop and ZBrush. A rigged real-time version was later picked up by AST Studios for \"The Pure and the Damned,\" the Oneohtrix Point Never and Iggy Pop music video from the film \"Good Time.\" AST handled the rigging, animation and hair sim; the character model and textures are my work.",
    software: ["Silo", "ZBrush", "Keyshot", "Substance 3D Painter", "Photoshop", "Unreal Engine", "Maya"],
    tags: ["Iggy Pop", "Character", "real time", "3D art", "anatomy", "xgen", "maya", "zbrush", "portrait", "real-time", "game art"],
    cover: "/images/artstation/iggy-pop/01.avif",
    coverAspect: 1.7778,
    assets: [
      { type: "image", src: "/images/artstation/iggy-pop/01.avif", lossless: true, width: 3840, height: 2160, caption: "Path trace render in UE5." },
      { type: "image", src: "/images/artstation/iggy-pop/02.avif", lossless: true, width: 3840, height: 2160, caption: "Path trace render in UE5." },
      { type: "image", src: "/images/artstation/iggy-pop/03.avif", lossless: true, width: 3840, height: 2160, caption: "Path trace render in UE5." },
      { type: "image", src: "/images/artstation/iggy-pop/04.avif", lossless: true, width: 3840, height: 2160, caption: "Path trace render in UE5." },
      { type: "image", src: "/images/artstation/iggy-pop/05.avif", lossless: true, width: 3840, height: 2160, caption: "Path trace render in UE5." },
      { type: "image", src: "/images/artstation/iggy-pop/06.webp", width: 1261, height: 805 },
      { type: "image", src: "/images/artstation/iggy-pop/07.webp", width: 1318, height: 892 },
      { type: "image", src: "/images/artstation/iggy-pop/08.webp", width: 2560, height: 1999, caption: "Keyshot Portrait" },
      { type: "image", src: "/images/artstation/iggy-pop/09.webp", width: 2560, height: 1999, caption: "Keyshot Full Figure" },
      { type: "youtube", src: "https://www.youtube-nocookie.com/embed/qnUfIkVTrRU", caption: "iggyTurntable" },
      { type: "image", src: "/images/artstation/iggy-pop/10.webp", width: 1000, height: 1000, caption: "Old Diffuse|Normal|Spec Maps" },
      { type: "image", src: "/images/artstation/iggy-pop/11.webp", width: 1920, height: 1080, caption: "Reference Sheet" },
    ],
  },
  {
    slug: "scout-mech",
    title: "Scout Mech",
    category: "hardsurface",
    description:
      "This is a mech I did based on a concept sketch. I also tried a few texture variations and lighting setups in iRay in Substance Painter. Made this in Modo and did most of the model details with MOP Booleans and MOP tubes.",
    software: ["Modo", "Substance 3D Painter"],
    tags: ["mech", "modo", "mecha", "hard surface", "games", "game art"],
    cover: "/images/artstation/scout-mech/01.avif",
    coverAspect: 1.5706,
    assets: [
      { type: "image", src: "/images/artstation/scout-mech/01.avif", lossless: true, width: 4096, height: 2608 },
      { type: "image", src: "/images/artstation/scout-mech/02.avif", lossless: true, width: 4096, height: 2608 },
      { type: "image", src: "/images/artstation/scout-mech/03.avif", lossless: true, width: 4096, height: 2608 },
      { type: "image", src: "/images/artstation/scout-mech/04.avif", lossless: true, width: 4096, height: 2608 },
      { type: "image", src: "/images/artstation/scout-mech/05.avif", lossless: true, width: 4096, height: 2608 },
      { type: "image", src: "/images/artstation/scout-mech/06.avif", lossless: true, width: 4096, height: 2608 },
      { type: "image", src: "/images/artstation/scout-mech/07.avif", lossless: true, width: 4096, height: 2608 },
      { type: "image", src: "/images/artstation/scout-mech/08.avif", lossless: true, width: 4096, height: 2608 },
      { type: "image", src: "/images/artstation/scout-mech/09.avif", lossless: true, width: 4096, height: 2608 },
      { type: "image", src: "/images/artstation/scout-mech/10.avif", lossless: true, width: 4096, height: 2608 },
    ],
  },
  {
    slug: "esu",
    title: "Expeditionary Scout Unit (ESU)",
    category: "hardsurface",
    description:
      "This idea started as a doodle in my sketchbook. I wanted to make a vehicle that could withstand operating in hostile environments for scientific exploration. Sculpted in ZBrush, Unwrapped in Blender and textured in substance.",
    software: ["Substance 3D Painter", "Blender", "Photoshop", "ZBrush"],
    tags: ["Mech", "game art", "pbr"],
    cover: "/images/artstation/esu/01.webp",
    coverAspect: 1.7778,
    assets: [
      { type: "image", src: "/images/artstation/esu/01.webp", width: 1920, height: 1080 },
      { type: "image", src: "/images/artstation/esu/02.webp", width: 2560, height: 1567, caption: "Sculpt" },
      { type: "image", src: "/images/artstation/esu/03.webp", width: 797, height: 886, caption: "Wires" },
      { type: "image", src: "/images/artstation/esu/04.webp", width: 2560, height: 1920, caption: "Concept Sketch" },
    ],
  },
  {
    slug: "kitbash-ship-project",
    title: "Kitbash Ship Project",
    category: "hardsurface",
    description:
      "I built an IMM kit in Zbrush for quickly designing ships using zModeler. This is my first design with the meshes. After designing the ship, I imported it into Blender to UV unwrap and organize materials. Then, I tried a couple texture variations in Substance painter.",
    software: ["ZBrush", "Blender", "Substance 3D Painter"],
    tags: ["space", "space ship", "kitbash"],
    cover: "/images/artstation/kitbash-ship-project/01.webp",
    coverAspect: 1.5729,
    assets: [
      { type: "image", src: "/images/artstation/kitbash-ship-project/01.webp", width: 1521, height: 967, caption: "Additional painting on second variation." },
      { type: "image", src: "/images/artstation/kitbash-ship-project/02.webp", width: 1521, height: 967, caption: "Second Texture Variation." },
      { type: "image", src: "/images/artstation/kitbash-ship-project/03.webp", width: 1521, height: 967, caption: "First texture pass." },
      { type: "image", src: "/images/artstation/kitbash-ship-project/04.webp", width: 1521, height: 967, caption: "Heightmap paint and first texture pass." },
      { type: "image", src: "/images/artstation/kitbash-ship-project/05.webp", width: 1521, height: 967, caption: "Base materials" },
      { type: "image", src: "/images/artstation/kitbash-ship-project/06.webp", width: 1583, height: 935, caption: "Exploded View" },
      { type: "image", src: "/images/artstation/kitbash-ship-project/07.webp", width: 1454, height: 912, caption: "Polyframes." },
      { type: "image", src: "/images/artstation/kitbash-ship-project/08.webp", width: 1482, height: 920 },
    ],
  },
  {
    slug: "grizzly-bear",
    title: "Grizzly Bear",
    category: "creatures",
    description:
      "This is an asset for my game, Kamodo Steve: Janiotr on fire. I made the fur in Maya XGen using placed guides. After placing the guides, I converted the groom to an interactive groom. Used a sculpt modifier to tweak the hair. After this, I generated and alembic cache file and imported into unreal. Finally, I combined all the components in an actor blueprint to get the groom to animate along with the skeletal mesh.",
    software: ["Unreal Engine", "Maya", "Photoshop", "ZBrush", "Substance 3D Painter", "Modo"],
    tags: ["unreal engine", "real time hair", "fur", "bear", "grizzly", "game development"],
    cover: "/images/artstation/grizzly-bear/01.webp",
    coverAspect: 1.7778,
    assets: [
      { type: "image", src: "/images/artstation/grizzly-bear/01.webp", width: 1920, height: 1080, caption: "Bear render in UE4" },
      { type: "image", src: "/images/artstation/grizzly-bear/02.webp", width: 1920, height: 1080, caption: "Bear render in UE4" },
      { type: "image", src: "/images/artstation/grizzly-bear/03.webp", width: 1203, height: 735, caption: "Spline Groom From XGen" },
      { type: "image", src: "/images/artstation/grizzly-bear/04.webp", width: 1249, height: 754, caption: "UE4 Hair Material" },
      { type: "image", src: "/images/artstation/grizzly-bear/05.webp", width: 1194, height: 750, caption: "Rigged Bear" },
      { type: "image", src: "/images/artstation/grizzly-bear/06.webp", width: 1916, height: 1032, caption: "UE4 Blueprint component setup." },
    ],
  },
  {
    slug: "creative-drive",
    title: "Creative Drive",
    category: "sculpts",
    description:
      "I wanted to have an interesting piece of content at the end of my videos and animations. This is the result. Tikis have always been an inspirational form of subject matter to me. I also love cars and loud V8 engines. So, I put this scene together in about 4 days in between work and other responsibilities. Most of the modeling was done in Maya. I retopologized the tiki mesh in Modo, Textures in Substance Painter. I put the scene together in UE4, then created a \"start up\" animation.\n\nFor the skulls, I tried to achieve a foundry poured, oxidized copper look because I like how un-oxidized and oxidized copper create a natural complementary color combination. The flowers are native to Hawaii. They seemed to be a natural choice since there is a tiki involved.\n\nI used the rock and lake water from the \"Water Planes\" sample project in UE4. The fire effect is a modded effect from the UE4 starter content. Really enjoyed taking a short break from my game to make this scene.",
    software: ["Photoshop", "Premiere", "Unreal Engine", "Maya", "Modo", "Substance 3D Painter", "ZBrush"],
    tags: ["unreal engine", "game art", "substance painter", "maya", "zbrush", "modo", "tiki"],
    cover: "/images/artstation/creative-drive/01.webp",
    coverAspect: 1.7762,
    assets: [
      { type: "image", src: "/images/artstation/creative-drive/01.webp", width: 2048, height: 1153, caption: "Made some adjustments using UE4s new sky and water systems." },
      { type: "image", src: "/images/artstation/creative-drive/02.webp", width: 1920, height: 1080 },
      { type: "youtube", src: "https://www.youtube-nocookie.com/embed/U5v8O2EdRfs", caption: "Creative Drive: Unreal Engine Sequencer Animation" },
      { type: "image", src: "/images/artstation/creative-drive/03.webp", width: 1920, height: 1080, caption: "Lighting revision and depth fog" },
      { type: "image", src: "/images/artstation/creative-drive/04.webp", width: 1920, height: 1080, caption: "Skull detail" },
      { type: "image", src: "/images/artstation/creative-drive/05.webp", width: 1920, height: 1080, caption: "Early light setup mid" },
      { type: "image", src: "/images/artstation/creative-drive/06.webp", width: 1920, height: 1080, caption: "Early light setup" },
      { type: "image", src: "/images/artstation/creative-drive/07.webp", width: 1920, height: 1080, caption: "Detail Front" },
      { type: "image", src: "/images/artstation/creative-drive/08.webp", width: 1920, height: 1080, caption: "Detail Skulls and Pistons" },
      { type: "image", src: "/images/artstation/creative-drive/09.webp", width: 1238, height: 598, caption: "Game view light setup" },
      { type: "image", src: "/images/artstation/creative-drive/10.webp", width: 1238, height: 598, caption: "Detail Lighting" },
      { type: "image", src: "/images/artstation/creative-drive/11.webp", width: 1238, height: 598, caption: "Lighting Only" },
      { type: "image", src: "/images/artstation/creative-drive/12.webp", width: 1175, height: 620, caption: "Piston wires and Uvs" },
      { type: "image", src: "/images/artstation/creative-drive/13.webp", width: 1130, height: 585, caption: "Exhaust wires and Uvs" },
      { type: "image", src: "/images/artstation/creative-drive/14.webp", width: 1159, height: 614, caption: "Skull wires and Uvs" },
      { type: "image", src: "/images/artstation/creative-drive/15.webp", width: 1156, height: 609, caption: "Tiki wires and Uvs" },
      { type: "image", src: "/images/artstation/creative-drive/16.webp", width: 1213, height: 512, caption: "Uv checkers" },
    ],
  },
  {
    slug: "health-boost-prop",
    title: "Health-Boost Prop",
    category: "gamedev",
    description:
      "This is the artwork for a 3D prop for health in my game. The heart itself also has a beating animation created from morph targets.",
    software: ["Maya", "Modo", "ZBrush", "Substance 3D Painter"],
    tags: ["3D", "unreal engine", "health", "power up"],
    cover: "/images/artstation/health-boost-prop/01.webp",
    coverAspect: 1.7778,
    assets: [
      { type: "image", src: "/images/artstation/health-boost-prop/01.webp", width: 1920, height: 1080, caption: "Presentation Sheet" },
      { type: "image", src: "/images/artstation/health-boost-prop/02.webp", width: 1920, height: 1080, caption: "Shot of the asset in game" },
      { type: "image", src: "/images/artstation/health-boost-prop/03.webp", width: 842, height: 863, caption: "Render in Unreal Engine." },
    ],
  },
  {
    slug: "bio-luminescent-foliage",
    title: "Bio-luminescent Foliage",
    category: "gamedev",
    description:
      "Made a few foliage items today using Maya, Substance Painter and Photoshop. I wanted to add more of a magical look to some parts of my game levels. I've been looking at bio luminescent plants and decided to try and make some.",
    software: ["Maya", "Substance 3D Painter", "Unreal Engine"],
    tags: ["real time", "foliage", "bio-luminescent", "plants", "flora"],
    cover: "/images/artstation/bio-luminescent-foliage/01.webp",
    coverAspect: 1.7778,
    assets: [
      { type: "image", src: "/images/artstation/bio-luminescent-foliage/01.webp", width: 1920, height: 1080, caption: "Ue4 Level shot" },
      { type: "image", src: "/images/artstation/bio-luminescent-foliage/02.webp", width: 1920, height: 1080, caption: "Ue4 Level shot" },
      { type: "image", src: "/images/artstation/bio-luminescent-foliage/03.webp", width: 1920, height: 1080, caption: "Presentation sheet" },
      { type: "image", src: "/images/artstation/bio-luminescent-foliage/04.webp", width: 726, height: 727, caption: "fern-like Plant UVS" },
      { type: "image", src: "/images/artstation/bio-luminescent-foliage/05.webp", width: 720, height: 719, caption: "Jade-like Plant UVs" },
      { type: "image", src: "/images/artstation/bio-luminescent-foliage/06.webp", width: 793, height: 793, caption: "Mushroom Uvs" },
      { type: "image", src: "/images/artstation/bio-luminescent-foliage/07.webp", width: 1771, height: 682, caption: "Checker Shot" },
    ],
  },
  {
    slug: "educational-science-games",
    title: "Educational Science Games",
    category: "gamedev",
    description:
      "This project is a suite of mini games I created as a sub-contractor for an NSF grant funded project. I was the game developer/artist/programmer for Ceisel & Associates. Some environment assets were purchased. I did all of the gameplay programming in Blueprint. I did the cinematics as well. All of the text in the game is localized to Spanish. The game is part of a museum exhibit that will tour the US from 2018 - 2022. I also created optimized versions of the game for download. I hired out the audio composition, the model of the boat and some of the 2D design.\n\nThe games are about the science exploration vessel Joides Resolution. The boat takes core samples from the ocean floor. Scientists use the core samples for research. The game is free to play and is funded by an NSF grant.\n\nMysteries of the Core tells the story about a post ice age glacial collapse.\n\nDeep Dark Life is about microbes that live under the ocean floor and survive on chemosynthesis.\n\nDie-nosaur is about, you guessed it, the extinction of the dinosuars.",
    software: ["Modo", "Maya", "ZBrush", "Substance 3D Painter", "Substance 3D Designer", "Photoshop", "Illustrator"],
    tags: [],
    cover: "/images/artstation/educational-science-games/01.webp",
    coverAspect: 1.8415,
    assets: [
      { type: "image", src: "/images/artstation/educational-science-games/01.webp", width: 1917, height: 1041 },
      { type: "youtube", src: "https://www.youtube-nocookie.com/embed/lwt_ndeOZs4", caption: "coreStoriesTrialer" },
      { type: "image", src: "/images/artstation/educational-science-games/02.webp", width: 1920, height: 1033 },
      { type: "image", src: "/images/artstation/educational-science-games/03.webp", width: 1900, height: 1040 },
      { type: "image", src: "/images/artstation/educational-science-games/04.webp", width: 1923, height: 1038 },
      { type: "image", src: "/images/artstation/educational-science-games/05.webp", width: 1889, height: 1044 },
      { type: "image", src: "/images/artstation/educational-science-games/06.webp", width: 1885, height: 1039 },
      { type: "image", src: "/images/artstation/educational-science-games/07.webp", width: 1918, height: 1033 },
      { type: "image", src: "/images/artstation/educational-science-games/08.webp", width: 1920, height: 1043 },
      { type: "image", src: "/images/artstation/educational-science-games/09.webp", width: 1912, height: 1012 },
    ],
  },
  {
    slug: "tylosaurus",
    title: "Tylosaurus (Mososaur)",
    category: "creatures",
    description:
      "Another Asset for Stories From the Cores. I tried taking a more colorful approach with the textures. Around this time I started working in Modo. Used Modo for modeling, retopology and unwrapping. Zbrush for sculpting, Substance Painter for textures and Maya for animation. The Mososaur was actually not a dinosaur, but a giant lizard. So, I looked at a variety of monitor lizards and Kamodo Dragons for the scales and colors. I really liked the strong looking necks of the Kamodo Dragons, so I incorporated that into the design. Did a render of the sculpt in Keyshot. The Sketchfab has a sine curve based swimming animation.",
    software: ["Modo", "Maya", "Substance 3D Painter", "Unreal Engine"],
    tags: [],
    cover: "/images/artstation/tylosaurus/01.webp",
    coverAspect: 1.6,
    assets: [
      { type: "image", src: "/images/artstation/tylosaurus/01.webp", width: 1920, height: 1200, caption: "Tylosaurus Presentation." },
      { type: "image", src: "/images/artstation/tylosaurus/02.webp", width: 1920, height: 1080, caption: "Keyshot Render." },
      { type: "sketchfab", src: "https://sketchfab.com/models/260cb129e807447fb9d995a61b902f71/embed", caption: "Swim Animation, Sine Curve Based." },
      { type: "image", src: "/images/artstation/tylosaurus/03.webp", width: 1920, height: 1080, caption: "Eating a Giant Fish." },
    ],
  },
  {
    slug: "forams-and-foram-dish",
    title: "Forams and Foram Dish",
    category: "gamedev",
    description:
      "This is a dish of Forams and Diatoms for the mini-game Mysteries of the Core. The asset was created in Maya, ZBrush and Substance Painter. I was working from electron microscope reference, so I took some liberties with the color and surfacing. For the diatom (the one with the holes), a 3D scan of the organism was used to create texture maps.",
    software: ["Maya", "ZBrush", "Substance 3D Painter", "Unreal Engine"],
    tags: [],
    cover: "/images/artstation/forams-and-foram-dish/01.webp",
    coverAspect: 1.3333,
    assets: [
      { type: "image", src: "/images/artstation/forams-and-foram-dish/01.webp", width: 1440, height: 1080, caption: "Finished Sculpts" },
      { type: "image", src: "/images/artstation/forams-and-foram-dish/02.webp", width: 1120, height: 698, caption: "Finished Sculpts" },
      { type: "image", src: "/images/artstation/forams-and-foram-dish/03.webp", width: 1120, height: 698, caption: "Finished Sculpts" },
      { type: "image", src: "/images/artstation/forams-and-foram-dish/04.webp", width: 1917, height: 1080, caption: "UE4 Screenshot" },
      { type: "image", src: "/images/artstation/forams-and-foram-dish/05.webp", width: 1431, height: 938, caption: "UE4 Render" },
    ],
  },
  {
    slug: "rov-33-rovee",
    title: "ROV-33 (Rovee)",
    category: "hardsurface",
    description:
      "Rovee is the main character for a suite of games I created called \"Stories from the Cores.\" Rovee helps the player collect scientific evidence throughout the games. His design was inspired by Remote Operated Vehicles used in deep sea scientific exploration. Rovee is modeled, rigged and animated in Maya. Some hard surface sculpting was done in ZBrush. Textures were created in Substance Painter. GPU particles and volumetric lights were setup in UE4 along with blueprint to drive the character.",
    software: ["Maya", "ZBrush", "Substance 3D Painter", "Unreal Engine"],
    tags: ["robot", "character", "science", "game art"],
    cover: "/images/artstation/rov-33-rovee/01.webp",
    coverAspect: 1.6369,
    assets: [
      { type: "image", src: "/images/artstation/rov-33-rovee/01.webp", width: 1596, height: 975, caption: "Rovee Presentation Sheet." },
      { type: "sketchfab", src: "https://sketchfab.com/models/b2a80b86ea4f4ece8c8cd2d578bd96a6/embed", caption: "Bot with Idle Animation." },
      { type: "image", src: "/images/artstation/rov-33-rovee/02.webp", width: 2048, height: 2048, caption: "Rovee Texture Sheet." },
      { type: "image", src: "/images/artstation/rov-33-rovee/03.webp", width: 805, height: 595, caption: "Rovee in UE4." },
      { type: "image", src: "/images/artstation/rov-33-rovee/04.webp", width: 922, height: 603, caption: "Rovee Character Rig." },
      { type: "image", src: "/images/artstation/rov-33-rovee/05.webp", width: 1920, height: 1080, caption: "Rovee UE4 Screenshot." },
      { type: "image", src: "/images/artstation/rov-33-rovee/06.webp", width: 1917, height: 1080, caption: "Rovee UE4 Screen" },
      { type: "image", src: "/images/artstation/rov-33-rovee/07.webp", width: 1920, height: 1035, caption: "Rovee in the Scablands." },
    ],
  },
  {
    slug: "dragon-pillar",
    title: "Dragon Pillar \u2014 Godfrey Hotel, Boston",
    category: "sculpts",
    description:
      "This is a pillar that I sculpted in ZBrush for a client for fabrication and install at the Godfrey Hotel in Boston.\n\nIt was a lot of fun to work on. I used Rhino for measurement and some small tweaks. Also did some renders in Keyshot. I guess you could call it real life environment art. : ) I have to admit, I used the dragon found on foam nunchucks for a bit of reference. Originally, the horns were longer, but they had to be shortened due to the fabrication process.",
    software: ["ZBrush", "Rhinoceros", "Keyshot"],
    tags: ["zbrush", "dragon", "pillar", "architecture"],
    cover: "/images/artstation/dragon-pillar/01.webp",
    coverAspect: 0.625,
    assets: [
      { type: "image", src: "/images/artstation/dragon-pillar/01.webp", width: 1600, height: 2560 },
      { type: "image", src: "/images/artstation/dragon-pillar/02.webp", width: 1600, height: 2560 },
      { type: "image", src: "/images/artstation/dragon-pillar/03.webp", width: 960, height: 539 },
      { type: "image", src: "/images/artstation/dragon-pillar/04.webp", width: 960, height: 539 },
      { type: "image", src: "/images/artstation/dragon-pillar/05.webp", width: 540, height: 960 },
      { type: "image", src: "/images/artstation/dragon-pillar/06.webp", width: 720, height: 960 },
      { type: "image", src: "/images/artstation/dragon-pillar/07.webp", width: 960, height: 720 },
      { type: "image", src: "/images/artstation/dragon-pillar/08.webp", width: 960, height: 720 },
      { type: "image", src: "/images/artstation/dragon-pillar/09.webp", width: 720, height: 960 },
      { type: "image", src: "/images/artstation/dragon-pillar/10.webp", width: 720, height: 960 },
      { type: "image", src: "/images/artstation/dragon-pillar/11.webp", width: 720, height: 960 },
      { type: "image", src: "/images/artstation/dragon-pillar/12.webp", width: 960, height: 720 },
    ],
  },
  {
    slug: "colombian-mammoth",
    title: "Colombian Mammoth",
    category: "creatures",
    description:
      "This is a real-time asset that I created for a client. The Mammoth had to pass the inspection of a scientific expert for accuracy. The model started with a sculpt in Zbrush. Once the sculpt was complete, I retopologized in 3D Coat and Maya. UV Unwrap in Maya. Then Substance Painter was used for textures. Fibers were done in Maya and ZBrush. Finally, some some texturing in photoshop and some post in the beauty shot. The Mammoth is for a educational game that will tour various science museums across the United States. A herd of Mammoth will be standing in front of a gigantic glacial ice dam. I was surprised the polygon count was under 10k! Anyway, thanks for looking!",
    software: ["Maya", "ZBrush", "3DCoat", "Substance 3D Painter", "Photoshop"],
    tags: ["Substance Painter", "Mammoth", "Ice Age", "Colombian Mammoth", "Paciderm", "Zbrush"],
    cover: "/images/artstation/colombian-mammoth/01.webp",
    coverAspect: 1.7778,
    assets: [
      { type: "image", src: "/images/artstation/colombian-mammoth/01.webp", width: 1920, height: 1080, caption: "A herd of Mammoth in front of a glacial Ice Dam." },
      { type: "image", src: "/images/artstation/colombian-mammoth/02.webp", width: 1596, height: 971 },
      { type: "image", src: "/images/artstation/colombian-mammoth/03.webp", width: 1980, height: 1020 },
      { type: "image", src: "/images/artstation/colombian-mammoth/04.webp", width: 2560, height: 1744 },
    ],
  },
  {
    slug: "kamodo-steve",
    title: "Kamodo Steve: Janitor on Fire",
    category: "gamedev",
    description:
      "Kamodo Steve: Janitor on Fire is a 2.5D platformer.\n\nThe overarching narrative is somewhat of a biography leaning heavily toward parts of my identity that were influenced by my brother. There are elements of humor and weirdness from the unlikely hero, Kamodo Steve. He works as a janitor in a local power plant in his hometown. He just moved back because he was laid off from his job as a physicist. One night, he stumbled onto an unidentified doorway in the power plant and discovered how the plant owners were creating chemicals that could do unspeakable things. More unspeakable than the cancer cases and other ailments. He was discovered by one of the plant security guards and",
    software: ["Maya", "3ds Max", "ZBrush", "Substance 3D Painter", "Substance 3D Designer", "Photoshop", "Unreal Engine", "3DCoat", "Modo"],
    tags: ["UE4", "platformer", "unrealengine", "game", "game art"],
    cover: "/images/artstation/kamodo-steve/01.webp",
    coverAspect: 1.7778,
    assets: [
      { type: "youtube", src: "https://www.youtube-nocookie.com/embed/isFH9XxmE2o" },
      { type: "image", src: "/images/artstation/kamodo-steve/01.webp", width: 1920, height: 1080, caption: "Screen shot of part of level 2." },
      { type: "image", src: "/images/artstation/kamodo-steve/02.webp", width: 1920, height: 1080 },
    ],
  },
  {
    slug: "white-rhino",
    title: "White Rhino",
    category: "creatures",
    description:
      "This is a sculpt of a White Rhino that I did for a set of video tutorials.",
    software: ["ZBrush"],
    tags: ["White Rhino"],
    cover: "/images/artstation/white-rhino/01.webp",
    coverAspect: 1.7778,
    assets: [
      { type: "image", src: "/images/artstation/white-rhino/01.webp", width: 1280, height: 720 },
    ],
  },
  {
    slug: "perseus",
    title: "Study of Perseus Slaying Medusa",
    category: "sculpts",
    description:
      "Recently picked up Keyshot and made some updated renders of this sculpt. Also did some compositing in Photoshop. Study of Perseus Slaying Medusa was used as an art test for Hasbro.",
    software: ["ZBrush", "Keyshot", "Photoshop"],
    tags: [],
    cover: "/images/artstation/perseus/01.webp",
    coverAspect: 0.6211,
    // Tall full-figure render: bias the 4:3 card crop to Perseus's head, torso, and Medusa's head
    coverPosition: "center 12%",
    assets: [
      { type: "image", src: "/images/artstation/perseus/01.webp", width: 1590, height: 2560 },
      { type: "image", src: "/images/artstation/perseus/02.webp", width: 1327, height: 2560 },
      { type: "image", src: "/images/artstation/perseus/03.webp", width: 1494, height: 2560 },
      { type: "image", src: "/images/artstation/perseus/04.webp", width: 1476, height: 2560 },
      { type: "image", src: "/images/artstation/perseus/05.webp", width: 1920, height: 1945 },
      { type: "image", src: "/images/artstation/perseus/06.webp", width: 604, height: 453 },
      { type: "image", src: "/images/artstation/perseus/07.webp", width: 604, height: 453 },
    ],
  },
  {
    slug: "chardin-still-life",
    title: "Copy of Chardin Still Life",
    category: "sculpts",
    description:
      "This is a copy of a Chardin Still Life I did for a set of Maya Video Tutorials.",
    software: ["Maya", "Photoshop", "mental ray"],
    tags: [],
    cover: "/images/artstation/chardin-still-life/01.webp",
    coverAspect: 1.3333,
    assets: [
      { type: "image", src: "/images/artstation/chardin-still-life/01.webp", width: 1920, height: 1440 },
    ],
  },
];
