// meeting.model.ts
export interface Meeting {
    id: string;
    title: string;
    date: Date;
    duration: number;
    description?: string;
    status: 'Scheduled' | 'Cancelled' | 'Completed';
    participants: string[];
}