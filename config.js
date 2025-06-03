// --- MAPBOX CONFIGURATION ---
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiYmVuZ2FsZWEiLCJhIjoiY21iNjBvbXp0MWpiejJpb2Vmc3FyeWdweSJ9.9gzKml0FN_5I30w33iqg3A';
const MAP_STYLE_CUSTOM = 'mapbox://styles/bengalea/cmb60zyax00o501sdahv19e6q';
const MAP_STYLE_SATELLITE = 'mapbox://styles/mapbox/satellite-streets-v12';

// --- LAYER & ATTRIBUTE CONFIGURATION ---
const FOREST_PATCH_LAYER_ID = 'Klang Valley Forest Patches '; // Verified: ID has a trailing space

const TIER_ATTRIBUTE = 'Category (tier)'; // Assumed correct, verify if filtering still fails

// CORRECTED ATTRIBUTE NAMES BASED ON DEBUG LOG:
const PATCH_ID_ATTRIBUTE = 'Patch ID';
const PATCH_AREA_ATTRIBUTE = 'Patch area (ha)';
const CORE_AREA_ATTRIBUTE = 'Core area (ha)'; // Added for completeness
const CONTIGUITY_INDEX_ATTRIBUTE = 'Contiguity index'; // Added
const PERIMETER_AREA_RATIO_ATTRIBUTE = 'Perimeter-area ratio'; // Added

// Attributes to display in the info panel (exact names from your data)
const INFO_PANEL_ATTRIBUTES = [
    'Category (tier)',
    'Patch ID',
    'Patch area (ha)',
    'Core area (ha)',
    'Contiguity index',
    'Perimeter-area ratio'
];

// --- TIER CONFIGURATION ---
const ALL_TIERS = ["tier 1", "tier 2", "tier 3", "tier 4", "tier 5", "tier 6", "Excluded"];

const TIER_COLORS = {
    "tier 1": "#b1eaac",
    "tier 2": "#8ad284",
    "tier 3": "#5aaf64",
    "tier 4": "#2a8234",
    "tier 5": "#1e6b27",
    "tier 6": "#0a4c12",
    "Excluded": "#000000"
};

// --- MAP INITIAL VIEW ---
const INITIAL_CENTER = [101.58, 3.05];
const INITIAL_ZOOM = 11;