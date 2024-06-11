export interface CasualtyEvent {
    report_date: string;
    ext_killed?: number;
    ext_injured?: number;
    ext_killed_cum?: number;
    ext_injured_cum?: number;
    ext_killed_children_cum?: number;
    ext_killed_women_cum?: number;
    ext_civdef_killed_cum?: number;
    ext_med_killed_cum?: number;
    ext_press_killed_cum?: number;
    major_event?: string;
}