import * as z from "zod";
import { themes } from "../const/themes";

export const savedThemeStorageSchema = z.literal(themes);
