import { ConfigContext, ExpoConfig } from "@expo/config";
import "dotenv/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  extra: {
    API_URL: process.env.API_URL,
  },
});
