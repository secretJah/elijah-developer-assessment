type Student = {
    readonly assessments: Assessments[];
    readonly created_at?: string;
    readonly created_by: number | null /*could be string or id number*/;
    readonly email: string;
    readonly id: number;
    readonly institution: Institution;
    readonly name: string;
    readonly school_id: string;
    readonly updated_at?: string;
    readonly updated_by: number | null /*could be string or id number*/;
};

type Institution = {
    readonly created_at: string;
    readonly created_by: string | null /*could be string or id number*/;
    readonly id: number;
    readonly name: string;
    readonly updated_at: string;
    readonly updated_by: string | null /*could be string or id number*/;
};

type Assessments = {
    readonly close_time: string;
    readonly created_at: string;
    readonly created_by: string | null /*could be string or id number*/;
    readonly description: string;
    readonly id: number;
    readonly is_locked: boolean /*likely boolean*/;
    readonly name: string;
    readonly open_time: string;
    readonly parent_assessment: number | null;
    readonly time_limit: string;
    readonly type: string | null;
    readonly updated_at: string;
    readonly updated_by: string | null /*could be string or id number*/;
    readonly version_name: string | null;
    readonly version_number: number | null;
};

type AssessmentLog = {
    readonly assessment_id: number;
    readonly build_seed: string | null;
    readonly created_at: string;
    readonly created_by: number | null;
    readonly id: number;
    readonly is_complete: boolean;
    readonly start_time: string | null;
    readonly student: number;
    readonly total_correct: number | null;
    readonly total_time: string | null;
    readonly updated_at: string;
    readonly updated_by: number | null;
    readonly version_number: number | null;
};

type AssessmentStatus = {
    readonly completed: Assessments[];
    readonly expired: Assessments[];
    readonly in_progress: Assessments[];
    readonly open: Assessments[];
    readonly upcoming: Assessments[];
};
