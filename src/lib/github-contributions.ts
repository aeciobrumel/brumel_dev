export type ContributionLevel =
  | "NONE"
  | "FIRST_QUARTILE"
  | "SECOND_QUARTILE"
  | "THIRD_QUARTILE"
  | "FOURTH_QUARTILE";

export interface ContributionDay {
  contributionCount: number;
  contributionLevel: ContributionLevel;
  date: string;
  weekday: number;
}

export interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export interface GithubContributions {
  totalContributions: number;
  weeks: ContributionWeek[];
}

const QUERY = `
  query ($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
              weekday
            }
          }
        }
      }
    }
  }
`;

/**
 * Busca o calendário de contribuições públicas do GitHub via GraphQL.
 * Roda só em build-time (export estático) e retorna `null` se o token
 * não estiver configurado ou a chamada falhar, pra não quebrar o build.
 */
export async function getGithubContributions(
  login: string
): Promise<GithubContributions | null> {
  const token = process.env.GH_CONTRIBUTIONS_TOKEN;

  if (!token) {
    return null;
  }

  try {
    const response = await fetch("https://api.github.com/graphql", {
      body: JSON.stringify({ query: QUERY, variables: { login } }),
      headers: {
        authorization: `bearer ${token}`,
        "content-type": "application/json",
      },
      method: "POST",
    });

    if (!response.ok) {
      return null;
    }

    const json = await response.json();
    const calendar = json?.data?.user?.contributionsCollection
      ?.contributionCalendar as GithubContributions | undefined;

    return calendar ?? null;
  } catch {
    return null;
  }
}
