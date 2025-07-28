# Fast-HeroUI
A react based ui library based on HeroUI and Tailwind to make a UI using heroUI components as fast as possible 

the goal of this lib is to just make web UI designing faster and avoiding many handy stuff that takes your time , although this may take about 10% of your freedom  to modify styles , hence I used HeroUI + tailwindcss to make it easier

**note that this lib has made for personal purposes but i decided to publish it open source for other developers, so if you tackled to any issue please tell me**

**also i should mention that since HeroUI doesn't support many other components like: Drag-and-Drop, Timeline, FullCalendar, ... I used some other libraries to only use their components for example I used MUI's Timeline and DiceUI's sortable component**
# code examples
consider you need a dropdown menu
here's what HeroUI provides as its basic usage example: 

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

so using Fast-HeroUI its identical to:
	
    import  Dropdown  from  './parts/hero_dropdown'
    
    <Dropdown  items={[
	    {'type':  'item', 'content':  'New file'},
	    {'type':  'item', 'content':  'Copy link'},
	    {'type':  'item', 'content':  'Edit file'},
	    {'type':  'item', 'content':  'Delte file', 'props': {'color':  'danger'}},
    ]}>
	    <Button>Open Menu</Button>
    </Dropdown>

need icons ?: 

    import  Dropdown  from  './parts/hero_dropdown'
    
    <Dropdown  items={[
	    {'type':  'item', 'content':  'New file', 'icon':  'file-plus'},
	    {'type':  'item', 'content':  'Copy link', 'icon':  'link'},
	    {'type':  'item', 'content':  'Edit file', 'icon':  'pencil'},
	    {'type':  'item', 'content':  'Delte file', 'icon':  'trash', 'props': {'color':  'danger'}},
    ]}>
	    <Button>Open Menu</Button>
    </Dropdown>

**so by default i use Tabler icons since I found it beautiful and vast icon library**
find them here: tabler.io/icons

**if you need to change the icon webfont for example font-awesome (fa) just open icon.jsx and replace **

    export  default ({fontPrefix="ti", ...props}) => {
with

    export  default ({fontPrefix="fa", ...props}) => {

now you may need nested dropdown menus which are not supported in HeroUI yet on 2.8.0
so you can do this using Fast HeroUI:

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
	    {'type':  'item', 'content':  'Delte file', 'icon':  'trash', 'props': {'color':  'danger'}},
    ]}>
    <Button>Open Menu</Button>
    </Dropdown>
