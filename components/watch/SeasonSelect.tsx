import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ISeason } from "@/lib/types";

const SeasonSelect = ({
  params,
}: {
  params: { showId: string; currentSeason: string; seasonList: Array<ISeason> };
}) => {
  return (
    <Select defaultValue={params.currentSeason}>
      <SelectTrigger className="w-[155px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {params.seasonList.map((season: ISeason) => (
          <SelectItem
            value={season.seasonId}
            key={season.seasonId}
            className="cursor-pointer"
          >
            {"Season " + season.seasonId.slice(1)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SeasonSelect;
