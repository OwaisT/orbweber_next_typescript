"use client"
import { logPageView } from "@/utils/AnalyticsHelpers";

interface PageViewLogProps {
    pageName: string;
    dimension1: string;
}

export function PageViewLog(props : PageViewLogProps) {
    const { pageName, dimension1 } = props;
    logPageView(pageName, dimension1);
    return null;
}