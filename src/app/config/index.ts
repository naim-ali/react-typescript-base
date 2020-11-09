import fs from "fs";

// JSON Config file format
export interface IAppConfig {
  readonly name: string;
  readonly apiUrl: URL;
  readonly authUrl: URL;
  readonly loadDevTools: boolean;
  readonly debugMode: boolean;
}

export class AppConfig implements IAppConfig {
  readonly name: string;
  readonly apiUrl: URL;
  readonly authUrl: URL;
  readonly loadDevTools: boolean;
  readonly debugMode: boolean;

  constructor(json: IAppConfig) {
    console.assert(json.name && json.authUrl && json.apiUrl);
    this.name = json.name;
    this.apiUrl = json.apiUrl;
    this.authUrl = json.authUrl;
    this.loadDevTools = json.loadDevTools === true;
    this.debugMode = json.debugMode === true;
  }
}

const rawConfig = JSON.stringify(fs.readFileSync("./config/_temp.json"));
function loadAppConfig(rawJson: string): Promise<Readonly<IAppConfig>> {
  const conf = JSON.parse(rawJson);
  return new Promise(() => new AppConfig(conf));
}
export default loadAppConfig(rawConfig);
