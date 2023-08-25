import { Episode } from "./Episode";
import { Season } from "./Season";
import { Show } from "./Show";
import { getModelForClass } from "@typegoose/typegoose";

export const ShowModel = getModelForClass(Show);
