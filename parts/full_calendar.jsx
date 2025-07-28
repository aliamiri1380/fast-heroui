// // import ReactDOM from 'react-dom';
// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import timeGridPlugin from '@fullcalendar/timegrid'
// import interactionPlugin from '@fullcalendar/interaction'
// import scrollGridPlugin from '@fullcalendar/scrollgrid'
// import listPlugin from '@fullcalendar/list'
// import Popover from '@/components/parts/popover'
// import ListItems from '@/components/parts/list_items'
// import Select from '@/components/parts/select'
// import faLocale from '@fullcalendar/core/locales/fa'
// import { useEffect, useRef, useState } from 'react'
// import { Button } from '@/components/ui/button'
// import { Card, CardBody, Button as HButton } from '@heroui/react'
// import Icon from './icon'

// export default function Calendar() {



// 	const [events, setEvents] = useState([
// 		{ id: 1, title: 'Daily Standup 1', start: new Date(Date.now()).toISOString(), end: new Date(Date.now() + 2000000).toISOString() },
// 		{ id: 2, title: 'Daily Standup 2', start: new Date(Date.now()).toISOString(), end: new Date(Date.now() + 2000000).toISOString() },
// 		{ id: 3, title: 'Daily Standup 3', start: new Date(Date.now()).toISOString(), end: new Date(Date.now() + 2000000).toISOString() },
// 		{ id: 4, title: 'Daily Standup 4', start: new Date(Date.now()).toISOString(), end: new Date(Date.now() + 2000000).toISOString() },
// 		{ id: 5, title: 'Daily Standup 5', start: new Date(Date.now()).toISOString(), end: new Date(Date.now() + 2000000).toISOString() },
// 		{ id: 6, title: 'Design Revidjdhsjkfhkjsdhfjksdhfew', start: '2025-7-28T14:00:00' },
// 		{ id: 7, title: 'Daily Stand skhffkjhskjdhfkjsdhfjkshdfup', start: new Date(Date.now()).toISOString(), end: new Date(Date.now() + 2000000).toISOString() },
// 		{ id: 8, title: 'Daily Standup', start: new Date(Date.now()).toISOString(), end: new Date(Date.now() + 2000000).toISOString() },
// 		{ id: 9, title: 'Daily Standup', start: new Date(Date.now()).toISOString(), end: new Date(Date.now() + 2000000).toISOString() },
// 		{ id: 10, title: 'Daily Standup', start: new Date(Date.now()).toISOString(), end: new Date(Date.now() + 2000000).toISOString() },
// 		{ id: 11, title: 'Daily Standup', start: new Date(Date.now()).toISOString(), end: new Date(Date.now() + 2000000).toISOString() },
// 		{ id: 12, title: 'Design Review', start: '2025-7-28T14:00:00' }
// 	]);

// 	const calendarRef = useRef(null);


// 	const [more, setMore] = useState({});
// 	const [calendar, setCalendar] = useState({});

// 	const commonBtn = (action) => ({
// 		text: '',
// 		click: action,
// 	});

// 	useEffect(() => {
// 		setCalendar(calendarRef.current)
// 	}, [calendarRef.current])



// 	return (
// 		<>
// 			<div className="flex h-[70px] items-center justify-between">
// 				<div className='flex items-center gap-1'>
// 					<HButton size='sm' onPress={() => calendarRef.current?.getApi().prev()} variant="solid" isIconOnly color="primary"><Icon>chevron-right</Icon></HButton>
// 					<HButton size='sm' onPress={() => calendarRef.current?.getApi().today()} variant="solid" color="primary">امروز</HButton>
// 					<HButton size='sm' onPress={() => calendarRef.current?.getApi().next()} variant="solid" isIconOnly color="primary"><Icon>chevron-left</Icon></HButton>
// 					<Select className="w-[100px]" size="sm" disallowEmptySelection defaultSelectedKeys={['1']} placeholder="نمایش" items={[
// 						{'content': 'روزانه', 'onClick': () => calendarRef.current?.getApi().changeView('timeGridDay')},
// 						{'content': 'هفتگی', 'key': '1', 'onClick': () => calendarRef.current?.getApi().changeView('timeGridWeek')},
// 						{'content': 'ماهانه', 'onClick': () => calendarRef.current?.getApi().changeView('dayGridMonth')},
// 					]} />
// 				</div>
// 				<div>
// 					{(calendar?.title) ?? calendarRef.current?.getApi()?.view.title}
// 				</div>
// 			</div>
// 			<div className='h-[600px] overflow-y-auto p-1 pt-0'>
// 				<FullCalendar
// 					ref={calendarRef}
// 					locale={faLocale}
// 					datesSet={(arg) =>
// 						setCalendar({
// 						  title: arg.view.title,
// 						  viewType: arg.view.type
// 						})
// 					  }
// 					plugins={[dayGridPlugin, listPlugin, scrollGridPlugin, timeGridPlugin, interactionPlugin]}
// 					eventColor='var(--primary)'
// 					initialView="timeGridWeek"
// 					eventMaxStack={1}
// 					views={{
// 						dayGridMonth: { buttonText: 'Month' },
// 						timeGridWeek: { buttonText: 'Week' },
// 						timeGridDay: { buttonText: 'Day' },
// 						timeGrid3Day: {
// 							type: 'timeGrid',
// 							duration: { days: 3 },
// 							buttonText: '3-Day'
// 						}
// 					}}
// 					// dayMaxEventRows={false}
// 					// dayMaxEvents={false}
// 					// slotEventOverlap={false}
// 					// initialView="dayGridMonth"
// 					height="auto"
// 					contentHeight="auto"
// 					expandRows={true}          // optional: stretch rows to fill height
// 					stickyHeaderDates={true} 
// 					fixedWeekCount={false}       // Allow rows to grow dynamically
// 					dayMaxEvents={3}             // Show up to 3 events per day
// 					dayMaxEventRows={3}          // Same control via event rows
// 					moreLinkClick={(args) => { setMore(args); return 'none' }}

// 					moreLinkContent={(args) => {
// 						return <Popover
// 							content={
// 								<ListItems items={[
// 									{ 'items': more.allSegs?.map(r => ({ 'content': <div className='flex gap-4 justify-between'><div>{r.event.title}</div><div className='text-slate-500 text-xs'>{r.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })} – {r.end?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}</div></div> })) }
// 								]} />
// 							}
// 						><Button size="sm" variant="outline" className="w-5 h-6 text-xs">{args.shortText}</Button></Popover>
// 					}
// 					}
// 					slotMinTime="06:00:00"
// 					slotMaxTime="22:00:00"
// 					slotDuration="00:30:00"        // more granular slots
// 					slotEventOverlap={false}       // no visual overlap
// 					eventMinHeight={30}
// 					events={events}
// 					eventContent={(arg) => (
// 						<div>
// 							<b>{arg.timeText}</b> <i>{arg.event.title}</i>
// 						</div>
// 					)}
// 					stickyFooterScrollbar
// 					dayMinWidth={120}
// 					headerToolbar={false}
// 					customButtons={{
// 						myPrev: commonBtn(() => calendarRef.current?.getApi().prev()),
// 						myToday: commonBtn(() => calendarRef.current?.getApi().today()),
// 						myNext: commonBtn(() => calendarRef.current?.getApi().next())
// 					}}
// 				/>
// 			</div>

// 		</>


// 	)
// }










import React, { useEffect, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import { createRoot } from "react-dom/client";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import Popover from '@/components/parts/popover'
import ListItems from '@/components/parts/list_items'
import Select from '@/components/parts/select'
import interactionPlugin from '@fullcalendar/interaction';
import momentPlugin from '@fullcalendar/moment';
import listPlugin from '@fullcalendar/list';
import scrollGridPlugin from '@fullcalendar/scrollgrid'
import moment from 'moment-jalaali';
import './style.sass'
import {
	Button,
	Modal,
	// Popover,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Input,
	Textarea,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger
} from "@heroui/react";
// import { ChevronRight, ChevronLeft, CalendarToday, MoreVert } from '@mui/icons-material';

// Initialize Persian calendar
moment.loadPersian({ usePersianDigits: true, dialect: 'persian-modern' });

const AdvancedPersianCalendar = () => {
	const calendarRef = useRef(null);
	const [view, setView] = useState({ 'title': '' });

	useEffect(() => {
		if (calendarRef.current) {
			setView(calendarRef.current.getApi().view);
		}
	}, []);
	// const [events, setEvents] = useState([
	// 	{ id: '1', title: 'جلسه تیم', start: moment().format('YYYY-MM-DD'), color: '#3b82f6' },
	// 	{ id: '2', title: 'ارائه پروژه', start: moment().add(2, 'days').format('YYYY-MM-DD'), color: '#ef4444' }
	// ]);


	const [events, setEvents] = useState([
		{ id: 1, title: 'Daily Standup 1', start: new Date(Date.now()).toISOString(), end: new Date(Date.now() + 2000000).toISOString() },
		{ id: 2, title: 'Daily Standup 2', start: new Date(Date.now()).toISOString(), end: new Date(Date.now() + 2000000).toISOString() },
		{ id: 3, title: 'Daily Standup 3', start: new Date(Date.now()).toISOString(), end: new Date(Date.now() + 2000000).toISOString() },
		{ id: 4, title: 'Daily Standup 4', start: new Date(Date.now()).toISOString(), end: new Date(Date.now() + 2000000).toISOString() },
		{ id: 5, title: 'Daily Standup 5', start: new Date(Date.now()).toISOString(), end: new Date(Date.now() + 2000000).toISOString() },
		{ id: 6, title: 'Design Revidjdhsjkfhkjsdh fjksdhfew', start: '2025-7-28T14:00:00' },
		{ id: 7, title: 'Daily Stand skhffkjhsk jdhfkjsdhfjkshdfup', start: new Date(Date.now()).toISOString(), end: new Date(Date.now() + 2000000).toISOString() },
		{ id: 8, title: 'Daily Standup', start: new Date(Date.now()).toISOString(), end: new Date(Date.now() + 2000000).toISOString() },
		{ id: 9, title: 'Daily Standup', start: new Date(Date.now()).toISOString(), end: new Date(Date.now() + 2000000).toISOString() },
		{ id: 10, title: 'Daily Standup', start: new Date(Date.now()).toISOString(), end: new Date(Date.now() + 2000000).toISOString() },
		{ id: 11, title: 'Daily Standup', start: new Date(Date.now()).toISOString(), end: new Date(Date.now() + 2000000).toISOString() },
		{ id: 10, title: 'Daily Standup', start: new Date(Date.now() + 2000000).toISOString(), end: new Date(Date.now() + 20000000).toISOString() },
		{ id: 11, title: 'Daily Standup', start: new Date(Date.now() + 2000000).toISOString(), end: new Date(Date.now() + 20000000).toISOString() },
		{ id: 12, title: 'Design Review', start: '2025-7-28T14:00:00' }
	]);
	const [selectedEvent, setSelectedEvent] = useState(null);
	const [newEvent, setNewEvent] = useState({ title: '', description: '', color: '#3b82f6' });
	const [modalVisible, setModalVisible] = useState(false);
	const [more, setMore] = useState({});
	const [clickInfo, setClickInfo] = useState(null);

	// Event handlers (keep your existing handlers)

	const handleDateClick = (info) => {
		setClickInfo(info);
		setNewEvent({
			title: '',
			description: '',
			color: '#3b82f6',
			start: info.dateStr
		});
		setModalVisible(true);
	};

	const handleEventClick = (clickInfo) => {
		setSelectedEvent(clickInfo.event);
		setNewEvent({
			title: clickInfo.event.title,
			description: clickInfo.event.extendedProps.description || '',
			color: clickInfo.event.backgroundColor,
			id: clickInfo.event.id
		});
		setModalVisible(true);
	};

	const handleEventDrop = (dropInfo) => {
		setEvents(events.map(event =>
			event.id === dropInfo.event.id ?
				{ ...event, start: dropInfo.event.startStr } :
				event
		));
	};

	const saveEvent = () => {
		if (selectedEvent) {
			// Update existing event
			setEvents(events.map(event =>
				event.id === selectedEvent.id ?
					{
						...event,
						title: newEvent.title,
						backgroundColor: newEvent.color,
						extendedProps: { description: newEvent.description }
					} :
					event
			));
		} else {
			// Create new event
			setEvents([...events, {
				id: String(events.length + 1),
				title: newEvent.title,
				start: clickInfo.dateStr,
				backgroundColor: newEvent.color,
				extendedProps: { description: newEvent.description }
			}]);
		}
		setModalVisible(false);
		setSelectedEvent(null);
	};

	const deleteEvent = () => {
		setEvents(events.filter(event => event.id !== selectedEvent.id));
		setModalVisible(false);
		setSelectedEvent(null);
	};

	// Custom components
	const EventContent = (eventInfo) => (
		<div className="flex items-start p-1">
			<div
				className="w-3 h-3 rounded-full mt-1 mr-2"
				style={{ backgroundColor: eventInfo.event.backgroundColor }}
			/>
			<div className="flex-1">
				<div className="font-medium truncate">{eventInfo.event.title}</div>
				{eventInfo.event.extendedProps.description && (
					<div className="text-xs text-slate-200 truncate">
						{eventInfo.event.extendedProps.description}
					</div>
				)}
			</div>
		</div>
	);


	const renderDayHeader = (arg) => (
		<div className="font-bold text-gray-700 py-2">
			{arg.text.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))}
		</div>
	);

	const renderDayCell = (arg) => (
		<div className="flex justify-center items-center h-full">
			{arg.dayNumberText.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))}
		</div>
	);

	const calendarApi = useRef(null);

	// Enhanced Custom Toolbar with view switching
	const CustomToolbar = () => {
		return (
			<div className="flex justify-between items-center mb-4 rtl">
				<div className="flex gap-2">
					<Button
						isIconOnly
						variant="light"
						onPress={() => calendarRef.current.getApi().prev()}
					>
						right
					</Button>
					<Button
						variant="flat"
						color="primary"
						onPress={() => calendarRef.current.getApi().today()}
						startContent={'today'}
					>
						امروز
					</Button>
					<Button
						isIconOnly
						variant="light"
						onPress={() => calendarRef.current.getApi().next()}
					>
						left
					</Button>
				</div>

				<h2 className="text-lg font-bold">
					{view.title}
				</h2>

				<Dropdown>
					<DropdownTrigger>
						<Button isIconOnly variant="light">
							move
						</Button>
					</DropdownTrigger>
					<DropdownMenu
						aria-label="View options"
						onAction={(key) => calendarRef.current.getApi().changeView(key)}
					>
						<DropdownItem key="dayGridMonth">ماهانه</DropdownItem>
						<DropdownItem key="timeGridWeek">هفتگی</DropdownItem>
						<DropdownItem key="timeGridDay">روزانه</DropdownItem>
						<DropdownItem key="listWeek">لیست رویدادها</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
		);
	};

	console.log(more);


	return (
		<div className="rtl p-4 rounded-xl w-full mx-auto">
			<CustomToolbar />

			<FullCalendar
				ref={calendarRef}
				plugins={[dayGridPlugin, timeGridPlugin, scrollGridPlugin, listPlugin, interactionPlugin, momentPlugin]}
				initialView="timeGridWeek"
				locale="fa"
				direction="rtl"
				height={650}
				firstDay={6} // Saturday
				headerToolbar={false}
				events={events}
				editable={true}
				selectable={true}
				eventColor='var(--primary)'
				contentHeight="auto"
				expandRows={true}          // optional: stretch rows to fill height
				stickyHeaderDates={true}
				fixedWeekCount={false}       // Allow rows to grow dynamically
				dayMaxEvents={3}             // Show up to 3 events per day
				dayMaxEventRows={3}          // Same control via event rows
				// moreLinkClick={(info) => {
				// 	setMore(info)
				// 	return 'none'
				// }}
				// moreLinkContent={(args) => (
				// 	<div className="fc-more-link">
				// 		<span className='invisible'>{args.shortText}</span>
				// 		<Popover
				// 			content={
				// 				<ListItems items={[
				// 					{ 'items': more.allSegs?.map(r => ({ 'content': <div className='flex gap-4 justify-between'><div>{r.event.title}</div><div className='text-slate-500 text-xs'>{r.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })} – {r.end?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}</div></div> })) }
				// 				]} />
				// 			}
				// 		><Button variant='solid' className='!scale-75 !opacity-100 translate-y-1 text-lg' size="sm" isIconOnly onClick={(e) => e.target.closest(".fc-more-link").querySelector("span").click()}>
				// 				{args.shortText}
				// 			</Button></Popover>
				// 	</div>
				// )}
				
				slotMinTime="06:00:00"
				slotMaxTime="22:00:00"
				slotDuration="00:30:00"        // more granular slots
				slotEventOverlap={false}       // no visual overlap
				eventMinHeight={30}
				stickyFooterScrollbar
				dayMinWidth={120}
				eventMaxStack={1}
				eventResizableFromStart={true}
				dateClick={handleDateClick}
				eventClick={handleEventClick}
				eventDrop={handleEventDrop}
				eventResize={handleEventDrop}
				dayHeaderContent={renderDayHeader}
				dayCellContent={renderDayCell}
				eventContent={EventContent}
				views={{
					dayGridMonth: {
						buttonText: 'ماهانه',
						titleFormat: { year: 'numeric', month: 'long' }
					},
					timeGridWeek: {
						buttonText: 'هفتگی',
						allDaySlot: false,
						slotMinTime: "08:00:00",
						slotMaxTime: "20:00:00"
					},
					timeGridDay: {
						buttonText: 'روزانه',
						allDaySlot: false,
						slotMinTime: "08:00:00",
						slotMaxTime: "20:00:00"
					},
					listWeek: {
						buttonText: 'لیست رویدادها',
						listDayFormat: { weekday: 'long', month: 'long', day: 'numeric' }
					}
				}}
			/>

			<Modal
				isOpen={modalVisible}
				onClose={() => setModalVisible(false)}
				className="rtl"
			>
				<ModalContent className="rtl">
					<ModalHeader>
						<h3 className="text-lg font-bold">
							{selectedEvent ? 'ویرایش رویداد' : 'ایجاد رویداد جدید'}
						</h3>
					</ModalHeader>
					<ModalBody>
						<Input
							label="عنوان"
							value={newEvent.title}
							onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
							className="mb-4"
						/>

						<Textarea
							label="توضیحات"
							value={newEvent.description}
							onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
							className="mb-4"
						/>

						<div className="flex items-center mb-4">
							<span className="mr-3">رنگ:</span>
							<Dropdown>
								<DropdownTrigger>
									<Button
										size="sm"
										className="w-8 h-8 p-0 rounded-full"
										style={{ backgroundColor: newEvent.color }}
									/>
								</DropdownTrigger>
								<DropdownMenu
									aria-label="Event colors"
									onAction={(key) => setNewEvent({ ...newEvent, color: key })}
								>
									<DropdownItem key="#3b82f6">
										<div className="w-6 h-6 rounded-full bg-blue-500"></div>
									</DropdownItem>
									<DropdownItem key="#ef4444">
										<div className="w-6 h-6 rounded-full bg-red-500"></div>
									</DropdownItem>
									<DropdownItem key="#10b981">
										<div className="w-6 h-6 rounded-full bg-green-500"></div>
									</DropdownItem>
									<DropdownItem key="#f59e0b">
										<div className="w-6 h-6 rounded-full bg-yellow-500"></div>
									</DropdownItem>
									<DropdownItem key="#8b5cf6">
										<div className="w-6 h-6 rounded-full bg-purple-500"></div>
									</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</div>
					</ModalBody>
					<ModalFooter>
						<div className="flex justify-between w-full">
							{selectedEvent && (
								<Button
									color="error"
									variant="light"
									onClick={deleteEvent}
								>
									حذف
								</Button>
							)}
							<div className="flex space-x-2">
								<Button
									variant="light"
									onClick={() => setModalVisible(false)}
								>
									لغو
								</Button>
								<Button
									color="primary"
									onClick={saveEvent}
								>
									ذخیره
								</Button>
							</div>
						</div>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</div>
	);
};

export default AdvancedPersianCalendar;