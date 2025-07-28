import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function BasicTimeline({ items = [] , ...props}) {
    return (
        <Timeline {...props}>
            {
                items.map((r,i) => (
                    <TimelineItem>
                        {r.oppositeContent && <TimelineOppositeContent className="text-slate-500">
                            {r.oppositeContent}
                        </TimelineOppositeContent>}
                        <TimelineSeparator>
                            <TimelineDot />
                            {(i != items.length - 1) && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent>{r.content}</TimelineContent>
                    </TimelineItem>
                ))
            }
        </Timeline>
    );
}