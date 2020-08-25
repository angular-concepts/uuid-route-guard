export interface Level {
    name: string;
    heading: string;
    content: string;
}

export const LEVEL1: Level = {
    name: "level1",
    heading: "Level 1",
    content: "This is the first level"
}

export const LEVEL2: Level = {
    name: "level2",
    heading: "Level 2",
    content: "This is the second level"
}

export const LEVEL3: Level = {
    name: "level3",
    heading: "Level 3",
    content: "This is the third level"
}

export const LEVELS: Level[] = [LEVEL1, LEVEL2, LEVEL3];

export const LEVELS_MAP = {
    "level1": LEVEL1,
    "level2": LEVEL2,
    "level3": LEVEL3
}