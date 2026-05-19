export interface DashboardFilters {
    end_year?: number;
    topic?: string;
    sector?: string;
    region?: string;
    pestle?: string;
    source?: string;
    country?: string;
}

export interface SectorPerformanceData {
    sector: string;
    intensity: number;
    relevance: number;
    likelihood: number;
}

export interface DashboardCharts {
    sectorPerformance: SectorPerformanceData[];
    topicBreakdown: Record<string, number>;
    intensityBySector: Record<string, number>;
    relevanceByRegion: Record<string, number>;
    likelihoodByCountry: Record<string, number>;
}

export interface DashboardData {
    stats: DashboardStats;
    charts: DashboardCharts;
}
