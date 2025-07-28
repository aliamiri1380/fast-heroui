# Fast-HeroUI
A React-based ui library based on HeroUI and Tailwind to make a UI using HeroUI components as fast as possible 

The goal of this lib is just to make web UI designing faster and avoid many handy stuff that takes your time, although this may take about 10% of your freedom to modify styles, hence I used HeroUI + tailwindcss to make it easier.

**Note that this lib has been made for personal purposes, but I decided to publish it open source for other developers, so if you encounter any issue, please tell me**

**Also, I should mention that since HeroUI doesn't support many other components like: Drag-and-Drop, Timeline, FullCalendar, ... I used some other libraries to only use their components. For example, I used MUI's Timeline and DiceUI's sortable component**
# Installtion
Currently, you just need to copy and paste the folder: **parts** wherever you want, and import components
# code examples
Consider that you need a dropdown menu
Here's what HeroUI provides as its basic usage example: 
```js
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@heroui/react";

export default function App() {
	return (
	<Dropdown>
	  <DropdownTrigger>
	    <Button variant="bordered">Open Menu</Button>
	  </DropdownTrigger>
	  <DropdownMenu aria-label="Static Actions">
	    <DropdownItem key="new">New file</DropdownItem>
	    <DropdownItem key="copy">Copy link</DropdownItem>
	    <DropdownItem key="edit">Edit file</DropdownItem>
	    <DropdownItem key="delete" className="text-danger" color="danger">
	      Delete file
	    </DropdownItem>
	  </DropdownMenu>
	</Dropdown>
	);
}
```
So, using Fast-HeroUI, it's identical to:
```js
    import  Dropdown  from  './parts/hero_dropdown'
    
    <Dropdown  items={[
	    {'type':  'item', 'content':  'New file'},
	    {'type':  'item', 'content':  'Copy link'},
	    {'type':  'item', 'content':  'Edit file'},
	    {'type':  'item', 'content':  'Delete file', 'props': {'color':  'danger'}},
    ]}>
	    <Button>Open Menu</Button>
    </Dropdown>
```
Need icons ?: 
```js
import  Dropdown  from  './parts/hero_dropdown'

<Dropdown  items={[
    {'type':  'item', 'content':  'New file', 'icon':  'file-plus'},
    {'type':  'item', 'content':  'Copy link', 'icon':  'link'},
    {'type':  'item', 'content':  'Edit file', 'icon':  'pencil'},
    {'type':  'item', 'content':  'Delete file', 'icon':  'trash', 'props': {'color':  'danger'}},
]}>
    <Button>Open Menu</Button>
</Dropdown>
```
**So by default I use Tabler icons since I found it beautiful and a vast icon library**
Find them here: tabler.io/icons

**If you need to change the icon webfont, for example, font-awesome (fa), just open icon.jsx and replace **

```js
export  default ({fontPrefix="ti", ...props}) => {
```
with
```js
export  default ({fontPrefix="fa", ...props}) => {
```
Now you may need nested dropdown menus, which are not supported in HeroUI yet on 2.8.0
So you can do this using Fast HeroUI:
```js
import  Dropdown  from  './parts/hero_dropdown'

<Dropdown  items={[
    {'type':  'item', 'content':  'New file', 'icon':  'file-plus'},
    {'type':  'sub', 'content':  'Copy link', 'icon':  'link', 'items':  [
	    {'type':  'item', 'content':  'Copy full link', 'icon':  'link-plus'},
	    {'type':  'item', 'content':  'Copy short link', 'icon':  'link-plus', 'iconProps': {'size':  'md'}},
	    {'type':  'sub', 'content':  'Copy colorful link', 'icon':  'link-plus', 'items':  [
		    {'type':  'item', 'content':  'red', 'props': {'color':  'danger'}},
		    {'type':  'item', 'content':  'green', 'props': {'color':  'success'}},
		    {'type':  'item', 'content':  'blue', 'props': {'color':  'primary'}},
	    ]},
	    ]},
    {'type':  'item', 'content':  'Edit file', 'icon':  'pencil'},
    {'type':  'item', 'content':  'Delete file', 'icon':  'trash', 'props': {'color':  'danger'}},
]}>
<Button>Open Menu</Button>
</Dropdown>
```

**Table:**
HeroUI: 
```js
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@heroui/react";

export default function App() {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Zoey Lang</TableCell>
          <TableCell>Technical Lead</TableCell>
          <TableCell>Paused</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Jane Fisher</TableCell>
          <TableCell>Senior Developer</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>William Howard</TableCell>
          <TableCell>Community Manager</TableCell>
          <TableCell>Vacation</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
```
Fast HeroUI:
```js
import Table from '@/components/parts/table'

<Table header={['header 1', 'header 2', 'header 3']} body={[
    ['body 1.1', 'body 1.2', 'body 1.3'],
    ['body 2.1', 'body 2.2', 'body 2.3'],
    ['body 3.1', 'body 3.2', 'body 3.3'],
]} />
```

Modal: 
HeroUI:
```js
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

export default function App() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                  adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                  officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                  deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
```
Fast HeroUI

```js
import Dropdown from './parts/modal'
import { Button } from '@heroui/react'

<Modal title="the title" content={
    <div>
        <h1>hello world</h1>
    </div>
}>
    <Button>open modal</Button>
</Modal>
```
TreeView:
```js
import TreeView from './parts/tree'

<TreeView items={
    [
        {
            'content': <span>title one</span>, 'sub': [
                { 'content': <span>title two</span> },
                {
                    'content': <span>title three</span>, 'sub': [
                        { 'content': <span>title four</span> },
                        { 'content': <span>title five</span> },
                        { 'content': <span>title six</span> },
                    ]
                },
                { 'content': <span>title seven</span> },
            ]
        },
        {
            'content': <span>title nine</span>
        },
        {
            'content': <span>title ten</span>
        },
    ]
} />
```

And so much more ...
