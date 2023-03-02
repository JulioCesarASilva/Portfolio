import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import {Box} from "@material-ui/core";

export default function CustomizedTimeline({trajectories}: {trajectories: ITrajectory[]}) {
  // @ts-ignore
  const compareNumbers = (a: ITrajectory, b: ITrajectory) => new Date(b.start) - new Date(a.start);

  const minhaListaModificada = [...trajectories].sort(compareNumbers);

  return (
    <>
        <Timeline>
          {minhaListaModificada.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Box>
                  <h5>{item.role}</h5>
                  <h6>{item.company.name}</h6>
                  <span>
                    <small>{new Date(item.start).toLocaleString("pt-br", {year: 'numeric', month: 'long' })} </small> {// b.toLocaleString("pt-br", {year: 'numeric', month: 'long' })
                    }
                     — 
                    <small> {!item.finish ? "Até o momento" : new Date(item.finish).toLocaleString("pt-br", {year: 'numeric', month: 'long' })}</small>
                  </span>
                  <div dangerouslySetInnerHTML={{__html: item.description}}></div>
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
    </>
  );
}
