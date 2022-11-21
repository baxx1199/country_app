export interface ICountrymodel {
    name:         Name;
    tld:          string[];
    cca2:         string;
    ccn3:         string;
    cca3:         string;
    cioc:         string;
    independent:  boolean;
    status:       string;
    unMember:     boolean;
    currencies:   Currencies;
    idd:          Idd;
    population:     number;
    capital:      string[];
    altSpellings: string[];
    region:       string;
    subregion:    string;
    languages:    Languages;
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    area:         number;
    flag:         string;
    flags:        Flag;
    demonyms:     Demonyms;
}

export interface Currencies {
    JPY: Jpy;
}

export interface Jpy {
    name:   string;
    symbol: string;
}

export interface Demonyms {
    eng: Eng;
    fra: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flag {
    svg: string;
    png: string;
}

export interface Idd {
    root:     string;
    suffixes: string[];
}

export interface Languages {
    jpn: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: NativeName;
}

export interface NativeName {
    jpn: Translation;
}

export interface Translation {
    official: string;
    common:   string;
}
