import type {
  ContributionLevel,
  ContributionWeek,
  GithubContributions,
} from "@/lib/github-contributions";
import { cn } from "@/lib/utils";

const MONTH_LABELS = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

const LEVELS: ContributionLevel[] = [
  "NONE",
  "FIRST_QUARTILE",
  "SECOND_QUARTILE",
  "THIRD_QUARTILE",
  "FOURTH_QUARTILE",
];

const LEVEL_CLASS: Record<ContributionLevel, string> = {
  FIRST_QUARTILE: "bg-primary/30",
  FOURTH_QUARTILE: "bg-primary",
  NONE: "bg-muted",
  SECOND_QUARTILE: "bg-primary/55",
  THIRD_QUARTILE: "bg-primary/80",
};

const CELL_PX = 11;
const GAP_PX = 3;
const WEEKDAYS = [0, 1, 2, 3, 4, 5, 6] as const;

function getMonthLabels(weeks: ContributionWeek[]) {
  const labels: { index: number; label: string }[] = [];
  let lastMonth = -1;

  for (const [index, week] of weeks.entries()) {
    const [firstDay] = week.contributionDays;
    if (!firstDay) {
      continue;
    }

    const month = new Date(firstDay.date).getUTCMonth();
    if (month !== lastMonth) {
      labels.push({ index, label: MONTH_LABELS[month] });
      lastMonth = month;
    }
  }

  return labels;
}

function formatDay(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

function pluralize(count: number) {
  return count === 1 ? "contribuição" : "contribuições";
}

export function GithubContributionGraph({
  contributions,
}: {
  contributions: GithubContributions;
}) {
  const monthLabels = getMonthLabels(contributions.weeks);

  return (
    <div>
      <p className="mb-3 font-semibold text-foreground text-sm">
        Atividade no GitHub
      </p>

      <div className="overflow-x-auto">
        <div
          className="mb-1 grid text-[10px] text-muted-foreground"
          style={{
            columnGap: GAP_PX,
            gridTemplateColumns: `repeat(${contributions.weeks.length}, ${CELL_PX}px)`,
            width: "max-content",
          }}
        >
          {monthLabels.map(({ index, label }) => (
            <span
              key={`${label}-${index}`}
              style={{ gridColumnStart: index + 1 }}
            >
              {label}
            </span>
          ))}
        </div>

        <div className="flex gap-0.75" style={{ width: "max-content" }}>
          {contributions.weeks.map((week) => {
            const [firstDay] = week.contributionDays;
            const weekKey = firstDay?.date ?? "week";

            return (
              <div className="flex flex-col gap-0.75" key={weekKey}>
                {WEEKDAYS.map((weekday) => {
                  const day = week.contributionDays.find(
                    (candidate) => candidate.weekday === weekday
                  );

                  if (!day) {
                    return (
                      <div
                        className="size-2.75"
                        key={`${weekKey}-${weekday}`}
                      />
                    );
                  }

                  return (
                    <div
                      className={cn(
                        "size-2.75 rounded-[2px]",
                        LEVEL_CLASS[day.contributionLevel]
                      )}
                      key={day.date}
                      title={`${day.contributionCount} ${pluralize(day.contributionCount)} em ${formatDay(day.date)}`}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-muted-foreground text-xs">
        <p>
          {contributions.totalContributions} contribuições nos últimos 12 meses
        </p>
        <div className="flex items-center gap-1.5">
          <span>Menos</span>
          <div className="flex gap-0.75">
            {LEVELS.map((level) => (
              <div
                className={cn("size-2.75 rounded-[2px]", LEVEL_CLASS[level])}
                key={level}
              />
            ))}
          </div>
          <span>Mais</span>
        </div>
      </div>
    </div>
  );
}
