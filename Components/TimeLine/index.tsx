import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import {Box} from "@material-ui/core";
import timeLineList from "./json";

export default function CustomizedTimeline() {
  return (
    <>
      {timeLineList && timeLineList.length > 0 && (
        <Timeline>
          {timeLineList.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Box>
                  <h5>{item.vaga}</h5>
                  <h6>{item.empresa}</h6>
                  <span>
                    <small>{item.de} </small>
                     — 
                    <small> {item.ate}</small>
                  </span>
                  {
                    typeof item.desc == "string"  
                    ? <p>{item.desc}</p>
                    : item.desc.map((e, index)=> <div key={index}>
                        <p>{e.info}</p>
                        <ul>
                           {e.itens.map((itemInfo, index)=> <li key={index}> — {itemInfo}</li>)}
                        </ul>
                    </div>)
                  }
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      )}
    </>
  );
}
