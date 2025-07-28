"use client"
import {Card, CardHeader, CardBody, CardFooter, Avatar} from "@heroui/react";

import Button from "./button"

export default function App(props) {

  return (
    <Card className="max-w-[340px] min-w-[340px] my-3">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={"/api/get-image?name="+props.info.pic} />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{props.info.name}</h4>
            <h5 className="text-small tracking-tight text-default-400">@{props.info.username}</h5>
          </div>
        </div>
        <a href={"/profile/@"+props.info.username}>
        <Button variant="flat"
        //   className={"bg-main"}
          color="secondary"
          radius="full"
          size="sm"
        >درخواست مشاوره</Button></a>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p className="text-right">
          {props.info.desc}
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex">
          <p className="text-default-400 text-small">{props.info.title}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
