import { Card, CardHeader, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { prettyDate, render_max_text } from "@/src/utils";
import { Image } from "@heroui/image";
import XscrollShadow from "./xscroll_shadow";
import { ScrollShadow } from "@heroui/scroll-shadow";
import { toSlug } from "@/src/utils";
// import Image from 'next/image'

export default ({ title, img, date, tags = [], imgBlur = false, slug="", id=""}) => {
  return (
    <a href={`/news/${id}/${slug}`} className="h-full grid">
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">{render_max_text(title, 60)}</h4>
          <div className={'py-2 flex flex-nowrap gap-1 w-full overflow-x-auto scroll-container'}>
            {
              tags?.map((r, i) => <a href="" key={i}><Chip size="sm">{r}</Chip></a>)
            }
          </div>
          <small className="text-default-500">{prettyDate(date)}</small>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image classNames={{ wrapper: 'min-w-full h-full min-h-[300px] max-h-[300px]' }}
            alt={title}
            title={title}
            className="object-cover rounded-xl w-full h-full"
            src={img}
            isBlurred={imgBlur}
            loading={'lazy'}
          />
          {/* <Image src={img} /> */}
        </CardBody>
      </Card>
    </a>
  );
}
