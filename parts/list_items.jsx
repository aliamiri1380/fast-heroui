import { Listbox, ListboxItem, ListboxSection, ScrollShadow, cn } from "@heroui/react";
import Icon from "./icon";
import Popover from "./popover";


export const ListboxWrapper = ({ className, children }) => (
	<div className={"w-full p-1 rounded-xl bg-white border-default-200 dark:border-default-100 " + className}>
		<ScrollShadow orientation="vertical" className={className} hideScrollBar>
			{children}
		</ScrollShadow>
	</div>
);

export default function App({ wrapperClassName, items, current, ...props }) {
	let nth = 0

	return (
		<ListboxWrapper className={wrapperClassName}>
			<Listbox variant="flat">
				{
					(items ?? []).map((r, i) => <ListboxSection {...r.props} showDivider={r.divider != undefined ? r.divider : i != items.length - 1} title={r.title}>
						{
							(r.items ?? []).map((r2, i2) => {
								const el = <ListboxItem key={nth} className={`${current && current == r2.name ? 'bg-default/40' : ''} ${r2.className ?? ''}`} onClick={(e) => {e.target.closest("button") ? '' : r2.onClick(e)}} startContent={r2.icon ? <Icon center {...r2.iconProps}>{r2.icon}</Icon> : ''} {...r2.props}>{r2.content}</ListboxItem>
								nth ++
								// r2.sub ? <Popover>{r2.}</Popover>
								return el
							})
						}
					</ListboxSection>)
				}
			</Listbox>
		</ListboxWrapper>
	);
}