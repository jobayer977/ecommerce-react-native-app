const environmentType: EnvType = "staging";
const environments: any = {
  local: {
    apiUrl: "http://xxxxxxxxxx",
  },
  staging: {
    apiUrl: "http://xxxxxxxxxx",
  },
};
type EnvType = "staging" | "local" | "production";
interface IEnvironment {
  isProduction: boolean;
  isStaging: boolean;
  isLocal: boolean;
  apiUrl: string;
}
const environment: IEnvironment = Object.assign(
  {
    isProduction: environmentType === "production",
    isStaging: environmentType === "staging",
    isLocal: environmentType === "local",
  },
  environments[environmentType]
);
