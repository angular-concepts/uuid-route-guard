export interface Tutorial {
    name: string;
    heading: string;
    content: string;
}

export const TUTORIAL1: Tutorial = {
    name: "tutorial1",
    heading: "Tutorial 1",
    content: "This is the first tutorial"
};

export const TUTORIAL2: Tutorial = {
    name: "tutorial2",
    heading: "Tutorial 2",
    content: "This is the second tutorial"
};

export const TUTORIAL3: Tutorial = {
    name: "tutorial3",
    heading: "Tutorial 3",
    content: "This is the third tutorial"
};

export const TUTORIALS: Tutorial[] = [TUTORIAL1, TUTORIAL2, TUTORIAL3];

export const TUTORIALS_MAP = {
    "tutorial1": TUTORIAL1,
    "tutorial2": TUTORIAL2,
    "tutorial3": TUTORIAL3
}